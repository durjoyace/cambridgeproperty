import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
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
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light max-w-md mb-6">
              Over 15 years of hands-on ownership, Patrick and Tim have built a trusted network of contractors, architects, and service providers who understand how owner-operators work.
            </p>
            <div className="flex flex-col gap-3 mb-10">
              {[
                "Consistent project volume across 75 doors",
                "Long-term relationships with direct ownership access",
                "Professional billing and prompt payment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={13} className="text-gold/60 shrink-0" />
                  <span className="font-sans text-sm text-cream-muted/70 font-light">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/partners"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-gold group focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            >
              <span className="border-b border-gold/30 pb-1 group-hover:border-gold transition-colors duration-300">
                View Our Network
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Stats display */}
          <div data-reveal className="hidden lg:grid grid-cols-2 gap-4">
            <div className="bg-charcoal-mid border border-border/40 p-8 text-center">
              <div className="font-display text-4xl font-semibold text-gold mb-2 tracking-tight">8</div>
              <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/60">Vendor Categories</div>
            </div>
            <div className="bg-charcoal-mid border border-border/40 p-8 text-center">
              <div className="font-display text-4xl font-semibold text-gold mb-2 tracking-tight">75</div>
              <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/60">Doors Serviced</div>
            </div>
            <div className="bg-charcoal-mid border border-border/40 p-8 text-center">
              <div className="font-display text-4xl font-semibold text-gold mb-2 tracking-tight">15+</div>
              <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/60">Years Experience</div>
            </div>
            <div className="bg-charcoal-mid border border-border/40 p-8 text-center">
              <div className="font-display text-4xl font-semibold text-gold mb-2 tracking-tight">100%</div>
              <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/60">Owner-Operated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
