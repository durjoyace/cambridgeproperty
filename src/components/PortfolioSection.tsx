import building1 from "@/assets/building-1.jpg";
import building2 from "@/assets/building-2.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const portfolioItems = [
  {
    label: "Class B Multifamily",
    location: "Cambridge, MA",
    units: "24 Units",
    description:
      "Value-add execution focused on operational efficiencies and targeted capital improvements. Leveraging enterprise-grade AppFolio management systems.",
    tag: "Multifamily",
    image: building1,
    metrics: [
      { label: "Asset Type", value: "Class B Residential" },
      { label: "Strategy", value: "Value-Add" },
      { label: "Status", value: "Active" },
    ],
  },
  {
    label: "Mixed-Use Asset",
    location: "Somerville, MA",
    units: "18 Units",
    description:
      "Stabilization of commercial tenant base while repositioning residential floorplans. 63 residential and 12 retail doors under active management.",
    tag: "Mixed-Use",
    image: building2,
    metrics: [
      { label: "Asset Type", value: "Res + Retail" },
      { label: "Strategy", value: "Stabilization" },
      { label: "Status", value: "Active" },
    ],
  },
];

const stats = [
  { value: "75", label: "Doors Owned & Managed", sub: "63 Residential · 12 Retail" },
  { value: "15+", label: "Years Combined Experience", sub: "Development & Operations" },
  { value: "100%", label: "Owner-Operated Portfolio", sub: "AppFolio-Managed Systems" },
];

export default function PortfolioSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="portfolio" className="relative section-pad bg-charcoal overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto">
        {/* Header */}
        <div data-reveal className="grid lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Our Portfolio</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              What We Own
              <br />
              <span className="text-gold">&amp; Operate</span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
            A growing portfolio of multifamily and mixed-use properties — each acquired, improved, and operated directly by Patrick and Tim.
          </p>
        </div>

        {/* Stats */}
        <div data-reveal className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 mb-16">
          {stats.map((s, i) => (
            <div key={i} className="bg-charcoal-mid p-10 flex flex-col">
              <div className="font-display text-5xl md:text-6xl font-semibold text-gold mb-3 tracking-tight">{s.value}</div>
              <div className="font-sans text-xs tracking-[0.15em] uppercase text-cream mb-1.5" dangerouslySetInnerHTML={{ __html: s.label }} />
              <div className="font-sans text-xs text-cream-muted/60 font-light" dangerouslySetInnerHTML={{ __html: s.sub }} />
            </div>
          ))}
        </div>

        {/* Portfolio cards */}
        <div data-reveal className="grid lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className="group bg-charcoal-mid border border-border/40 overflow-hidden hover:border-gold/15 transition-all duration-500 shadow-card"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-mid via-charcoal-mid/20 to-transparent" />
                <span className="absolute top-5 left-5 font-sans text-[9px] tracking-[0.25em] uppercase text-gold border border-gold/30 bg-charcoal/70 backdrop-blur-sm px-3 py-1.5">
                  {item.tag}
                </span>
              </div>
              {/* Body */}
              <div className="p-8 md:p-10">
                <div className="mb-4">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-cream mb-1.5">{item.label}</h3>
                  <p className="font-sans text-xs text-cream-muted/70">{item.location} · {item.units}</p>
                </div>
                <p className="font-sans text-sm text-cream-muted leading-[1.7] font-light mb-8">
                  {item.description}
                </p>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40">
                  {item.metrics.map((m, j) => (
                    <div key={j}>
                      <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/60 mb-1.5">{m.label}</div>
                      <div className="font-sans text-xs text-cream font-light">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
