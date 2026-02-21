import { Shield } from "lucide-react";

export default function PrivacyNotice() {
  return (
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
  );
}
