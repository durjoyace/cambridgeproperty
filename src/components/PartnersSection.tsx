import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PartnersSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="partners" className="relative section-pad bg-charcoal overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div data-reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Service Network</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight mb-8">
              Our Preferred
              <br />
              Vendors
            </h2>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light max-w-md mb-10">
              Over 15 years of hands-on ownership, Patrick and Tim have built a trusted network of contractors, architects, and service providers who understand how owner-operators work.
            </p>
            <a
              href="mailto:partners@barrettjohnson.com"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-gold group"
            >
              <span className="border-b border-gold/30 pb-1 group-hover:border-gold transition-colors duration-300">
                Inquire About Joining
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Visual accent */}
          <div data-reveal className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="aspect-square border border-gold/10 flex items-center justify-center">
                <div className="absolute inset-6 border border-gold/[0.06]" />
                <div className="absolute inset-12 border border-gold/[0.04]" />
                <div className="absolute inset-[4.5rem] border border-gold/[0.03]" />
                <div className="text-center">
                  <div className="font-display text-6xl font-semibold text-gold/15 mb-3 tracking-tight">B&amp;J</div>
                  <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/25">
                    Vendor Network
                  </div>
                  <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-cream-muted/20 mt-1.5">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
