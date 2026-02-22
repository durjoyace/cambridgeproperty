import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";
import { z } from "zod";

const submissionSchema = z.object({
  assetType: z.string().min(1, "Asset type is required"),
  unitCount: z.number().int().positive("Unit count must be positive"),
  askingPrice: z.string().optional().default(""),
  market: z.string().min(1, "Market is required"),
  state: z.string().min(1, "State is required"),
  dealStructure: z.string().min(1, "Deal structure is required"),
  ownerName: z.string().min(1, "Owner name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional().default(""),
  additionalNotes: z.string().optional().default(""),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const parsed = submissionSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: parsed.error.flatten().fieldErrors,
    });
  }

  const data = parsed.data;

  try {
    const sql = neon(process.env.NEON_DATABASE_URL!);
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

    const resend = new Resend(process.env.RESEND_API_KEY!);
    await resend.emails.send({
      from: "Barrett & Johnson <notifications@barrettjohnson.com>",
      to: process.env.NOTIFICATION_EMAIL || "acquisitions@barrettjohnson.com",
      subject: `New Property Submission: ${data.unitCount}-unit ${data.assetType} in ${data.market}, ${data.state}`,
      html: `
        <h2>New Property Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Asset Type</td><td style="padding:8px;border:1px solid #ddd;">${data.assetType}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Unit Count</td><td style="padding:8px;border:1px solid #ddd;">${data.unitCount}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Asking Price</td><td style="padding:8px;border:1px solid #ddd;">${data.askingPrice || "Not disclosed"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Market</td><td style="padding:8px;border:1px solid #ddd;">${data.market}, ${data.state}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Deal Structure</td><td style="padding:8px;border:1px solid #ddd;">${data.dealStructure}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Owner</td><td style="padding:8px;border:1px solid #ddd;">${data.ownerName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${data.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${data.phone || "Not provided"}</td></tr>
          ${data.additionalNotes ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Notes</td><td style="padding:8px;border:1px solid #ddd;">${data.additionalNotes}</td></tr>` : ""}
        </table>
      `,
    });

    // Send confirmation email to submitter
    await resend.emails.send({
      from: "Barrett & Johnson <notifications@barrettjohnson.com>",
      to: data.email,
      subject: "We've Received Your Property Submission — Barrett & Johnson",
      html: `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
          <div style="background:#1a1d23;padding:32px 24px;text-align:center;">
            <h1 style="color:#d4a855;font-size:22px;font-weight:600;margin:0;letter-spacing:1px;">Barrett &amp; Johnson</h1>
            <p style="color:#a0a0a0;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:8px 0 0;">Cambridge Property Owners &amp; Developers</p>
          </div>
          <div style="padding:32px 24px;">
            <p style="font-size:16px;line-height:1.7;margin:0 0 20px;">Dear ${data.ownerName},</p>
            <p style="font-size:15px;line-height:1.7;margin:0 0 20px;">Thank you for submitting your property to Barrett &amp; Johnson. Our principals — Patrick W. Barrett III and Tim Johnson, CPM — will personally review your submission and be in touch within <strong>48 business hours</strong>.</p>
            <div style="background:#f8f7f5;border-left:3px solid #d4a855;padding:20px 24px;margin:24px 0;">
              <p style="font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#888;margin:0 0 12px;">Your Submission Summary</p>
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:6px 0;font-size:13px;color:#666;">Asset Type</td><td style="padding:6px 0;font-size:13px;font-weight:600;text-align:right;">${data.assetType}</td></tr>
                <tr><td style="padding:6px 0;font-size:13px;color:#666;">Units</td><td style="padding:6px 0;font-size:13px;font-weight:600;text-align:right;">${data.unitCount}</td></tr>
                <tr><td style="padding:6px 0;font-size:13px;color:#666;">Market</td><td style="padding:6px 0;font-size:13px;font-weight:600;text-align:right;">${data.market}, ${data.state}</td></tr>
                <tr><td style="padding:6px 0;font-size:13px;color:#666;">Deal Structure</td><td style="padding:6px 0;font-size:13px;font-weight:600;text-align:right;">${data.dealStructure}</td></tr>
              </table>
            </div>
            <p style="font-size:14px;line-height:1.7;color:#555;margin:24px 0 8px;"><strong>What happens next:</strong></p>
            <ol style="font-size:14px;line-height:1.8;color:#555;padding-left:20px;margin:0 0 24px;">
              <li>Patrick and Tim review your submission personally</li>
              <li>If there's a fit, we'll schedule a confidential conversation</li>
              <li>You'll hear from us within 48 business hours either way</li>
            </ol>
            <p style="font-size:14px;line-height:1.7;color:#555;">Questions in the meantime? Reach us at <a href="mailto:acquisitions@barrettjohnson.com" style="color:#d4a855;">acquisitions@barrettjohnson.com</a> or <a href="tel:6177783521" style="color:#d4a855;">617-778-3521</a>.</p>
          </div>
          <div style="background:#f8f7f5;padding:20px 24px;text-align:center;border-top:1px solid #e8e5e0;">
            <p style="font-size:11px;color:#999;margin:0;">Barrett &amp; Johnson &middot; Cambridge, MA &middot; barrettjohnson.com</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
