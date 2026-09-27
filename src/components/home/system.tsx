import { TechLabel } from "@/components/ui";
import { Container } from "@/components/chrome";
import { WorkflowStack } from "@/components/workflow";

const ARCH = [
  { label: "WEBSITE", sub: "Portfolio interface" },
  { label: "FORM", sub: "Automation inquiry" },
  { label: "SERVER FUNCTION", sub: "Validate & store" },
  { label: "POSTGRESQL", sub: "Leads table" },
  { label: "ADMIN DASHBOARD", sub: "Private lead management" },
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
          <TechLabel>System proof</TechLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            The portfolio is a system too.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            This portfolio doesn&apos;t just show my work. It demonstrates how I build
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

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-line bg-page-alt py-20 lg:py-28">
      <Container>
        <TechLabel>How I Build</TechLabel>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          From problem to working workflow
        </h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-5">
          {PROCESS.map((item, index) => (
            <li key={item.num} className="relative border-t border-line pt-5">
              {index < PROCESS.length - 1 ? (
                <span className="absolute top-0 right-[-1.25rem] hidden h-px w-8 bg-cyan/40 md:block" />
              ) : null}
              <p className="font-display text-3xl font-semibold text-ink-mute">{item.num}</p>
              <h3 className="mt-4 font-mono text-xs uppercase tracking-widest text-cyan">
                {item.title}
              </h3>
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
            Let&apos;s turn the manual process into a reliable workflow.
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-cyan px-6 text-sm font-medium text-page transition-colors hover:bg-cyan/90"
          >
            Let&apos;s Work Together →
          </a>
        </div>
      </Container>
    </section>
  );
}
