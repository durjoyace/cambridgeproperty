import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import building1 from "@/assets/building-1.jpg";
import building2 from "@/assets/building-2.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { COMPANY_STATS } from "@/lib/data/stats";
import { caseStudies } from "@/lib/data/case-studies";

const portfolioItems = [
  {
    slug: "cambridge-24-unit",
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
    slug: "somerville-mixed-use",
    label: "Mixed-Use Asset",
    location: "Somerville, MA",
    units: "18 Units",
    description:
      "Stabilization of commercial tenant base while repositioning residential floorplans. 63 residential and 12 retail doors under active management.",
    tag: "Mixed-Use",
    statusBadge: "Completed Value Creation",
    image: building2,
    metrics: [
      { label: "Asset Type", value: "Res + Retail" },
      { label: "Strategy", value: "Stabilization" },
      { label: "Status", value: "Stabilized" },
    ],
  },
];

const stats = [
  { value: String(COMPANY_STATS.totalDoors), label: "Doors Owned & Managed", sub: `${COMPANY_STATS.residentialUnits} Residential · ${COMPANY_STATS.retailDoors} Retail` },
  { value: String(COMPANY_STATS.yearsInOperation), label: `Years in Greater Boston`, sub: `Founded ${COMPANY_STATS.foundingYear} · Multifamily & Mixed-Use` },
  { value: COMPANY_STATS.ownerOperated, label: "Owner-Operated Portfolio", sub: "AppFolio-Managed Systems" },
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
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-mid via-charcoal-mid/20 to-transparent" />
                <span className="absolute top-5 left-5 font-sans text-[9px] tracking-[0.25em] uppercase text-gold border border-gold/30 bg-charcoal/70 backdrop-blur-sm px-3 py-1.5">
                  {item.tag}
                </span>
              </div>
              {/* Body */}
              <div className="p-8 md:p-10">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-cream mb-1.5">{item.label}</h3>
                    <p className="font-sans text-xs text-cream-muted/70">{item.location} · {item.units}</p>
                  </div>
                  {"statusBadge" in item && item.statusBadge && (
                    <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-gold border border-gold/30 bg-gold/5 px-3 py-1.5 shrink-0">
                      {item.statusBadge}
                    </span>
                  )}
                </div>
                <p className="font-sans text-sm text-cream-muted leading-[1.7] font-light mb-6">
                  {item.description}
                </p>
                {/* Performance Snapshot */}
                {(() => {
                  const cs = caseStudies.find((c) => c.slug === item.slug);
                  if (!cs?.performanceSnapshot) return null;
                  return (
                    <div className="mb-6 p-5 bg-charcoal border border-gold/10">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp size={12} className="text-gold/60" />
                        <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/70">Performance Snapshot</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {cs.performanceSnapshot.map((pm, j) => (
                          <div key={j}>
                            <div className="font-display text-lg md:text-xl font-semibold text-gold mb-1">{pm.value}</div>
                            <div className="font-sans text-[9px] tracking-[0.1em] uppercase text-cream-muted/70 mb-0.5">{pm.label}</div>
                            {pm.context && (
                              <div className="font-sans text-[10px] text-cream-muted/40 font-light">{pm.context}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40 mb-6">
                  {item.metrics.map((m, j) => (
                    <div key={j}>
                      <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/60 mb-1.5">{m.label}</div>
                      <div className="font-sans text-xs text-cream font-light">{m.value}</div>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/portfolio/${item.slug}`}
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-gold/60 hover:text-gold transition-colors duration-300"
                >
                  View Details <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
