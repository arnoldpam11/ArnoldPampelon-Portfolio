import { z } from "zod";
import { BUDGETS, LEAD_STATUSES, SERVICES, type LeadStatus } from "./site";

export const leadInquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.string().trim().email("Please enter a valid email.").max(120),
  company: z.string().trim().max(120).default(""),
  service: z.enum(SERVICES, { message: "Please choose a service." }),
  current_process: z
    .string()
    .trim()
    .min(8, "Tell me a little about the current process.")
    .max(2000),
  desired_result: z
    .string()
    .trim()
    .min(8, "Describe the result you want.")
    .max(2000),
  budget: z.enum(BUDGETS, { message: "Please choose a budget range." }),
  message: z.string().trim().max(4000).default(""),
  website: z.string().max(200).optional(),
});

export type LeadInquiryInput = z.infer<typeof leadInquirySchema>;

export type LeadRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string;
  service: string;
  current_process: string;
  desired_result: string;
  budget: string;
  message: string;
  status: LeadStatus;
  ai_notes: string | null;
  ai_status: string;
  archived_at: string | null;
};

export type LeadEvent = {
  id: string;
  lead_id: string;
  event_type: string;
  detail: string;
  created_at: string;
};

export function isLeadStatus(value: string): value is LeadStatus {
  return (LEAD_STATUSES as readonly string[]).includes(value);
}
