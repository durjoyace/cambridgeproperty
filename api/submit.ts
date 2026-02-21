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

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
