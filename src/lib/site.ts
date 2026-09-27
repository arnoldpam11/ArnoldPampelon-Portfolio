export const SITE = {
  name: "Arnold Pampelon",
  title: "Arnold Pampelon | AI Automation & Workflow Specialist",
  role: "AI Automation & Workflow Specialist",
  brand: "ARTECH",
  tagline: "AUTOMATE • BUILD • GROW",
  description:
    "Arnold Pampelon builds practical AI automation, business workflows, CRM systems, API integrations, and AI assistants that reduce repetitive work.",
  positioning:
    "Building practical AI-powered automations and business workflows that reduce repetitive work, connect your tools, and help businesses operate more efficiently.",
  swiftfixUrl: "https://swiftfix-web-portal.vercel.app",
} as const;

export const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
] as const;

export const SERVICES = [
  "AI Automation",
  "CRM Automation",
  "Lead Automation",
  "API Integration",
  "AI Chatbot",
  "Business Workflow",
  "Other",
] as const;

export const BUDGETS = [
  "Not sure yet",
  "Exploring options",
  "$300–500",
  "$500–1,000",
  "$1,000+",
] as const;

export const LEAD_STATUSES = [
  "new",
  "contacted",
  "proposal",
  "won",
  "lost",
  "archived",
] as const;

export type LeadStatus = (typeof LEAD_STATUSES)[number];
export type ServiceOption = (typeof SERVICES)[number];

export const STATUS_LABEL: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  proposal: "Proposal",
  won: "Won",
  lost: "Lost",
  archived: "Archived",
};
