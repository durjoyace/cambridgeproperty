import { CheckCircle, Shield, Mail, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PropertySubmissionForm from "@/components/forms/PropertySubmissionForm";

export default function SubmitSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="submit" className="relative section-pad bg-charcoal-mid overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Copy */}
          <div data-reveal className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Direct Acquisition</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight mb-8">
              Submit a
              <br />
              <span className="text-gold">Property</span>
            </h2>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light mb-10 max-w-md">
              We are direct principals — not brokers, not a fund. Patrick and Tim review every submission personally. 24-hour response time for qualified opportunities.
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

            {/* Direct contact */}
            <div className="flex flex-col gap-3 mb-10">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">Or reach us directly</p>
              <a href="mailto:acquisitions@barrettjohnson.com" className="flex items-center gap-3 group">
                <Mail size={14} className="text-gold/50 group-hover:text-gold transition-colors" />
                <span className="font-sans text-sm text-cream-muted/80 font-light group-hover:text-cream transition-colors">acquisitions@barrettjohnson.com</span>
              </a>
              <a href="tel:6177783521" className="flex items-center gap-3 group">
                <Phone size={14} className="text-gold/50 group-hover:text-gold transition-colors" />
                <span className="font-sans text-sm text-cream-muted/80 font-light group-hover:text-cream transition-colors">(617) 778-3521</span>
              </a>
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
          <div data-reveal>
            <PropertySubmissionForm variant="inline" />
          </div>
        </div>
      </div>
    </section>
  );
}
