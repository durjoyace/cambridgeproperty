import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Valid email is required"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const parsed = newsletterSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  const { email } = parsed.data;

  try {
    const sql = neon(process.env.NEON_DATABASE_URL!);

    // Upsert — don't fail on duplicates
    await sql`
      INSERT INTO newsletter_subscribers (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING
    `;

    // Notify principals
    const resend = new Resend(process.env.RESEND_API_KEY!);
    await resend.emails.send({
      from: "Barrett & Johnson <notifications@barrettjohnson.com>",
      to: process.env.NOTIFICATION_EMAIL || "acquisitions@barrettjohnson.com",
      subject: `New Newsletter Subscriber: ${email}`,
      html: `<p>New newsletter subscriber: <strong>${email}</strong></p><p>Subscribed at ${new Date().toISOString()}</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
