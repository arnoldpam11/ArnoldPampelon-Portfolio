import { useMemo, useState } from "react";
import { BUDGETS, SERVICES } from "@/lib/site";
import { leadInquirySchema } from "@/lib/leads";
import { submitInquiry } from "@/lib/lead-actions";
import { TechLabel, Field, Input, Textarea, Select, Button } from "@/components/ui";
import { Container } from "@/components/chrome";

const EMPTY = {
  name: "",
  email: "",
  company: "",
  service: "",
  current_process: "",
  desired_result: "",
  budget: "",
  message: "",
  website: "",
};

export function ContactSection() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const disabled = status === "loading";

  const set = (key: keyof typeof EMPTY, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({});
    setMessage("");
    const parsed = leadInquirySchema.safeParse({
      ...values,
      service: values.service || undefined,
      budget: values.budget || undefined,
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      return;
    }
    setStatus("loading");
    try {
      const result = await submitInquiry({ data: parsed.data });
      if (!result.ok) {
        setStatus("error");
        setMessage(result.error);
        return;
      }
      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
      setMessage("Something went wrong sending the inquiry. Please try again.");
    }
  };

  const errorSummary = useMemo(() => Object.values(errors)[0], [errors]);

  return (
    <section id="contact" className="border-t border-line bg-page-alt py-20 lg:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <TechLabel>Have a repetitive process?</TechLabel>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Let's automate it.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Tell me what you're currently doing manually and what you'd like to happen
            automatically.
          </p>
          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-ink-mute">
            Trigger → AI → Data → Action → Result
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-xl border border-ok/30 bg-surface p-8" role="status">
            <p className="font-mono text-xs uppercase tracking-widest text-ok">Inquiry received</p>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Thanks for reaching out. Your automation inquiry has been received. I'll review
              the details and get back to you.
            </p>
            <Button className="mt-8" variant="secondary" onClick={() => setStatus("idle")}>
              Send another inquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5 rounded-xl border border-line bg-surface p-5 sm:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" error={errors.name}>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  disabled={disabled}
                  onChange={(event) => set("name", event.target.value)}
                />
              </Field>
              <Field label="Email" htmlFor="email" error={errors.email}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  disabled={disabled}
                  onChange={(event) => set("email", event.target.value)}
                />
              </Field>
            </div>
            <Field label="Business / Company" htmlFor="company" error={errors.company}>
              <Input
                id="company"
                name="company"
                autoComplete="organization"
                value={values.company}
                disabled={disabled}
                onChange={(event) => set("company", event.target.value)}
              />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Service" htmlFor="service" error={errors.service}>
                <Select
                  id="service"
                  name="service"
                  value={values.service}
                  disabled={disabled}
                  onChange={(event) => set("service", event.target.value)}
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Budget" htmlFor="budget" error={errors.budget}>
                <Select
                  id="budget"
                  name="budget"
                  value={values.budget}
                  disabled={disabled}
                  onChange={(event) => set("budget", event.target.value)}
                >
                  <option value="">Select a range</option>
                  {BUDGETS.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>
            <Field label="Current process" htmlFor="current_process" error={errors.current_process}>
              <Textarea
                id="current_process"
                name="current_process"
                value={values.current_process}
                disabled={disabled}
                onChange={(event) => set("current_process", event.target.value)}
                placeholder="What happens manually today?"
              />
            </Field>
            <Field label="Desired result" htmlFor="desired_result" error={errors.desired_result}>
              <Textarea
                id="desired_result"
                name="desired_result"
                value={values.desired_result}
                disabled={disabled}
                onChange={(event) => set("desired_result", event.target.value)}
                placeholder="What should happen automatically?"
              />
            </Field>
            <Field label="Message" htmlFor="message" error={errors.message}>
              <Textarea
                id="message"
                name="message"
                value={values.message}
                disabled={disabled}
                onChange={(event) => set("message", event.target.value)}
                placeholder="Anything else I should know?"
              />
            </Field>
            <div className="hidden" aria-hidden="true">
              <input
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={(event) => set("website", event.target.value)}
              />
            </div>
            {status === "error" ? (
              <p className="text-sm text-danger" role="alert">
                {message || errorSummary}
              </p>
            ) : null}
            <Button type="submit" variant="primary" className="w-full min-h-12 sm:w-auto" disabled={disabled}>
              {disabled ? "Sending…" : "Send Automation Inquiry →"}
            </Button>
          </form>
        )}
      </Container>
    </section>
  );
}
