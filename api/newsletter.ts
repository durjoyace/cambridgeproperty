import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";
import { z } from "zod";
import { escapeHtml, guardPublicPost, requireEnv } from "./_lib/security.js";

const newsletterSchema = z.object({
  email: z.string().trim().toLowerCase().email("Valid email is required").max(254),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!guardPublicPost(req, res, { route: "newsletter", limit: 10 })) return;

  const parsed = newsletterSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  const { email } = parsed.data;

  try {
    const sql = neon(requireEnv("NEON_DATABASE_URL"));

    // Upsert — don't fail on duplicates
    await sql`
      INSERT INTO newsletter_subscribers (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING
    `;

    // Notify principals
    const resend = new Resend(requireEnv("RESEND_API_KEY"));
    const { error: notifyError } = await resend.emails.send({
      from: "Thane & Reeve <notifications@thaneandreeve.com>",
      to: process.env.NOTIFICATION_EMAIL || "acquisitions@thaneandreeve.com",
      subject: `New Newsletter Subscriber: ${email}`,
      html: `<p>New newsletter subscriber: <strong>${escapeHtml(email)}</strong></p><p>Subscribed at ${new Date().toISOString()}</p>`,
    });
    // Subscriber is already persisted; log delivery failures (e.g. unverified
    // sender domain) without failing the request — Resend resolves with
    // { error } rather than throwing.
    if (notifyError) {
      console.error("Newsletter: subscriber notification email failed", notifyError);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
