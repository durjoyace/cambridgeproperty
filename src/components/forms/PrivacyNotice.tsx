import { Shield } from "lucide-react";

export default function PrivacyNotice() {
  return (
    <div className="flex gap-4 items-start bg-paper-warm border-l-2 border-brass p-6">
      <Shield size={15} className="text-brass mt-0.5 shrink-0" />
      <div>
        <p className="font-sans text-[11px] tracking-[0.18em] uppercase font-medium text-ink mb-2">
          Confidentiality
        </p>
        <p className="font-sans text-sm text-ink/65 font-light leading-relaxed">
          Property details are read only by Patrick Barrett and Timothy Johnson —
          never listed, never brokered, never forwarded.
        </p>
      </div>
    </div>
  );
}
