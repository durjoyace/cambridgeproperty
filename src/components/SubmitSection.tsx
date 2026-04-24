import { CheckCircle, Shield, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PropertySubmissionForm from "@/components/forms/PropertySubmissionForm";

export default function SubmitSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="submit"
      className="relative bg-paper py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12" data-reveal>
            <span className="font-serif italic text-2xl md:text-3xl text-brass">V</span>
            <div className="text-right font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55">
              <div>Direct Acquisition</div>
              <div className="font-serif italic tracking-normal normal-case text-[13px] mt-1 text-ink/65">
                Submit a property
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-ink/20 mb-16" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left — Copy */}
            <div data-reveal className="lg:sticky lg:top-32">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-ink/55 mb-6">
                Direct Acquisition
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-ink mb-8 tracking-tight">
                Submit a property.
                <br />
                <em className="font-serif italic text-brass">We will read it.</em>
              </h2>
              <p className="font-serif text-lg md:text-xl leading-[1.7] text-ink/75 mb-8 max-w-md">
                Patrick and Tim review every submission personally. No brokers, no
                committees, no analyst coverage. If the math works, you hear from
                us. If it doesn't, you still hear from us — within 48 business hours.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                {[
                  "Direct conversation with a principal",
                  "Confidential and encrypted in transit",
                  "No obligation — deal-by-deal only",
                  "48-hour response, yes or no",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-brass shrink-0" />
                    <span className="font-sans text-sm text-ink/75 font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 mb-10">
                <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-ink/55 mb-1">
                  Or reach us directly
                </p>
                <a
                  href="mailto:acquisitions@thaneandreeve.com"
                  className="flex items-center gap-3 group"
                >
                  <Mail size={14} className="text-brass shrink-0" />
                  <span className="font-serif italic text-ink/80 group-hover:text-brass transition-colors">
                    acquisitions@thaneandreeve.com
                  </span>
                </a>
              </div>

              <div className="flex gap-4 items-start bg-paper-warm border-l-2 border-brass p-6">
                <Shield size={15} className="text-brass mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans text-[11px] tracking-[0.18em] uppercase font-medium text-ink mb-2">
                    Confidentiality
                  </p>
                  <p className="font-sans text-sm text-ink/65 font-light leading-relaxed">
                    Your property details go to Patrick Barrett and Timothy Johnson —
                    never listed, never brokered, never forwarded.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div data-reveal>
              <PropertySubmissionForm variant="inline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
