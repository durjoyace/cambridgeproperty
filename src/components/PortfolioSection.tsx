import building1 from "@/assets/building-1.jpg";
import building2 from "@/assets/building-2.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const portfolioItems = [
  {
    label: "Class B Multifamily",
    location: "High-Growth Secondary Market",
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
    location: "Urban Secondary Market",
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
  { value: "75", label: "Doors Owned &amp; Managed", sub: "63 Residential · 12 Retail" },
  { value: "15+", label: "Years Combined Experience", sub: "Development &amp; Operations" },
  { value: "100%", label: "Owner-Operated Portfolio", sub: "AppFolio-Managed Systems" },
];

export default function PortfolioSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="portfolio" className="py-28 bg-charcoal-mid" ref={sectionRef}>
      <div className="container mx-auto">
        {/* Header */}
        <div data-reveal className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold">
                Our Portfolio
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
              What We Own &amp; Operate
            </h2>
          </div>
          <p className="font-sans text-sm leading-relaxed text-cream-muted font-light lg:max-w-sm lg:ml-auto">
            A growing portfolio of multifamily and mixed-use properties — each acquired, improved, and operated directly by Patrick and Tim. No third-party management. No passive capital.
          </p>
        </div>

        {/* Stats row */}
        <div data-reveal className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-12">
          {stats.map((s, i) => (
            <div key={i} className="bg-charcoal p-8 flex flex-col">
              <div className="font-display text-5xl font-semibold text-gold mb-2">{s.value}</div>
              <div className="font-sans text-xs tracking-[0.15em] uppercase text-cream mb-1">{s.label}</div>
              <div className="font-sans text-xs text-cream-muted font-light">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Portfolio cards */}
        <div data-reveal className="grid lg:grid-cols-2 gap-6">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className="bg-charcoal border border-border hover:border-gold/25 transition-all duration-300 overflow-hidden group shadow-card"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <span className="absolute top-4 left-4 font-sans text-[9px] tracking-[0.25em] uppercase text-gold border border-gold/40 bg-charcoal/60 backdrop-blur-sm px-2.5 py-1">
                  {item.tag}
                </span>
              </div>
              {/* Body */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-cream mb-1">{item.label}</h3>
                    <p className="font-sans text-xs text-cream-muted">{item.location} · {item.units}</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-cream-muted leading-relaxed font-light mb-6">
                  {item.description}
                </p>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-border">
                  {item.metrics.map((m, j) => (
                    <div key={j}>
                      <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold mb-1">{m.label}</div>
                      <div className="font-sans text-xs text-cream">{m.value}</div>
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
