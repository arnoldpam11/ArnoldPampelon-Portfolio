import { SITE } from "@/lib/site";
import { Container } from "@/components/chrome";

export function HeroSection() {
  return (
    <section id="home" className="border-b border-line">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)] lg:gap-20 lg:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
            AI Automation &amp; Workflow Specialist
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
            {SITE.name}
          </h1>
          <p className="mt-7 max-w-xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
            Practical automation for the work that slows your business down.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            {SITE.positioning}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#work"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-6 text-sm font-medium text-page transition-colors hover:bg-ink/90"
            >
              View selected work
            </a>
            <a
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-line-strong px-6 text-sm font-medium text-ink transition-colors hover:bg-page-alt"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 border-t border-line pt-6">
            <img
              src="/images/artech-logo.webp"
              alt=""
              className="size-9 rounded bg-ink object-contain p-1"
              width={36}
              height={36}
            />
            <div>
              <p className="text-sm font-medium text-ink">{SITE.brand}</p>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
                {SITE.tagline}
              </p>
            </div>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-md lg:justify-self-end">
          <img
            src="/images/arnold-pampelon.jpg"
            alt="Arnold Pampelon"
            className="aspect-[4/5] w-full object-cover object-[50%_12%]"
            width={800}
            height={1000}
          />
          <figcaption className="mt-3 text-sm text-ink-mute">
            {SITE.name} <span aria-hidden="true">·</span> {SITE.role}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
