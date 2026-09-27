import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteNav, Container } from "@/components/chrome";
import { TechLabel } from "@/components/ui";
import { WorkflowRow } from "@/components/workflow";

export const Route = createFileRoute("/lab")({
  component: LabPage,
});

const ITEMS = [
  {
    label: "PRACTICE",
    title: "AI Lead Qualification",
    copy: "A practice workflow that reads an inquiry and drafts a short qualification note.",
    flow: ["FORM", "AI", "NOTES", "DASHBOARD"],
  },
  {
    label: "PRACTICE",
    title: "Lead Capture Automation",
    copy: "Form intake, validation, and database storage — the same pattern used on this site.",
    flow: ["FORM", "VALIDATE", "DATABASE", "NOTIFY"],
  },
  {
    label: "CONCEPT",
    title: "CRM Workflow",
    copy: "A conceptual routing model for moving qualified leads into a CRM.",
    flow: ["LEAD", "RULES", "CRM", "OWNER"],
  },
  {
    label: "CONCEPT / PROTOTYPE",
    title: "AI Chatbot",
    copy: "A prototype pattern for answering common questions from a knowledge source.",
    flow: ["QUESTION", "AI", "KNOWLEDGE", "RESPONSE"],
  },
];

function LabPage() {
  return (
    <div className="min-h-dvh bg-page">
      <SiteNav />
      <main>
        <section className="border-b border-line py-16 lg:py-24">
          <Container>
            <TechLabel>Lab</TechLabel>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Practice and concept work
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-soft">
              These are not client projects. They are labeled so it stays clear what is
              live client work and what is practice or concept exploration.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline"
            >
              ← Back to portfolio
            </Link>
          </Container>
        </section>

        <section className="py-16 lg:py-24">
          <Container>
            <div className="space-y-6">
              {ITEMS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-line bg-surface p-6 sm:p-8"
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-cyan">
                    {item.label}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-ink-soft">{item.copy}</p>
                  <div className="mt-5">
                    <WorkflowRow steps={item.flow} />
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
