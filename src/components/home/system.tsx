import { useState } from "react";
import { TechLabel } from "@/components/ui";
import { Container } from "@/components/chrome";
import { WorkflowRow, WorkflowStack } from "@/components/workflow";

const ARCH = [
  { label: "WEBSITE", sub: "Portfolio interface" },
  { label: "FORM", sub: "Automation inquiry" },
  { label: "SERVER FUNCTION", sub: "Validate & store" },
  { label: "POSTGRESQL", sub: "Leads table" },
  { label: "ADMIN DASHBOARD", sub: "Private lead management" },
];

const DEMO_STEPS = [
  { label: "CUSTOMER SUBMITS FORM", sub: "Inquiry captured" },
  { label: "AI ANALYZES REQUEST", sub: "Qualification notes" },
  { label: "LEAD QUALIFIED", sub: "Structured record" },
  { label: "POSTGRESQL", sub: "Lead stored" },
  { label: "DASHBOARD NOTIFICATION", sub: "Arnold can follow up" },
];

const USE_CASES = [
  {
    title: "Lead Management",
    steps: ["FORM", "AI", "CRM", "NOTIFICATION"],
  },
  {
    title: "Customer Support",
    steps: ["QUESTION", "AI", "KNOWLEDGE", "RESPONSE"],
  },
  {
    title: "Appointment Flow",
    steps: ["BOOKING", "CONFIRMATION", "REMINDER", "FOLLOW-UP"],
  },
  {
    title: "Data Processing",
    steps: ["INPUT", "AI", "DATABASE", "REPORT"],
  },
];

const STACK = [
  { group: "Automation", items: ["Make"] },
  { group: "AI", items: ["AI APIs", "AI Assistants", "Chatbots"] },
  { group: "Backend", items: ["PostgreSQL", "SQL"] },
  { group: "Integration", items: ["REST APIs", "Webhooks", "JSON"] },
  { group: "Development", items: ["HTML", "CSS", "JavaScript", "React"] },
  { group: "Deployment", items: ["GitHub", "Vercel"] },
];

const PROCESS = [
  { num: "01", title: "UNDERSTAND", copy: "Find the actual problem." },
  { num: "02", title: "MAP", copy: "Identify the repetitive process." },
  { num: "03", title: "BUILD", copy: "Connect the tools." },
  { num: "04", title: "TEST", copy: "Check the workflow and edge cases." },
  { num: "05", title: "IMPROVE", copy: "Monitor and optimize." },
];

export function BackendSection() {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <TechLabel>Connected system</TechLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            The portfolio is a system too.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            This portfolio doesn't just show my work. It demonstrates how I build
            connected systems behind the interface.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-mute">
            Live on this site: the public form writes to PostgreSQL through a server
            function, then the inquiry appears in a private authenticated dashboard.
            Email delivery can sit on the same server-function hop when an email
            provider is connected — it is not claimed as a live send from this build.
          </p>
        </div>
        <WorkflowStack title="ARNOLD PORTFOLIO" nodes={ARCH} status="SYSTEM LIVE" />
      </Container>
    </section>
  );
}

export function DemoSection() {
  const [step, setStep] = useState(0);
  const visible = DEMO_STEPS.slice(0, step + 1);

  return (
    <section className="border-t border-line bg-page-alt py-20 lg:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <TechLabel>Demo</TechLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            See Automation in Action
          </h2>
          <p className="mt-5 max-w-xl text-ink-soft">
            This stepper is a labeled demo of the intake pattern. Submitting the contact
            form below is the live version: validate, store, optional AI notes, dashboard.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-medium text-page"
              onClick={() => setStep((value) => (value + 1) % DEMO_STEPS.length)}
            >
              Advance demo
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-line-strong px-5 text-sm font-medium text-ink"
              onClick={() => setStep(0)}
            >
              Reset
            </button>
          </div>
        </div>
        <WorkflowStack
          title="DEMO"
          nodes={visible}
          status="SIMULATED"
          live={false}
        />
      </Container>
    </section>
  );
}

export function UseCasesSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <TechLabel>Workflow patterns</TechLabel>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Practical use cases
        </h2>
        <div className="mt-12 space-y-4">
          {USE_CASES.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-4 rounded-xl border border-line bg-surface px-5 py-5 md:flex-row md:items-center md:justify-between"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight">{item.title}</h3>
              <WorkflowRow steps={item.steps} />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function StackSection() {
  return (
    <section className="border-t border-line bg-page-alt py-20 lg:py-28">
      <Container>
        <TechLabel>Stack</TechLabel>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Tools behind the workflows
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {STACK.map((group) => (
            <article key={group.group} className="border-t border-line pt-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-cyan">{group.group}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-base text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28">
      <Container>
        <TechLabel>Process</TechLabel>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          From problem to working workflow
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-5">
          {PROCESS.map((item, index) => (
            <li key={item.num} className="relative border-t border-line pt-5">
              {index < PROCESS.length - 1 ? (
                <span className="absolute top-0 right-[-1.25rem] hidden h-px w-8 bg-cyan/40 md:block" />
              ) : null}
              <p className="font-display text-3xl font-semibold text-ink-mute">{item.num}</p>
              <h3 className="mt-4 font-mono text-xs uppercase tracking-widest text-cyan">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.copy}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="border-t border-line">
      <Container className="py-20 lg:py-28">
        <div className="rounded-xl border border-line bg-[linear-gradient(180deg,#0d131c_0%,#111923_100%)] px-6 py-14 text-center sm:px-12">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Ready to automate the repetitive work?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
            Let's turn the manual process into a reliable workflow.
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-cyan px-6 text-sm font-medium text-page hover:bg-cyan/90"
          >
            Let's Work Together →
          </a>
        </div>
      </Container>
    </section>
  );
}
