import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import hotel907 from "@/assets/907-main.jpg";
import building2 from "@/assets/building-2.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { COMPANY_STATS } from "@/lib/data/stats";
import { caseStudies } from "@/lib/data/case-studies";

const portfolioItems = [
  {
    slug: "907-main-hotel",
    label: "907 Main — The Lark Cambridge",
    location: "Central Square, Cambridge",
    units: "67 Keys",
    description:
      "Ground-up development of a $45M boutique luxury hotel — designed by Gensler Boston, LEED-certifiable, $37.75M institutional financing. Now operating as The Lark Cambridge.",
    tag: "Hotel",
    statusBadge: "Completed Development",
    image: hotel907,
    metrics: [
      { label: "Asset Type", value: "Boutique Hotel" },
      { label: "Strategy", value: "Ground-Up Development" },
      { label: "Architect", value: "Gensler Boston" },
    ],
  },
  {
    slug: "17-story-street",
    label: "17 Story Street — Harriet Jacobs House",
    location: "Harvard Square, Cambridge",
    units: "50+ Homes",
    description:
      "Historic preservation of an African American heritage site combined with a hotel and 50+ new homes. Five years of community engagement. Cambridge Historical Commission approved 7-0 unanimous.",
    tag: "Preservation + Dev",
    statusBadge: "CHC Approved 7-0",
    image: building2,
    metrics: [
      { label: "Asset Type", value: "Hotel + Residential" },
      { label: "Strategy", value: "Preservation + Dev" },
      { label: "Architect", value: "Cambridge Seven" },
    ],
  },
  {
    label: "Stabilized Portfolio",
    location: "Cambridge & Somerville",
    units: "75 Doors",
    description:
      "Vertically integrated ownership and operations across 63 residential units and 12 retail spaces. AppFolio-powered, sub-4-hour maintenance response, fully principal-managed since 2010.",
    tag: "Operating Base",
    statusBadge: "Fully Stabilized",
    image: building2,
    metrics: [
      { label: "Units", value: "63 Residential · 12 Retail" },
      { label: "Strategy", value: "Value-Add & Hold" },
      { label: "Management", value: "Vertically Integrated" },
    ],
  },
];

const stats = [
  { value: "$45M", label: "Ground-Up Development", sub: "907 Main — The Lark Cambridge" },
  { value: "$37.75M", label: "Financing Secured", sub: "Institutional debt placement" },
  { value: "75", label: "Residential & Retail Units", sub: `${COMPANY_STATS.residentialUnits} Residential · ${COMPANY_STATS.retailDoors} Retail` },
  { value: `${COMPANY_STATS.yearsInOperation}`, label: "Years Entitlement Experience", sub: "Cambridge zoning & land use" },
  { value: "$100M+", label: "Active Pipeline", sub: "Massachusetts & select U.S. markets" },
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
              <span className="section-label">Development Portfolio</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Active
              <br />
              <span className="text-gold">Development</span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
            Each asset sourced directly, entitled through complex municipal process, and operated as a long-term hold. No intermediaries, no investment committee lag.
          </p>
        </div>

        {/* Stats — institutional scale proof */}
        <div data-reveal className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border/40 mb-16">
          {stats.map((s, i) => (
            <div key={i} className="bg-charcoal-mid p-8 md:p-10 flex flex-col">
              <div className="font-display text-3xl md:text-4xl font-semibold text-gold mb-3 tracking-tight">{s.value}</div>
              <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-cream mb-1.5">{s.label}</div>
              <div className="font-sans text-[10px] text-cream-muted/50 font-light">{s.sub}</div>
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
                  if (!("slug" in item) || !item.slug) return null;
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
                {"slug" in item && item.slug ? (
                  <Link
                    to={`/portfolio/${item.slug}`}
                    className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-gold/60 hover:text-gold transition-colors duration-300"
                  >
                    View Details <ArrowRight size={12} />
                  </Link>
                ) : (
                  <Link
                    to="/management"
                    className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-gold/60 hover:text-gold transition-colors duration-300"
                  >
                    Operations Platform <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
