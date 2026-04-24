import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { trackEvent } from "@/components/Analytics";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const empty: FormData = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (k: keyof FormData, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const errs: Partial<FormData> = {};
    if (!form.name) errs.name = "Required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.subject) errs.subject = "Required";
    if (!form.message) errs.message = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      trackEvent("generate_lead", { event_category: "form", event_label: "contact_form" });
    } catch {
      setStatus("error");
    }
  };

  const inputCls = (err?: string) =>
    `bg-paper border-b ${
      err ? "border-destructive/60" : "border-ink/25 focus:border-brass"
    } text-ink font-sans text-base px-0 py-3 focus:outline-none transition-colors duration-300 placeholder:text-ink/35 w-full`;

  const labelCls =
    "font-sans text-[10px] tracking-[0.24em] uppercase text-ink/55 block mb-2";

  if (status === "success") {
    return (
      <div className="bg-paper border border-ink/10 p-10">
        <div className="py-10 text-center">
          <CheckCircle size={28} className="text-brass mx-auto mb-6" />
          <p className="font-serif text-2xl text-ink mb-4 tracking-tight">Message sent.</p>
          <p className="font-sans text-sm text-ink/65 font-light max-w-xs mx-auto leading-[1.75]">
            Thank you for writing. You will hear back from a partner within 48
            business hours.
          </p>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="bg-paper border border-ink/10 p-10">
        <div className="py-10 text-center">
          <AlertCircle size={24} className="text-destructive mx-auto mb-6" />
          <p className="font-serif text-2xl text-ink mb-4 tracking-tight">Something went wrong.</p>
          <p className="font-sans text-sm text-ink/65 font-light max-w-xs mx-auto leading-[1.75] mb-8">
            Please try again, or email us directly at{" "}
            <a href="mailto:contact@thaneandreeve.com" className="text-brass">
              contact@thaneandreeve.com
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 bg-ink text-paper hover:bg-brass transition-colors duration-300"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-paper border border-ink/10">
      <div className="p-8 md:p-10">
        <h3 className="font-serif text-2xl text-ink mb-8 tracking-tight">
          Write a note.
        </h3>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-name" className={labelCls}>Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className={inputCls(errors.name)}
                aria-required="true"
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-destructive text-xs mt-2" aria-live="polite">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="contact-email" className={labelCls}>Email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className={inputCls(errors.email)}
                aria-required="true"
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-destructive text-xs mt-2" aria-live="polite">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="contact-subject" className={labelCls}>Subject</label>
            <input
              id="contact-subject"
              type="text"
              placeholder="What is this regarding?"
              value={form.subject}
              onChange={(e) => set("subject", e.target.value)}
              className={inputCls(errors.subject)}
              aria-required="true"
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            {errors.subject && (
              <p id="subject-error" className="text-destructive text-xs mt-2" aria-live="polite">
                {errors.subject}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contact-message" className={labelCls}>Message</label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell us what's on your mind."
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              className={inputCls(errors.message) + " resize-none"}
              aria-required="true"
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-destructive text-xs mt-2" aria-live="polite">
                {errors.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 bg-ink text-paper hover:bg-brass transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none self-start"
          >
            <Send size={13} />
            {status === "loading" ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
