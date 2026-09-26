import { cn } from "@/lib/utils";

export type FlowNode = {
  label: string;
  sub: string;
};

export function WorkflowStack({
  title,
  nodes,
  status = "WORKFLOW ACTIVE",
  live = true,
  className,
}: {
  title: string;
  nodes: FlowNode[];
  status?: string;
  live?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-surface/90 p-4 shadow-panel sm:p-5",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">{title}</p>
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ok">
          <span className={cn("size-1.5 rounded-full bg-ok", live && "status-pulse")} />
          {status}
        </p>
      </div>
      <ol className="space-y-0">
        {nodes.map((node, index) => (
          <li key={`${node.label}-${index}`}>
            <div className="rounded-md border border-line bg-elevated px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan">{node.label}</p>
              <p className="mt-1 text-sm text-ink">{node.sub}</p>
            </div>
            {index < nodes.length - 1 ? (
              <div className="flex h-7 justify-center" aria-hidden="true">
                <svg width="12" height="28" viewBox="0 0 12 28" fill="none" className="text-cyan">
                  <path
                    d="M6 0v22"
                    className="flow-line"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path d="M2 18l4 6 4-6" stroke="currentColor" strokeWidth="1.2" fill="none" />
                </svg>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function WorkflowRow({
  steps,
  className,
}: {
  steps: string[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2 text-sm", className)}>
      {steps.map((step, index) => (
        <span key={`${step}-${index}`} className="contents">
          <span className="rounded-md border border-line bg-elevated px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-ink">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span className="font-mono text-cyan" aria-hidden="true">
              →
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

export function BrowserFrame({
  src,
  alt,
  url,
}: {
  src: string;
  alt: string;
  url: string;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-elevated shadow-panel">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
        <span className="size-2.5 rounded-full bg-danger/80" />
        <span className="size-2.5 rounded-full bg-ink-mute/70" />
        <span className="size-2.5 rounded-full bg-ok/80" />
        <p className="ml-2 min-w-0 flex-1 truncate rounded-md border border-line bg-page px-3 py-1 font-mono text-xs text-ink-soft">
          {url}
        </p>
      </div>
      <img
        src={src}
        alt={alt}
        className="block h-auto w-full object-cover object-top"
        loading="lazy"
      />
    </figure>
  );
}
