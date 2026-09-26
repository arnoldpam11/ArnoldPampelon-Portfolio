import type { ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function TechLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "font-mono text-xs font-medium uppercase tracking-widest text-cyan",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "accent";
}) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-ink text-page hover:bg-ink/90",
        variant === "accent" && "bg-cyan text-page hover:bg-cyan/90",
        variant === "secondary" && "border border-line-strong bg-transparent text-ink hover:border-ink/30 hover:bg-elevated",
        variant === "ghost" && "text-ink-soft hover:text-ink",
        variant === "danger" && "border border-danger/40 bg-danger/10 text-danger hover:bg-danger/20",
        className,
      )}
      {...props}
    />
  );
}

export function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2" htmlFor={htmlFor}>
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
      {error ? <span className="block text-sm text-danger">{error}</span> : null}
    </label>
  );
}

const fieldClass =
  "min-h-11 w-full rounded-md border border-line bg-page-alt px-3.5 text-sm text-ink placeholder:text-ink-mute transition-colors duration-150 hover:border-line-strong focus-visible:border-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/30";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClass, className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldClass, "min-h-28 resize-y py-3", className)} {...props} />;
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(fieldClass, "appearance-none bg-[length:12px] pr-10", className)}
      {...props}
    />
  );
}

export function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "new"
      ? "border-cyan/30 bg-cyan-dim text-cyan"
      : status === "won"
        ? "border-ok/30 bg-ok/10 text-ok"
        : status === "lost" || status === "archived"
          ? "border-line bg-elevated text-ink-mute"
          : "border-line-strong bg-elevated text-ink-soft";
  return (
    <span className={cn("inline-flex rounded-full border px-2.5 py-1 font-mono text-xs uppercase tracking-widest", tone)}>
      {status}
    </span>
  );
}
