import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SignedIn } from "@/lib/auth/gates";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent transition-colors duration-200",
        (scrolled || open) && "border-line bg-page/80 backdrop-blur-md",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="/#home" className="min-w-0 font-display text-sm font-semibold tracking-tight text-ink sm:text-base">
          {SITE.name}
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <SignedIn>
            <Link to="/admin" className="text-sm text-ink-soft hover:text-ink">
              Dashboard
            </Link>
          </SignedIn>
          <a
            href="/#contact"
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-ink px-4 text-sm font-medium text-page transition-colors hover:bg-ink/90"
          >
            Let's Talk
          </a>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-line text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span className={cn("h-px w-full bg-ink transition-transform", open && "translate-y-[5px] rotate-45")} />
            <span className={cn("h-px w-full bg-ink transition-opacity", open && "opacity-0")} />
            <span className={cn("h-px w-full bg-ink transition-transform", open && "-translate-y-[5px] -rotate-45")} />
          </span>
        </button>
      </Container>
      {open ? (
        <div className="border-t border-line bg-page lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <SignedIn>
              <Link to="/admin" className="rounded-md px-2 py-3 text-base text-ink" onClick={() => setOpen(false)}>
                Dashboard
              </Link>
            </SignedIn>
            <a
              href="/#contact"
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-medium text-page"
              onClick={() => setOpen(false)}
            >
              Let's Talk
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-page-alt">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">{SITE.name}</p>
          <p className="mt-2 text-sm text-ink-soft">{SITE.role}</p>
          <div className="mt-8 flex items-center gap-3">
            <img
              src="/images/artech-logo.webp"
              alt="ARTECH mark"
              className="size-10 rounded-md bg-ink object-contain p-1"
              width={40}
              height={40}
            />
            <div>
              <p className="text-sm font-medium">{SITE.brand}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">{SITE.tagline}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">Navigate</p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink-soft hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/lab" className="text-sm text-ink-soft hover:text-ink">
                Lab
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-mute">Work with Arnold</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Practical automation for businesses that want fewer repetitive steps and clearer workflows.
          </p>
          <a href="/#contact" className="mt-5 inline-flex text-sm text-cyan hover:text-ink">
            Let's automate it →
          </a>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-6 text-sm text-ink-mute sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Arnold Pampelon</p>
        <p className="font-mono text-xs uppercase tracking-widest">{SITE.brand}</p>
      </Container>
    </footer>
  );
}
