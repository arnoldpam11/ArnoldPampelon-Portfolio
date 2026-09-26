import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="grid min-h-dvh place-items-center bg-page px-6 text-ink">
      <div className="w-full max-w-sm">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">Private access</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">Lead dashboard</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Sign in to manage automation inquiries for {SITE.name}.
        </p>
        <div className="mt-8 space-y-3">
          {authEnabled ? (
            GROK_PROVIDERS.map((provider) => (
              <button
                key={provider.providerId}
                type="button"
                onClick={() => signIn(provider.providerId, { callbackURL: "/admin" })}
                className="w-full min-h-11 rounded-md border border-line-strong px-4 text-sm font-medium text-ink hover:bg-elevated"
              >
                Continue with {provider.label}
              </button>
            ))
          ) : (
            <p className="text-sm text-ink-mute">Sign-in is disabled.</p>
          )}
        </div>
        <Link to="/" className="mt-8 inline-flex text-sm text-ink-soft hover:text-ink">
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
