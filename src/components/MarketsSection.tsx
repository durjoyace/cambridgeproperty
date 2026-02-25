import { useScrollReveal } from "@/hooks/useScrollReveal";

const tierDescriptions: Record<string, string> = {
  "Home Base": "Active portfolio, zoning expertise, and deep relationships",
  "Active": "Current assets and acquisition targets",
  "Watching": "Markets we track and will enter selectively",
};

const markets = [
  { city: "Cambridge", state: "MA", type: "Home Base", detail: "Central Sq · Harvard Sq · North Cambridge" },
  { city: "Somerville", state: "MA", type: "Active", detail: "18-unit mixed-use portfolio" },
  { city: "Boston", state: "MA", type: "Watching" },
  { city: "Brookline", state: "MA", type: "Watching" },
  { city: "Medford", state: "MA", type: "Watching" },
  { city: "Select U.S. Markets", state: "", type: "Watching", detail: "Expanding to entitlement-complex markets nationally" },
];

const typeOrder: Record<string, number> = { "Home Base": 0, "Active": 1, "Watching": 2 };

export default function MarketsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="markets" className="relative section-pad bg-charcoal-mid overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        <div data-reveal className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Target Geography</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Where We
              <br />
              <span className="text-gold">Own &amp; Grow</span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:self-end lg:max-w-sm lg:ml-auto">
            Active across Massachusetts and expanding to select U.S. markets — targeting entitlement-complex geographies where deep regulatory knowledge creates structural advantages.
          </p>
        </div>

        {/* Tier legend */}
        <div data-reveal className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {Object.entries(tierDescriptions).map(([tier, desc]) => (
            <div key={tier} className="flex items-baseline gap-3">
              <span className={`font-sans text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 border shrink-0 ${
                tier === "Home Base"
                  ? "border-gold/40 text-gold"
                  : "border-border/60 text-cream-muted/50"
              }`}>
                {tier}
              </span>
              <span className="font-sans text-xs text-cream-muted/50 font-light">{desc}</span>
            </div>
          ))}
        </div>

        <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
          {markets
            .sort((a, b) => (typeOrder[a.type] ?? 9) - (typeOrder[b.type] ?? 9))
            .map((m, i) => (
              <div key={i} className="bg-charcoal p-7 md:p-8 flex items-center justify-between group hover:bg-charcoal-mid transition-all duration-300">
                <div>
                  <div className="font-display text-lg md:text-xl font-semibold text-cream group-hover:text-gold transition-colors duration-300">{m.city}</div>
                  <div className="font-sans text-xs text-cream-muted/60 mt-0.5">
                    {(m as { detail?: string }).detail || m.state}
                  </div>
                </div>
                <span className={`font-sans text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 border transition-colors duration-300 ${
                  m.type === "Home Base"
                    ? "border-gold/40 text-gold"
                    : "border-border/60 text-cream-muted/40 group-hover:border-border group-hover:text-cream-muted/60"
                }`}>
                  {m.type}
                </span>
              </div>
            ))}
        </div>

        <p data-reveal className="font-sans text-xs text-cream-muted/40 mt-6 font-light">
          Our thesis is replicable in any market where entitlement complexity, political capital, and direct sourcing create structural advantages over passive capital.
        </p>
      </div>
    </section>
  );
}
