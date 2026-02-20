import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      {/* Subtle top bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto">
        <div className="max-w-3xl animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="divider-gold" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">
              Confidential Acquisitions Platform
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-[1.08] mb-6">
            Institutional-Grade Capital for Multifamily Owners.
          </h1>

          <p className="font-sans text-base md:text-lg text-cream-muted leading-relaxed max-w-xl mb-10 font-light">
            A highly discreet, owner-first acquisition platform driven by data and backed by a proven operational track record.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#submit"
              className="inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 bg-gold text-charcoal font-medium hover:bg-gold-light transition-colors duration-200 shadow-gold"
            >
              Submit a Property Confidentially
            </a>
            <a
              href="#thesis"
              className="inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 border border-cream/30 text-cream hover:border-gold hover:text-gold transition-all duration-200"
            >
              Review Our Criteria
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-50">
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-cream-muted rotate-90 origin-center">Scroll</span>
      </div>
    </section>
  );
}
