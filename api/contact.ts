import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";
import { escapeHtml, guardPublicPost, requireEnv } from "./_lib/security.js";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email is required").max(254),
  subject: z.string().trim().min(1, "Subject is required").max(160).regex(/^[^\r\n]+$/),
  message: z.string().trim().min(1, "Message is required").max(5_000),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!guardPublicPost(req, res, { route: "contact" })) return;

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: parsed.error.flatten().fieldErrors,
    });
  }

  const data = parsed.data;

  try {
    const resend = new Resend(requireEnv("RESEND_API_KEY"));
    const { error: notifyError } = await resend.emails.send({
      from: "Thane & Reeve <notifications@thaneandreeve.com>",
      to: process.env.NOTIFICATION_EMAIL || "contact@thaneandreeve.com",
      subject: `Contact Form: ${escapeHtml(data.subject)}`,
      replyTo: data.email,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.name)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.email)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Subject</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.subject)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.message)}</td></tr>
        </table>
      `,
    });
    if (notifyError) {
      console.error("Contact form: notification email failed", notifyError);
      return res.status(502).json({
        error: "Your message could not be delivered. Please email us directly.",
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
