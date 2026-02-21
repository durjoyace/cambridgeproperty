import { useState } from "react";
import { Shield, ArrowRight, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STEPS = [
  { label: "Property Info", description: "Asset type and size" },
  { label: "Market Details", description: "Location and structure" },
  { label: "Contact", description: "Your information" },
];

const assetTypes = [
  "Multifamily (Residential)",
  "Mixed-Use (Res + Retail)",
  "Other",
];

const dealStructures = [
  "Fee-Simple Acquisition",
  "Joint Venture Partnership",
  "Open to Discussion",
];

interface FormData {
  assetType: string;
  unitCount: string;
  askingPrice: string;
  market: string;
  state: string;
  dealStructure: string;
  ownerName: string;
  email: string;
  phone: string;
  additionalNotes: string;
}

const empty: FormData = {
  assetType: "",
  unitCount: "",
  askingPrice: "",
  market: "",
  state: "",
  dealStructure: "",
  ownerName: "",
  email: "",
  phone: "",
  additionalNotes: "",
};

export default function SubmitSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const sectionRef = useScrollReveal<HTMLElement>();

  const set = (k: keyof FormData, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validateStep = (s: number) => {
    const errs: Partial<FormData> = {};
    if (s === 0) {
      if (!form.assetType) errs.assetType = "Required";
      if (!form.unitCount) errs.unitCount = "Required";
    }
    if (s === 1) {
      if (!form.market) errs.market = "Required";
      if (!form.state) errs.state = "Required";
      if (!form.dealStructure) errs.dealStructure = "Required";
    }
    if (s === 2) {
      if (!form.ownerName) errs.ownerName = "Required";
      if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep((s) => s + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(2)) setSubmitted(true);
  };

  const inputCls = (err?: string) =>
    `bg-charcoal border ${err ? "border-destructive/60" : "border-border/60 focus:border-gold/40"} text-cream font-sans text-sm px-5 py-4 focus:outline-none transition-all duration-300 placeholder:text-cream-muted/30 w-full`;

  const labelCls = "font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/70 block mb-2";

  return (
    <section id="submit" className="relative section-pad bg-charcoal-mid overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Copy */}
          <div data-reveal className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Work With Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight mb-8">
              Partner
              <br />
              <span className="text-gold">With Us</span>
            </h2>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light mb-10 max-w-md">
              Are you an owner considering a sale or joint venture? We are direct buyers — no brokers, no committees. Patrick and Tim review every submission personally.
            </p>

            {/* Trust signals */}
            <div className="flex flex-col gap-4 mb-10">
              {[
                "Direct conversation with Patrick or Tim",
                "All submissions are confidential and encrypted",
                "No obligation — explore your options",
                "Response within 48 business hours",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={13} className="text-gold/60 shrink-0" />
                  <span className="font-sans text-sm text-cream-muted/80 font-light">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 items-start bg-charcoal border border-gold/10 p-6">
              <Shield size={15} className="text-gold/60 mt-0.5 shrink-0" />
              <div>
                <p className="font-sans text-xs font-medium text-cream tracking-wide mb-1.5">
                  Confidentiality Guarantee
                </p>
                <p className="font-sans text-xs text-cream-muted/60 font-light leading-relaxed">
                  Your property details are shared only with Patrick W. Barrett III and Tim Johnson, CPM — never listed, never brokered, never disclosed.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Multi-step form */}
          <div data-reveal className="bg-charcoal border border-border/40 shadow-elevated">
            {/* Step indicators */}
            <div className="flex border-b border-border/40">
              {STEPS.map((s, i) => (
                <div
                  key={i}
                  className={`flex-1 px-4 py-5 text-center border-r last:border-r-0 border-border/40 transition-all duration-300 ${
                    i === step && !submitted
                      ? "bg-charcoal-mid border-b-2 border-b-gold"
                      : i < step || submitted
                      ? "bg-charcoal-mid/50"
                      : ""
                  }`}
                >
                  <div className={`font-sans text-[9px] tracking-[0.25em] uppercase mb-1 transition-colors duration-300 ${i <= step || submitted ? "text-gold" : "text-cream-muted/25"}`}>
                    Step {i + 1}
                  </div>
                  <div className={`font-sans text-xs transition-colors duration-300 ${i <= step || submitted ? "text-cream" : "text-cream-muted/25"}`}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 md:p-10">
              {submitted ? (
                <div className="py-14 text-center">
                  <div className="w-16 h-16 border border-gold/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={24} className="text-gold" />
                  </div>
                  <p className="font-display text-2xl text-cream mb-4 tracking-tight">Submission Received</p>
                  <p className="font-sans text-sm text-cream-muted font-light max-w-xs mx-auto leading-[1.7]">
                    Our principals will review your property and be in touch within 48 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {step === 0 && (
                    <div className="flex flex-col gap-6">
                      <h3 className="font-display text-xl font-semibold text-cream mb-2">Property Information</h3>
                      <div>
                        <label className={labelCls}>Asset Type *</label>
                        <select
                          value={form.assetType}
                          onChange={(e) => set("assetType", e.target.value)}
                          className={inputCls(errors.assetType) + " appearance-none"}
                        >
                          <option value="">Select asset type…</option>
                          {assetTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                        {errors.assetType && <p className="text-destructive text-xs mt-1.5">{errors.assetType}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Unit Count *</label>
                          <input
                            type="number" min={1} placeholder="e.g. 24"
                            value={form.unitCount}
                            onChange={(e) => set("unitCount", e.target.value)}
                            className={inputCls(errors.unitCount)}
                          />
                          {errors.unitCount && <p className="text-destructive text-xs mt-1.5">{errors.unitCount}</p>}
                        </div>
                        <div>
                          <label className={labelCls}>Asking Price (Optional)</label>
                          <input
                            type="text" placeholder="e.g. $4.2M"
                            value={form.askingPrice}
                            onChange={(e) => set("askingPrice", e.target.value)}
                            className={inputCls()}
                          />
                        </div>
                      </div>
                      <button
                        type="button" onClick={next}
                        className="mt-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold flex items-center justify-center gap-2"
                      >
                        Continue <ArrowRight size={13} />
                      </button>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="flex flex-col gap-6">
                      <h3 className="font-display text-xl font-semibold text-cream mb-2">Market Details</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>City / Market *</label>
                          <input
                            type="text" placeholder="e.g. Cambridge"
                            value={form.market}
                            onChange={(e) => set("market", e.target.value)}
                            className={inputCls(errors.market)}
                          />
                          {errors.market && <p className="text-destructive text-xs mt-1.5">{errors.market}</p>}
                        </div>
                        <div>
                          <label className={labelCls}>State *</label>
                          <input
                            type="text" placeholder="e.g. MA"
                            value={form.state}
                            onChange={(e) => set("state", e.target.value)}
                            className={inputCls(errors.state)}
                          />
                          {errors.state && <p className="text-destructive text-xs mt-1.5">{errors.state}</p>}
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Preferred Deal Structure *</label>
                        <select
                          value={form.dealStructure}
                          onChange={(e) => set("dealStructure", e.target.value)}
                          className={inputCls(errors.dealStructure) + " appearance-none"}
                        >
                          <option value="">Select structure…</option>
                          {dealStructures.map((d) => <option key={d} value={d}>{d}</option>)}
                        </select>
                        {errors.dealStructure && <p className="text-destructive text-xs mt-1.5">{errors.dealStructure}</p>}
                      </div>
                      <div className="flex gap-4 mt-3">
                        <button
                          type="button" onClick={() => setStep(0)}
                          className="font-sans text-xs tracking-[0.2em] uppercase px-8 py-5 border border-border/60 text-cream-muted hover:border-gold/20 hover:text-cream transition-all duration-300"
                        >
                          Back
                        </button>
                        <button
                          type="button" onClick={next}
                          className="flex-1 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold flex items-center justify-center gap-2"
                        >
                          Continue <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="flex flex-col gap-6">
                      <h3 className="font-display text-xl font-semibold text-cream mb-2">Contact Information</h3>
                      <div>
                        <label className={labelCls}>Owner / Representative Name *</label>
                        <input
                          type="text" placeholder="Full name"
                          value={form.ownerName}
                          onChange={(e) => set("ownerName", e.target.value)}
                          className={inputCls(errors.ownerName)}
                        />
                        {errors.ownerName && <p className="text-destructive text-xs mt-1.5">{errors.ownerName}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Email Address *</label>
                          <input
                            type="email" placeholder="you@company.com"
                            value={form.email}
                            onChange={(e) => set("email", e.target.value)}
                            className={inputCls(errors.email)}
                          />
                          {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email}</p>}
                        </div>
                        <div>
                          <label className={labelCls}>Phone (Optional)</label>
                          <input
                            type="tel" placeholder="(617) 000-0000"
                            value={form.phone}
                            onChange={(e) => set("phone", e.target.value)}
                            className={inputCls()}
                          />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Additional Notes (Optional)</label>
                        <textarea
                          rows={3}
                          placeholder="Any context about the property, timeline, or special circumstances…"
                          value={form.additionalNotes}
                          onChange={(e) => set("additionalNotes", e.target.value)}
                          className={inputCls() + " resize-none"}
                        />
                      </div>
                      <div className="flex gap-4 mt-3">
                        <button
                          type="button" onClick={() => setStep(1)}
                          className="font-sans text-xs tracking-[0.2em] uppercase px-8 py-5 border border-border/60 text-cream-muted hover:border-gold/20 hover:text-cream transition-all duration-300"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold flex items-center justify-center gap-2"
                        >
                          <Shield size={13} />
                          Submit Securely
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
