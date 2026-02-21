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
    value: "Cambridge-rooted, expanding into high-growth secondary markets across the Northeast and Southeast.",
  },
  {
    label: "Approach",
    value: "Hands-on ownership — we buy, develop, and operate. No flipping, no passive holds.",
  },
];

export default function ThesisSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="thesis" className="py-28 bg-charcoal" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Header */}
          <div data-reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">
                Our Approach
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight mb-6">
              How We Build &amp; Operate
            </h2>
            <p className="font-sans text-sm leading-relaxed text-cream-muted font-light max-w-sm">
              We are Cambridge-based property owners and developers with a direct, operator-led approach. Every asset we acquire is improved, managed, and held with long-term conviction — bringing institutional discipline to the middle market.
            </p>
          </div>

          {/* Right — Criteria list */}
          <div data-reveal className="flex flex-col divide-y divide-border">
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
