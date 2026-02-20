import { ArrowRight } from "lucide-react";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-28 bg-charcoal-mid">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">
                Service Network
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight mb-6">
              Our Preferred Vendors
            </h2>
            <p className="font-sans text-sm leading-relaxed text-cream-muted font-light max-w-sm mb-8">
              Over 15 years of hands-on ownership, Patrick and Tim have built a trusted network of contractors, architects, and service providers who understand how owner-operators work. We are formalizing this network for our growing portfolio.
            </p>
            <a
              href="mailto:partners@barrettjohnson.com"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-200 group"
            >
              Inquire About Joining the Network
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Visual accent */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-xs">
              <div className="aspect-square border border-gold/15 flex items-center justify-center">
                <div className="absolute inset-8 border border-gold/10" />
                <div className="absolute inset-16 border border-gold/8" />
                <div className="text-center">
                  <div className="font-display text-5xl font-semibold text-gold/30 mb-2">B&amp;J</div>
                  <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/40">
                    Vendor Network
                  </div>
                  <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-cream-muted/30 mt-1">
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
