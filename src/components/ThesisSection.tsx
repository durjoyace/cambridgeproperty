const criteria = [
  {
    label: "Asset Types",
    value: "Value-add multifamily and mixed-use (residential/retail).",
  },
  {
    label: "Size",
    value: "15–150 units, with flexibility for strategic portfolios.",
  },
  {
    label: "Geography",
    value: "High-growth secondary markets with strong demand fundamentals.",
  },
  {
    label: "Structure",
    value: "Fee-simple acquisitions and joint venture partnerships.",
  },
];

export default function ThesisSection() {
  return (
    <section id="thesis" className="py-28 bg-charcoal">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Header */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">
                Acquisition Thesis
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight mb-6">
              Target Criteria
            </h2>
            <p className="font-sans text-sm leading-relaxed text-cream-muted font-light max-w-sm">
              We target high-potential multifamily and mixed-use assets, bringing institutional rigor to middle-market transactions. Our process is designed for sophisticated sellers seeking certainty of execution without broad market exposure.
            </p>
          </div>

          {/* Right — Criteria list */}
          <div className="flex flex-col divide-y divide-border">
            {criteria.map((item, i) => (
              <div key={i} className="py-6 flex gap-5">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mt-0.5 shrink-0 w-24">
                  {item.label}
                </span>
                <p className="font-sans text-sm text-cream-muted leading-relaxed font-light">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
