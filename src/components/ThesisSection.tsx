import { useScrollReveal } from "@/hooks/useScrollReveal";

const criteria = [
  {
    label: "Asset Types",
    value: "Value-add multifamily and mixed-use (residential/retail).",
  },
  {
    label: "Scale",
    value: "15–150 units, with flexibility for strategic portfolios.",
  },
  {
    label: "Geography",
    value: "Cambridge and Greater Boston — neighborhoods we know block by block.",
  },
  {
    label: "Approach",
    value: "Hands-on ownership — we buy, develop, and operate. No flipping, no passive holds.",
  },
];

export default function ThesisSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="thesis" className="relative section-pad bg-charcoal overflow-hidden" ref={sectionRef}>
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,hsl(42_65%_58%_/_0.03),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left — Header */}
          <div data-reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Our Thesis</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] mb-8 tracking-tight">
              The Right
              <br />
              <span className="text-gold">Market</span>
            </h2>
            <p className="font-sans text-base md:text-lg leading-[1.8] text-cream-muted font-light max-w-md mb-6">
              It's a market too small for institutional capital and too complex
              for passive investors. We find it exactly right.
            </p>
            <p className="font-sans text-sm leading-[1.8] text-cream-muted/70 font-light max-w-md">
              Every asset we acquire is improved, managed, and held with
              long-term conviction. Owner-operated from day one.
            </p>
          </div>

          {/* Right — Criteria list */}
          <div data-reveal className="flex flex-col lg:pt-6">
            {criteria.map((item, i) => (
              <div
                key={i}
                className="group py-7 border-b border-border/60 last:border-b-0 flex gap-6 hover:pl-2 transition-all duration-300"
              >
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mt-1 shrink-0 w-24 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
                <p className="font-sans text-sm md:text-base text-cream-muted leading-[1.7] font-light group-hover:text-cream transition-colors duration-300">
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
