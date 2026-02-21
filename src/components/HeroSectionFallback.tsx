export default function HeroSectionFallback() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background (replaces 3D canvas while loading) */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-mid to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      {/* Content — identical layout to real HeroSection */}
      <div className="relative container mx-auto" style={{ zIndex: 2 }}>
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent" />
            <span className="section-label">Cambridge, Massachusetts</span>
          </div>
          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold text-cream leading-[1.05] tracking-tight">
            Owners.
            <br />
            Developers.
            <br />
            <span className="text-gold italic">Operators.</span>
          </h1>
          <p className="mt-8 font-sans text-base md:text-lg text-cream-muted leading-[1.7] max-w-lg font-light">
            Patrick W. Barrett III and Tim Johnson, CPM are hands-on Cambridge
            and Boston property owners and developers — acquiring, improving,
            and operating multifamily and mixed-use assets across Greater
            Boston.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold"
            >
              View Our Portfolio
            </a>
            <a
              href="#submit"
              className="inline-flex items-center justify-center font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 border border-cream/20 text-cream hover:border-gold hover:text-gold transition-all duration-300"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" style={{ zIndex: 2 }}>
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
