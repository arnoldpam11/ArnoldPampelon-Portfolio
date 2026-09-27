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

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-line py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <TechLabel>What I Do</TechLabel>
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
              <p className="font-display text-2xl text-ink-mute">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-ink-soft">{service.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SwiftFixSection() {
  return (
    <section id="work" className="border-t border-line py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <TechLabel>Featured client project</TechLabel>
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
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-ink px-6 text-sm font-medium text-page transition-colors hover:bg-ink/90"
          >
            View Live Website →
          </a>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
          <BrowserFrame
            src="/images/swiftfix-home.jpg"
            alt="Live SwiftFix Building Maintenance Services website"
            url={SITE.swiftfixUrl.replace("https://", "")}
          />

          <div className="space-y-6">
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">
                Project Snapshot
              </p>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
                    Client
                  </dt>
                  <dd className="mt-1.5 text-base font-medium text-ink">
                    SwiftFix Building Maintenance Services
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
                    Scope
                  </dt>
                  <dd className="mt-1.5 text-base leading-relaxed text-ink-soft">
                    Business website · service requests · backend storage
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
                    Stack
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {["Supabase", "Vercel", "GitHub", "Responsive UI"].map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-line bg-elevated px-2.5 py-1 font-mono text-xs uppercase tracking-widest text-ink-soft"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
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
            <WorkflowRow
              steps={[
                "CUSTOMER",
                "SWIFTFIX WEBSITE",
                "SERVICE REQUEST",
                "BACKEND",
                "SUPABASE",
                "BUSINESS DATA",
              ]}
            />
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
            <article
              key={role.title}
              className="grid gap-4 border-t border-line py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
            >
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {role.title}
                </h3>
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
