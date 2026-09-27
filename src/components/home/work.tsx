import { SITE } from "@/lib/site";
import { TechLabel } from "@/components/ui";
import { Container } from "@/components/chrome";
import { BrowserFrame, WorkflowRow } from "@/components/workflow";

const SERVICES = [
  {
    title: "AI Workflow Automation",
    copy: "Practical AI-powered workflows that handle repetitive steps without adding unnecessary complexity.",
  },
  {
    title: "Lead & CRM Automation",
    copy: "Capture, qualify, organize, and route leads so follow-up is not stuck in a spreadsheet.",
  },
  {
    title: "Business Process Automation",
    copy: "Reduce repetitive manual work across the tools a business already uses.",
  },
  {
    title: "API & Webhook Integrations",
    copy: "Connect business tools and services so data moves without copy-paste.",
  },
  {
    title: "AI Chatbots & Assistants",
    copy: "Build useful AI-powered assistants for questions, intake, and internal support.",
  },
  {
    title: "Automation Maintenance",
    copy: "Monitor, troubleshoot, and improve workflows after they are live.",
  },
];

const MANUAL = ["CUSTOMER", "EMAIL", "MANUAL COPY", "SPREADSHEET", "CRM", "MANUAL FOLLOW-UP"];
const AUTOMATED = ["CUSTOMER", "TRIGGER", "AI", "DATABASE", "NOTIFICATION", "FOLLOW-UP"];

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-line py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <TechLabel>Services</TechLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            From repetitive work to reliable workflows.
          </h2>
        </div>
        <div className="mt-14 divide-y divide-line border-y border-line">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-3 py-8 md:grid-cols-[88px_minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-10"
            >
              <p className="font-display text-2xl text-ink-mute">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="text-base leading-relaxed text-ink-soft">{service.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ManualVsAutomated() {
  return (
    <section className="border-t border-line bg-page-alt py-20 lg:py-28">
      <Container>
        <TechLabel>The shift</TechLabel>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          From Manual to Automated
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">Manual</p>
            <ul className="mt-6 space-y-4">
              {MANUAL.map((step, index) => (
                <li key={step}>
                  <p className="font-mono text-sm uppercase tracking-widest text-ink">{step}</p>
                  {index < MANUAL.length - 1 ? (
                    <p className="mt-3 font-mono text-xs text-ink-mute">↓</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-cyan/25 bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-cyan">Automated</p>
            <ul className="mt-6 space-y-4">
              {AUTOMATED.map((step, index) => (
                <li key={step}>
                  <p className="font-mono text-sm uppercase tracking-widest text-ink">{step}</p>
                  {index < AUTOMATED.length - 1 ? (
                    <p className="mt-3 font-mono text-xs text-cyan">↓</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 max-w-xl text-lg text-ink-soft">
          Less manual work. More time for the business.
        </p>
      </Container>
    </section>
  );
}

export function SwiftFixSection() {
  return (
    <section id="work" className="py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <TechLabel>Real client project</TechLabel>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              SwiftFix Building Maintenance Services
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              A professional business website and service-request system created for
              SwiftFix Building Maintenance Services in Biñan, Laguna.
            </p>
          </div>
          <a
            href={SITE.swiftfixUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-ink px-6 text-sm font-medium text-page hover:bg-ink/90"
          >
            View Live Website →
          </a>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <BrowserFrame
            src="/images/swiftfix-home.jpg"
            alt="Live SwiftFix Building Maintenance Services website"
            url={SITE.swiftfixUrl.replace("https://", "")}
          />
          <div className="space-y-8">
            <div className="overflow-hidden rounded-xl border border-line bg-ink p-8">
              <img
                src="/images/swiftfix-logo.jpg"
                alt="SwiftFix Building Maintenance Services logo"
                className="mx-auto h-auto w-full max-w-xs object-contain"
                width={480}
                height={400}
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">Built with</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {["Supabase", "Vercel", "GitHub", "Responsive website", "Service request system"].map(
                  (item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-elevated px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ink-soft"
                    >
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <article>
            <h3 className="font-display text-2xl font-semibold tracking-tight">The challenge</h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              SwiftFix needed a professional online presence where customers could learn
              about its building-maintenance services and submit service requests.
            </p>
          </article>
          <article>
            <h3 className="font-display text-2xl font-semibold tracking-tight">The solution</h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A responsive business website with structured service-request handling and
              backend data storage.
            </p>
          </article>
        </div>

        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">System flow</p>
          <div className="mt-5">
            <WorkflowRow steps={["CUSTOMER", "SWIFTFIX WEBSITE", "SERVICE REQUEST", "BACKEND", "SUPABASE", "BUSINESS DATA"]} />
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-mute">
            Implemented: public website, service pages, and a service-request form with
            backend storage. This case study does not add capabilities that are not on
            the live site.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function ExperienceSection() {
  const roles = [
    {
      title: "Customer Service Representative",
      org: "TaskUs",
      points: [
        "Customer support",
        "Process adherence",
        "Documentation",
        "Communication",
        "Problem solving",
        "Handling customer requests",
      ],
    },
    {
      title: "BPO / Customer Support",
      org: "IBEX",
      points: [
        "Non-voice chat and email support",
        "Zendesk",
        "Customer issue resolution",
        "Documentation",
        "Customer communication",
      ],
    },
    {
      title: "Data Entry",
      org: "Operations support",
      points: [
        "Data processing",
        "Accuracy",
        "Information organization",
        "Administrative workflows",
      ],
    },
  ];

  return (
    <section id="experience" className="border-t border-line bg-page-alt py-20 lg:py-28">
      <Container>
        <TechLabel>Background</TechLabel>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Professional Experience
        </h2>
        <p className="mt-5 max-w-2xl text-ink-soft">
          Operations work is where most broken processes show up. That experience informs
          how I map a workflow before automating it.
        </p>
        <div className="mt-14 space-y-0">
          {roles.map((role) => (
            <article key={role.title} className="grid gap-4 border-t border-line py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{role.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{role.org}</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-soft"
                  >
                    {point}
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

export function PracticeSection() {
  const items = [
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

  return (
    <section className="border-t border-line py-20 lg:py-28">
      <Container>
        <TechLabel>Other work</TechLabel>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Practice and concept projects
        </h2>
        <p className="mt-5 max-w-2xl text-ink-soft">
          These are not client projects. They are labeled so it stays clear what is live
          client work and what is practice.
        </p>
        <div className="mt-12 space-y-6">
          {items.map((item) => (
            <article key={item.title} className="rounded-xl border border-line bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan">{item.label}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 max-w-2xl text-ink-soft">{item.copy}</p>
              <div className="mt-5">
                <WorkflowRow steps={item.flow} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}


