const markets = [
  { city: "Nashville", state: "TN", type: "Primary Focus" },
  { city: "Charlotte", state: "NC", type: "Primary Focus" },
  { city: "Raleigh-Durham", state: "NC", type: "Primary Focus" },
  { city: "Columbus", state: "OH", type: "Active" },
  { city: "Indianapolis", state: "IN", type: "Active" },
  { city: "Richmond", state: "VA", type: "Active" },
  { city: "Providence", state: "RI", type: "Northeast" },
  { city: "Hartford", state: "CT", type: "Northeast" },
  { city: "Worcester", state: "MA", type: "Northeast" },
];

const typeOrder: Record<string, number> = { "Primary Focus": 0, "Active": 1, "Northeast": 2 };

export default function MarketsSection() {
  return (
    <section className="py-28 bg-charcoal-mid border-t border-border">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">
                Target Geography
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
              High-Growth Secondary Markets
            </h2>
          </div>
          <p className="font-sans text-sm leading-relaxed text-cream-muted font-light lg:self-end">
            We target markets with strong demand fundamentals, favorable landlord economics, and meaningful value-add opportunity — prioritizing execution speed and local intelligence over broad geographic scatter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {markets
            .sort((a, b) => (typeOrder[a.type] ?? 9) - (typeOrder[b.type] ?? 9))
            .map((m, i) => (
              <div key={i} className="bg-charcoal p-6 flex items-center justify-between group hover:bg-charcoal-mid transition-colors duration-200">
                <div>
                  <div className="font-display text-lg font-semibold text-cream">{m.city}</div>
                  <div className="font-sans text-xs text-cream-muted">{m.state}</div>
                </div>
                <span className={`font-sans text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 border ${
                  m.type === "Primary Focus"
                    ? "border-gold/50 text-gold"
                    : "border-border text-cream-muted/60"
                }`}>
                  {m.type}
                </span>
              </div>
            ))}
        </div>

        <p className="font-sans text-xs text-cream-muted/50 mt-5 font-light">
          Asset submissions welcome from all geographies. Focus markets listed above represent primary acquisition targets.
        </p>
      </div>
    </section>
  );
}
