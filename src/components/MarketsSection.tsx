import { useScrollReveal } from "@/hooks/useScrollReveal";

const markets = [
  { city: "Cambridge", state: "MA", type: "Home Base" },
  { city: "Somerville", state: "MA", type: "Home Base" },
  { city: "Boston", state: "MA", type: "Home Base" },
  { city: "Brookline", state: "MA", type: "Active" },
  { city: "Medford", state: "MA", type: "Active" },
  { city: "Malden", state: "MA", type: "Active" },
  { city: "Everett", state: "MA", type: "Greater Boston" },
  { city: "Revere", state: "MA", type: "Greater Boston" },
  { city: "Chelsea", state: "MA", type: "Greater Boston" },
];

const typeOrder: Record<string, number> = { "Home Base": 0, "Active": 1, "Greater Boston": 2 };

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
            Rooted in Cambridge, we focus on Greater Boston neighborhoods where deep local knowledge and owner-operator conviction create a structural edge.
          </p>
        </div>

        <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
          {markets
            .sort((a, b) => (typeOrder[a.type] ?? 9) - (typeOrder[b.type] ?? 9))
            .map((m, i) => (
              <div key={i} className="bg-charcoal p-7 md:p-8 flex items-center justify-between group hover:bg-charcoal-mid transition-all duration-300">
                <div>
                  <div className="font-display text-lg md:text-xl font-semibold text-cream group-hover:text-gold transition-colors duration-300">{m.city}</div>
                  <div className="font-sans text-xs text-cream-muted/60 mt-0.5">{m.state}</div>
                </div>
                <span className={`font-sans text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 border transition-colors duration-300 ${
                  m.type === "Primary Focus"
                    ? "border-gold/40 text-gold"
                    : "border-border/60 text-cream-muted/40 group-hover:border-border group-hover:text-cream-muted/60"
                }`}>
                  {m.type}
                </span>
              </div>
            ))}
        </div>

        <p data-reveal className="font-sans text-xs text-cream-muted/40 mt-6 font-light">
          We welcome conversations from owners across the Greater Boston area. Neighborhoods listed above represent our current focus.
        </p>
      </div>
    </section>
  );
}
