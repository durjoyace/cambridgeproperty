import { useState } from "react";
import { ArrowRight } from "lucide-react";

/**
 * Newsletter capture — designed to live on ink surfaces (footer + insights CTA).
 * Paper-tinted line input with brass submit affordance.
 */
export default function NewsletterCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 justify-center">
        <span className="h-1.5 w-1.5 rounded-full bg-brass-light" aria-hidden />
        <p className="font-serif italic text-paper/80 text-sm">
          You're subscribed. The next letter will reach you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label
        htmlFor="newsletter-email"
        className="font-sans text-[10px] tracking-[0.24em] uppercase text-paper/55"
      >
        The LP letter — to your inbox
      </label>
      <div className="flex gap-0">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@firm.com"
          required
          aria-label="Email address for the LP letter"
          className="flex-1 bg-transparent border-b border-paper/30 px-1 py-3 font-sans text-sm text-paper placeholder:text-paper/35 focus:border-brass-light focus:outline-none transition-colors duration-300"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-4 py-3 border-b border-paper/30 text-paper hover:text-brass-light hover:border-brass-light transition-colors duration-300 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
          aria-label="Subscribe to the LP letter"
        >
          <ArrowRight size={14} />
        </button>
      </div>
      {status === "error" && (
        <p className="font-sans text-xs text-destructive/80 font-light" role="alert">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
