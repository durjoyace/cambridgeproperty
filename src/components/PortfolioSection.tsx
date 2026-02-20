const portfolioItems = [
  {
    label: "Recent Acquisition",
    type: "Class B Multifamily",
    units: "24 Units",
    description:
      "Value-add execution focused on operational efficiencies and targeted capital improvements.",
    tag: "Multifamily",
  },
  {
    label: "Mixed-Use Asset",
    type: "Residential + Retail",
    units: "18 Units",
    description:
      "Stabilization of commercial tenant base while repositioning residential floorplans.",
    tag: "Mixed-Use",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-28 bg-charcoal-mid">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="divider-gold" />
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">
              Operational Excellence
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight mb-4">
            Our Portfolio
          </h2>
          <p className="font-sans text-sm leading-relaxed text-cream-muted font-light">
            Active, hands-on management leveraging enterprise-grade systems like AppFolio to maximize asset value and ensure seamless post-acquisition transitions.
          </p>
        </div>

        {/* Stats + Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stat block */}
          <div className="lg:col-span-1 flex flex-col justify-center bg-charcoal border border-gold/20 p-10 shadow-card">
            <div
              className="font-display text-7xl font-semibold leading-none mb-2"
              style={{ color: "hsl(var(--gold))" }}
            >
              75
            </div>
            <div className="font-sans text-xs tracking-[0.2em] uppercase text-cream mb-3">
              Doors Currently Managed
            </div>
            <div className="divider-gold mb-3" />
            <div className="font-sans text-xs text-cream-muted font-light">
              63 Residential · 12 Retail
            </div>
          </div>

          {/* Portfolio cards */}
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className="bg-charcoal border border-border hover:border-gold/30 transition-colors duration-300 p-8 flex flex-col justify-between shadow-card group"
            >
              <div>
                <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-2.5 py-1 inline-block mb-5">
                  {item.tag}
                </span>
                <h3 className="font-display text-xl font-semibold text-cream mb-1">
                  {item.label}
                </h3>
                <p className="font-sans text-xs tracking-wide text-cream-muted mb-4">
                  {item.type} · {item.units}
                </p>
                <p className="font-sans text-sm text-cream-muted leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
              <div className="mt-8 h-px bg-border group-hover:bg-gold/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
