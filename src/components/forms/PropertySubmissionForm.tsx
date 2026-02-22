import { useState } from "react";
import { Shield, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { submitProperty } from "@/lib/api/submit";
import PrivacyNotice from "./PrivacyNotice";

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

interface Props {
  variant?: "inline" | "full";
}

export default function PropertySubmissionForm({ variant = "inline" }: Props) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const mutation = useMutation({
    mutationFn: submitProperty,
    onSuccess: () => {
      setSubmitted(true);
      setSubmitError(false);
    },
    onError: () => {
      setSubmitError(true);
    },
  });

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
    if (validateStep(2)) {
      mutation.mutate({
        ...form,
        unitCount: parseInt(form.unitCount, 10) || 0,
      });
    }
  };

  const inputCls = (err?: string) =>
    `bg-charcoal border ${err ? "border-destructive/60" : "border-border/60 focus:border-gold/40"} text-cream font-sans text-sm px-5 py-4 focus:outline-none transition-all duration-300 placeholder:text-cream-muted/30 w-full`;

  const labelCls = "font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/70 block mb-2";

  const isFullPage = variant === "full";

  return (
    <div className={`bg-charcoal border border-border/40 shadow-elevated ${isFullPage ? "max-w-2xl mx-auto" : ""}`}>
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
        ) : submitError ? (
          <div className="py-14 text-center">
            <div className="w-16 h-16 border border-destructive/20 flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={24} className="text-destructive" />
            </div>
            <p className="font-display text-2xl text-cream mb-4 tracking-tight">Something Went Wrong</p>
            <p className="font-sans text-sm text-cream-muted font-light max-w-xs mx-auto leading-[1.7] mb-8">
              Your submission couldn't be processed. Please try again or contact us directly at 617-778-3521.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitError(false);
                mutation.mutate({
                  ...form,
                  unitCount: parseInt(form.unitCount, 10) || 0,
                });
              }}
              className="font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            >
              {mutation.isPending ? "Retrying..." : "Try Again"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {step === 0 && (
              <div className="flex flex-col gap-6">
                <h3 className="font-display text-xl font-semibold text-cream mb-2">Property Information</h3>
                <div>
                  <label htmlFor="assetType" className={labelCls}>Asset Type *</label>
                  <select
                    id="assetType"
                    value={form.assetType}
                    onChange={(e) => set("assetType", e.target.value)}
                    className={inputCls(errors.assetType) + " appearance-none"}
                    aria-required="true"
                    aria-describedby={errors.assetType ? "assetType-error" : undefined}
                  >
                    <option value="">Select asset type...</option>
                    {assetTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.assetType && <p id="assetType-error" className="text-destructive text-xs mt-1.5" aria-live="polite">{errors.assetType}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="unitCount" className={labelCls}>Unit Count *</label>
                    <input
                      id="unitCount"
                      type="number" min={1} placeholder="e.g. 24"
                      value={form.unitCount}
                      onChange={(e) => set("unitCount", e.target.value)}
                      className={inputCls(errors.unitCount)}
                      aria-required="true"
                      aria-describedby={errors.unitCount ? "unitCount-error" : undefined}
                    />
                    {errors.unitCount && <p id="unitCount-error" className="text-destructive text-xs mt-1.5" aria-live="polite">{errors.unitCount}</p>}
                  </div>
                  <div>
                    <label htmlFor="askingPrice" className={labelCls}>Asking Price (Optional)</label>
                    <input
                      id="askingPrice"
                      type="text" placeholder="e.g. $4.2M"
                      value={form.askingPrice}
                      onChange={(e) => set("askingPrice", e.target.value)}
                      className={inputCls()}
                    />
                  </div>
                </div>
                <button
                  type="button" onClick={next}
                  className="mt-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
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
                    <label htmlFor="market" className={labelCls}>City / Market *</label>
                    <input
                      id="market"
                      type="text" placeholder="e.g. Cambridge"
                      value={form.market}
                      onChange={(e) => set("market", e.target.value)}
                      className={inputCls(errors.market)}
                      aria-required="true"
                      aria-describedby={errors.market ? "market-error" : undefined}
                    />
                    {errors.market && <p id="market-error" className="text-destructive text-xs mt-1.5" aria-live="polite">{errors.market}</p>}
                  </div>
                  <div>
                    <label htmlFor="state" className={labelCls}>State *</label>
                    <input
                      id="state"
                      type="text" placeholder="e.g. MA"
                      value={form.state}
                      onChange={(e) => set("state", e.target.value)}
                      className={inputCls(errors.state)}
                      aria-required="true"
                      aria-describedby={errors.state ? "state-error" : undefined}
                    />
                    {errors.state && <p id="state-error" className="text-destructive text-xs mt-1.5" aria-live="polite">{errors.state}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="dealStructure" className={labelCls}>Preferred Deal Structure *</label>
                  <select
                    id="dealStructure"
                    value={form.dealStructure}
                    onChange={(e) => set("dealStructure", e.target.value)}
                    className={inputCls(errors.dealStructure) + " appearance-none"}
                    aria-required="true"
                    aria-describedby={errors.dealStructure ? "dealStructure-error" : undefined}
                  >
                    <option value="">Select structure...</option>
                    {dealStructures.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                  {errors.dealStructure && <p id="dealStructure-error" className="text-destructive text-xs mt-1.5" aria-live="polite">{errors.dealStructure}</p>}
                </div>
                <div className="flex gap-4 mt-3">
                  <button
                    type="button" onClick={() => setStep(0)}
                    className="font-sans text-xs tracking-[0.2em] uppercase px-8 py-5 border border-border/60 text-cream-muted hover:border-gold/20 hover:text-cream transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
                  >
                    Back
                  </button>
                  <button
                    type="button" onClick={next}
                    className="flex-1 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
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
                  <label htmlFor="ownerName" className={labelCls}>Owner / Representative Name *</label>
                  <input
                    id="ownerName"
                    type="text" placeholder="Full name"
                    value={form.ownerName}
                    onChange={(e) => set("ownerName", e.target.value)}
                    className={inputCls(errors.ownerName)}
                    aria-required="true"
                    aria-describedby={errors.ownerName ? "ownerName-error" : undefined}
                  />
                  {errors.ownerName && <p id="ownerName-error" className="text-destructive text-xs mt-1.5" aria-live="polite">{errors.ownerName}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className={labelCls}>Email Address *</label>
                    <input
                      id="email"
                      type="email" placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputCls(errors.email)}
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-destructive text-xs mt-1.5" aria-live="polite">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelCls}>Phone (Optional)</label>
                    <input
                      id="phone"
                      type="tel" placeholder="(617) 000-0000"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={inputCls()}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="additionalNotes" className={labelCls}>Additional Notes (Optional)</label>
                  <textarea
                    id="additionalNotes"
                    rows={3}
                    placeholder="Any context about the property, timeline, or special circumstances..."
                    value={form.additionalNotes}
                    onChange={(e) => set("additionalNotes", e.target.value)}
                    className={inputCls() + " resize-none"}
                  />
                </div>
                <PrivacyNotice />
                <div className="flex gap-4 mt-3">
                  <button
                    type="button" onClick={() => setStep(1)}
                    className="font-sans text-xs tracking-[0.2em] uppercase px-8 py-5 border border-border/60 text-cream-muted hover:border-gold/20 hover:text-cream transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="flex-1 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold flex items-center justify-center gap-2 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
                  >
                    <Shield size={13} />
                    {mutation.isPending ? "Submitting..." : "Submit Securely"}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
