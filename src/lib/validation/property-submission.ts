import { z } from "zod";

export const propertySubmissionSchema = z.object({
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

export type PropertySubmission = z.infer<typeof propertySubmissionSchema>;
