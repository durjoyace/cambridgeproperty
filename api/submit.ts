import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";
import { z } from "zod";
import { escapeHtml, guardPublicPost, requireEnv } from "./_lib/security";

const submissionSchema = z.object({
  assetType: z.string().trim().min(1, "Asset type is required").max(80).regex(/^[^\r\n]+$/),
  unitCount: z.number().int().positive("Unit count must be positive").max(100_000),
  askingPrice: z.string().trim().max(80).optional().default(""),
  market: z.string().trim().min(1, "Market is required").max(120).regex(/^[^\r\n]+$/),
  state: z.string().trim().min(1, "State is required").max(50).regex(/^[^\r\n]+$/),
  dealStructure: z.string().trim().min(1, "Deal structure is required").max(80),
  ownerName: z.string().trim().min(1, "Owner name is required").max(120),
  email: z.string().trim().email("Valid email is required").max(254),
  phone: z.string().trim().max(40).optional().default(""),
  additionalNotes: z.string().trim().max(10_000).optional().default(""),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!guardPublicPost(req, res, { route: "property-submission" })) return;

  const parsed = submissionSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: parsed.error.flatten().fieldErrors,
    });
  }

  const data = parsed.data;

  try {
    const sql = neon(requireEnv("NEON_DATABASE_URL"));
    await sql`
      INSERT INTO property_submissions (
        asset_type, unit_count, asking_price, market, state,
        deal_structure, owner_name, email, phone, additional_notes
      ) VALUES (
        ${data.assetType}, ${data.unitCount}, ${data.askingPrice},
        ${data.market}, ${data.state}, ${data.dealStructure},
        ${data.ownerName}, ${data.email}, ${data.phone},
        ${data.additionalNotes}
      )
    `;

    const resend = new Resend(requireEnv("RESEND_API_KEY"));
    const { error: notifyError } = await resend.emails.send({
      from: "Thane & Reeve <notifications@thaneandreeve.com>",
      to: process.env.NOTIFICATION_EMAIL || "acquisitions@thaneandreeve.com",
      subject: `New Property Submission: ${data.unitCount}-unit ${data.assetType} in ${data.market}, ${data.state}`,
      replyTo: data.email,
      html: `
        <h2>New Property Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Asset Type</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.assetType)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Unit Count</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.unitCount)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Asking Price</td><td style="padding:8px;border:1px solid #ddd;">${data.askingPrice || "Not disclosed"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Market</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.market)}, ${escapeHtml(data.state)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Deal Structure</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.dealStructure)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Owner</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.ownerName)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.email)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${data.phone || "Not provided"}</td></tr>
          ${data.additionalNotes ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Notes</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.additionalNotes)}</td></tr>` : ""}
        </table>
      `,
    });
    // Resend SDK resolves with { error } instead of throwing on a delivery
    // failure (e.g. unverified sender domain). The submission is already
    // persisted, so we log loudly for Vercel logs but still return success.
    if (notifyError) {
      console.error("Property submission: partner notification email failed", notifyError);
    }

    // Send confirmation email to submitter
    const { error: confirmError } = await resend.emails.send({
      from: "Thane & Reeve <notifications@thaneandreeve.com>",
      to: data.email,
      subject: "We've received your property submission — Thane & Reeve",
      html: `
        <div style="font-family:Georgia,'Times New Roman',serif;max-width:600px;margin:0 auto;color:#161814;background:#F2EFE7;">
          <div style="background:#161814;padding:40px 32px;text-align:center;">
            <h1 style="color:#F2EFE7;font-size:26px;font-weight:400;margin:0;letter-spacing:4px;font-family:Georgia,'Times New Roman',serif;">THANE <span style="color:#836634;font-style:italic;">&amp;</span> REEVE</h1>
            <p style="color:#F2EFE7;opacity:0.6;font-size:10px;letter-spacing:4px;text-transform:uppercase;margin:10px 0 0;font-family:Arial,sans-serif;">Real Property · Northeast</p>
          </div>
          <div style="padding:36px 32px;background:#F2EFE7;">
            <p style="font-size:15px;line-height:1.7;margin:0 0 20px;font-family:Georgia,serif;">Dear ${escapeHtml(data.ownerName)},</p>
            <p style="font-size:15px;line-height:1.8;margin:0 0 20px;font-family:Georgia,serif;">Thank you for submitting your property to Thane &amp; Reeve. Patrick Barrett and Timothy Johnson will review your submission personally and be in touch within <strong>48 business hours</strong>.</p>
            <div style="background:#E8E4D9;border-left:2px solid #836634;padding:20px 24px;margin:28px 0;">
              <p style="font-size:10px;text-transform:uppercase;letter-spacing:3px;color:#161814;opacity:0.6;margin:0 0 14px;font-family:Arial,sans-serif;">Your submission</p>
              <table style="width:100%;border-collapse:collapse;font-family:Georgia,serif;">
                <tr><td style="padding:6px 0;font-size:13px;color:#161814;opacity:0.6;">Asset type</td><td style="padding:6px 0;font-size:13px;font-weight:600;text-align:right;">${escapeHtml(data.assetType)}</td></tr>
                <tr><td style="padding:6px 0;font-size:13px;color:#161814;opacity:0.6;">Units</td><td style="padding:6px 0;font-size:13px;font-weight:600;text-align:right;">${escapeHtml(data.unitCount)}</td></tr>
                <tr><td style="padding:6px 0;font-size:13px;color:#161814;opacity:0.6;">Market</td><td style="padding:6px 0;font-size:13px;font-weight:600;text-align:right;">${escapeHtml(data.market)}, ${escapeHtml(data.state)}</td></tr>
                <tr><td style="padding:6px 0;font-size:13px;color:#161814;opacity:0.6;">Deal structure</td><td style="padding:6px 0;font-size:13px;font-weight:600;text-align:right;">${escapeHtml(data.dealStructure)}</td></tr>
              </table>
            </div>
            <p style="font-size:14px;line-height:1.8;color:#161814;margin:24px 0 8px;font-family:Georgia,serif;"><strong>What happens next:</strong></p>
            <ol style="font-size:14px;line-height:1.9;color:#161814;padding-left:20px;margin:0 0 24px;font-family:Georgia,serif;">
              <li>We underwrite your property to the firm's standard</li>
              <li>If there's a fit, we schedule a confidential conversation</li>
              <li>You hear back from us within 48 business hours either way</li>
            </ol>
            <p style="font-size:14px;line-height:1.7;color:#161814;font-family:Georgia,serif;">Questions in the meantime? Reach us at <a href="mailto:acquisitions@thaneandreeve.com" style="color:#836634;">acquisitions@thaneandreeve.com</a>.</p>
          </div>
          <div style="background:#161814;padding:20px 24px;text-align:center;">
            <p style="font-size:10px;color:#F2EFE7;opacity:0.55;margin:0;letter-spacing:3px;text-transform:uppercase;font-family:Arial,sans-serif;">Thane &amp; Reeve Holdings LLC · Boston · thaneandreeve.com</p>
          </div>
        </div>
      `,
    });
    if (confirmError) {
      console.error("Property submission: submitter confirmation email failed", confirmError);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
