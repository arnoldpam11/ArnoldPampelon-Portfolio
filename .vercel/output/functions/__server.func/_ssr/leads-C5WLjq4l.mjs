import { i as SERVICES, n as LEAD_STATUSES, t as BUDGETS } from "./site-DvMkYlXS.mjs";
import { D as _enum, F as object, R as string } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leads-C5WLjq4l.js
var leadInquirySchema = object({
	name: string().trim().min(2, "Please enter your name.").max(80),
	email: string().trim().email("Please enter a valid email.").max(120),
	company: string().trim().max(120).default(""),
	service: _enum(SERVICES, { message: "Please choose a service." }),
	current_process: string().trim().min(8, "Tell me a little about the current process.").max(2e3),
	desired_result: string().trim().min(8, "Describe the result you want.").max(2e3),
	budget: _enum(BUDGETS, { message: "Please choose a budget range." }),
	message: string().trim().max(4e3).default(""),
	website: string().max(200).optional()
});
function isLeadStatus(value) {
	return LEAD_STATUSES.includes(value);
}
//#endregion
export { leadInquirySchema as n, isLeadStatus as t };
