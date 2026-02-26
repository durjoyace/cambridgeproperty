import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <p className="font-sans text-xs text-gold/80 font-light">
          You're subscribed. We'll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label htmlFor="newsletter-email" className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/40">
        Market Insights — Direct to Your Inbox
      </label>
      <div className="flex gap-0">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          required
          aria-label="Email address for newsletter"
          className="flex-1 bg-charcoal-mid border border-border/40 border-r-0 px-4 py-3 font-sans text-xs text-cream placeholder:text-cream-muted/30 focus:border-gold/40 focus:outline-none transition-colors duration-300"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-4 py-3 bg-gold/10 border border-gold/30 text-gold hover:bg-gold/20 transition-all duration-300 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
          aria-label="Subscribe to newsletter"
        >
          <ArrowRight size={14} />
        </button>
      </div>
      {status === "error" && (
        <p className="font-sans text-xs text-red-400/80 font-light" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
