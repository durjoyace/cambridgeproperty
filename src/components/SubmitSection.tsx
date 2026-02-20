import { useState } from "react";
import { Shield, Send } from "lucide-react";

const assetTypes = [
  "Multifamily (Residential)",
  "Mixed-Use (Res + Retail)",
  "Other",
];

export default function SubmitSection() {
  const [form, setForm] = useState({
    assetType: "",
    unitCount: "",
    market: "",
    ownerName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation this would POST to a secure backend
    setSubmitted(true);
  };

  return (
    <section id="submit" className="py-28 bg-charcoal">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Copy */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">
                Discreet Lead Capture
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight mb-6">
              Sell Your Property
            </h2>
            <p className="font-sans text-sm leading-relaxed text-cream-muted font-light mb-8 max-w-sm">
              Submit your property details securely. All submissions bypass public markets and are routed directly to our acquisitions principals for immediate, confidential review.
            </p>

            <div className="flex gap-3 items-start bg-charcoal-mid border border-gold/20 p-5">
              <Shield size={16} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-sans text-xs font-medium text-cream tracking-wide mb-1">
                  Data Security Notice
                </p>
                <p className="font-sans text-xs text-cream-muted font-light leading-relaxed">
                  Information submitted here is encrypted and directly integrated into our secure CRM infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-charcoal-mid border border-border p-8 shadow-card">
            <h3 className="font-display text-xl font-semibold text-cream mb-6">
              Property Submission
            </h3>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <Send size={18} className="text-gold" />
                </div>
                <p className="font-display text-lg text-cream mb-2">
                  Submission Received
                </p>
                <p className="font-sans text-sm text-cream-muted font-light">
                  Our principals will review your property details and be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Asset Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted">
                    Asset Type
                  </label>
                  <select
                    value={form.assetType}
                    onChange={(e) => setForm({ ...form, assetType: e.target.value })}
                    required
                    className="bg-charcoal border border-border text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                  >
                    <option value="" disabled>Select asset type…</option>
                    {assetTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Unit Count + Market */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted">
                      Unit Count
                    </label>
                    <input
                      type="number"
                      min={1}
                      placeholder="e.g. 24"
                      value={form.unitCount}
                      onChange={(e) => setForm({ ...form, unitCount: e.target.value })}
                      required
                      className="bg-charcoal border border-border text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream-muted/40"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted">
                      City / Market
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nashville, TN"
                      value={form.market}
                      onChange={(e) => setForm({ ...form, market: e.target.value })}
                      required
                      className="bg-charcoal border border-border text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream-muted/40"
                    />
                  </div>
                </div>

                {/* Owner Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted">
                    Owner Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={form.ownerName}
                    onChange={(e) => setForm({ ...form, ownerName: e.target.value })}
                    required
                    className="bg-charcoal border border-border text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream-muted/40"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="bg-charcoal border border-border text-cream font-sans text-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream-muted/40"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 bg-gold text-charcoal font-medium hover:bg-gold-light transition-colors duration-200 shadow-gold flex items-center justify-center gap-2"
                >
                  <Shield size={13} />
                  Submit Securely
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
