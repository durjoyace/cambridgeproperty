import { useState } from "react";
import { Shield, ArrowRight, CheckCircle } from "lucide-react";

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
    `bg-charcoal border ${err ? "border-error/60" : "border-border focus:border-gold/50"} text-cream font-sans text-sm px-4 py-3 focus:outline-none transition-colors placeholder:text-cream-muted/40 w-full`;

  const labelCls = "font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted block mb-1.5";

  return (
    <section id="submit" className="py-28 bg-charcoal">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Copy */}
          <div className="lg:sticky lg:top-28">
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
              Submit your property details securely. All submissions bypass public markets and are routed directly to our acquisitions principals for immediate, confidential review within 48 hours.
            </p>

            {/* Trust signals */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                "All submissions are encrypted in transit",
                "No public market exposure — ever",
                "Direct review by acquisition principals",
                "Response within 48 business hours",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={13} className="text-gold shrink-0" />
                  <span className="font-sans text-sm text-cream-muted font-light">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 items-start bg-charcoal-mid border border-gold/20 p-5">
              <Shield size={15} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-sans text-xs font-medium text-cream tracking-wide mb-1">
                  Data Security Notice
                </p>
                <p className="font-sans text-xs text-cream-muted font-light leading-relaxed">
                  Information submitted here is encrypted and directly integrated into our secure CRM infrastructure. CCPA-aligned data handling.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Multi-step form */}
          <div className="bg-charcoal-mid border border-border shadow-card">
            {/* Step indicators */}
            <div className="flex border-b border-border">
              {STEPS.map((s, i) => (
                <div
                  key={i}
                  className={`flex-1 px-4 py-4 text-center border-r last:border-r-0 border-border transition-colors ${
                    i === step && !submitted
                      ? "border-b-2 border-b-gold bg-charcoal"
                      : i < step || submitted
                      ? "bg-charcoal/50"
                      : ""
                  }`}
                >
                  <div className={`font-sans text-[9px] tracking-[0.2em] uppercase mb-0.5 ${i <= step || submitted ? "text-gold" : "text-cream-muted/40"}`}>
                    Step {i + 1}
                  </div>
                  <div className={`font-sans text-xs ${i <= step || submitted ? "text-cream" : "text-cream-muted/40"}`}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={24} className="text-gold" />
                  </div>
                  <p className="font-display text-xl text-cream mb-3">Submission Received</p>
                  <p className="font-sans text-sm text-cream-muted font-light max-w-xs mx-auto leading-relaxed">
                    Our principals will review your property and be in touch within 48 business hours. All information is kept strictly confidential.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Step 0 */}
                  {step === 0 && (
                    <div className="flex flex-col gap-5">
                      <h3 className="font-display text-lg font-semibold text-cream mb-1">Property Information</h3>
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
                        {errors.assetType && <p className="text-destructive text-xs mt-1">{errors.assetType}</p>}
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
                          {errors.unitCount && <p className="text-destructive text-xs mt-1">{errors.unitCount}</p>}
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
                        className="mt-2 font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 bg-gold text-charcoal font-medium hover:bg-gold-light transition-colors duration-200 shadow-gold flex items-center justify-center gap-2"
                      >
                        Continue <ArrowRight size={13} />
                      </button>
                    </div>
                  )}

                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="flex flex-col gap-5">
                      <h3 className="font-display text-lg font-semibold text-cream mb-1">Market Details</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>City / Market *</label>
                          <input
                            type="text" placeholder="e.g. Nashville"
                            value={form.market}
                            onChange={(e) => set("market", e.target.value)}
                            className={inputCls(errors.market)}
                          />
                          {errors.market && <p className="text-destructive text-xs mt-1">{errors.market}</p>}
                        </div>
                        <div>
                          <label className={labelCls}>State *</label>
                          <input
                            type="text" placeholder="e.g. TN"
                            value={form.state}
                            onChange={(e) => set("state", e.target.value)}
                            className={inputCls(errors.state)}
                          />
                          {errors.state && <p className="text-destructive text-xs mt-1">{errors.state}</p>}
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
                        {errors.dealStructure && <p className="text-destructive text-xs mt-1">{errors.dealStructure}</p>}
                      </div>
                      <div className="flex gap-3 mt-2">
                        <button
                          type="button" onClick={() => setStep(0)}
                          className="font-sans text-xs tracking-[0.2em] uppercase px-6 py-4 border border-border text-cream-muted hover:border-gold/30 hover:text-cream transition-colors duration-200"
                        >
                          Back
                        </button>
                        <button
                          type="button" onClick={next}
                          className="flex-1 font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 bg-gold text-charcoal font-medium hover:bg-gold-light transition-colors duration-200 shadow-gold flex items-center justify-center gap-2"
                        >
                          Continue <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="flex flex-col gap-5">
                      <h3 className="font-display text-lg font-semibold text-cream mb-1">Contact Information</h3>
                      <div>
                        <label className={labelCls}>Owner / Representative Name *</label>
                        <input
                          type="text" placeholder="Full name"
                          value={form.ownerName}
                          onChange={(e) => set("ownerName", e.target.value)}
                          className={inputCls(errors.ownerName)}
                        />
                        {errors.ownerName && <p className="text-destructive text-xs mt-1">{errors.ownerName}</p>}
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
                          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
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
                      <div className="flex gap-3 mt-2">
                        <button
                          type="button" onClick={() => setStep(1)}
                          className="font-sans text-xs tracking-[0.2em] uppercase px-6 py-4 border border-border text-cream-muted hover:border-gold/30 hover:text-cream transition-colors duration-200"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 bg-gold text-charcoal font-medium hover:bg-gold-light transition-colors duration-200 shadow-gold flex items-center justify-center gap-2"
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
