import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, TrendingUp, ExternalLink } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { getCaseStudyBySlug, caseStudies } from "@/lib/data/case-studies";
import { pressItems } from "@/lib/data/press";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/** Sans tracked-caps brass eyebrow — the consistent section marker. */
function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass mb-8">
      {children}
    </p>
  );
}

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const property = slug ? getCaseStudyBySlug(slug) : undefined;
  const sectionRef = useScrollReveal<HTMLElement>();

  if (!property) {
    return <Navigate to="/portfolio" replace />;
  }

  const otherProperties = caseStudies.filter((cs) => cs.slug !== property.slug);
  const displayMetrics = property.detailMetrics || property.metrics;

  // Match press coverage to this property by keyword
  const pressKeywords: Record<string, string[]> = {
    "907-main-hotel": ["907 Main", "907 main", "Central Square Hotel", "boutique hotel", "37.75"],
    "17-story-street": ["Story Street", "Harriet Jacobs", "17 Story"],
  };
  const keywords = slug ? pressKeywords[slug] || [] : [];
  const relatedPress = pressItems.filter((p) =>
    keywords.some((kw) => p.headline.includes(kw) || p.excerpt.includes(kw))
  );

  return (
    <>
      <SEOHead
        title={`${property.title} — ${property.location}`}
        description={property.description}
        canonical={`/portfolio/${property.slug}`}
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Portfolio", url: "/portfolio" },
            { name: property.title, url: `/portfolio/${property.slug}` },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero image */}
      {property.image && (
        <div className="relative h-72 md:h-96 lg:h-[28rem] overflow-hidden bg-paper-warm">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
            width={1200}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/30 to-transparent" />
        </div>
      )}

      {/* Hero */}
      <section className={`${property.image ? "pt-10 md:pt-12" : "pt-8"} pb-16 md:pb-20 bg-paper`} ref={sectionRef}>
        <div className="container mx-auto px-6 md:px-12 max-w-6xl" data-reveal>
          {/* Back link */}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-ink/65 hover:text-brass transition-colors duration-300 mb-10 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
          >
            <ArrowLeft size={12} /> All projects
          </Link>

          <Kicker>{property.strategy}</Kicker>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-end">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] tracking-tight mb-4">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-ink/60">
                <MapPin size={14} className="text-brass" />
                <span className="font-sans text-sm font-light">
                  {property.location} {property.neighborhood ? `— ${property.neighborhood}` : ""}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <span className="font-sans text-[9px] tracking-[0.24em] uppercase text-brass border border-brass/30 px-3 py-1.5">
                {property.assetType}
              </span>
              {property.statusDetail && (
                <span className="font-sans text-[9px] tracking-[0.16em] uppercase text-brass border border-brass/30 bg-brass/5 px-3 py-1.5">
                  {property.statusDetail}
                </span>
              )}
              <span className="font-sans text-[9px] tracking-[0.24em] uppercase text-ink/65 border border-ink/15 px-3 py-1.5">
                {property.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics ribbon */}
      <section className="bg-paper">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-ink/10 border border-ink/10">
            {displayMetrics.map((m, i) => (
              <div key={i} className="bg-paper p-6 md:p-8 flex flex-col items-center text-center">
                <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-brass mb-2">{m.label}</div>
                <div className="font-serif italic text-sm text-ink/85">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance snapshot */}
      {property.performanceSnapshot && property.performanceSnapshot.length > 0 && (
        <section className="py-20 md:py-24 bg-paper-warm">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp size={14} className="text-brass" />
              <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-brass">Performance snapshot</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
              {property.performanceSnapshot.map((pm, i) => (
                <div key={i} className="bg-paper-warm p-8 flex flex-col items-center text-center">
                  <div className="font-serif text-3xl md:text-4xl text-ink mb-2 tracking-tight">{pm.value}</div>
                  <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-ink/70 mb-1">{pm.label}</div>
                  {pm.context && (
                    <div className="font-sans text-xs text-ink/65 font-light">{pm.context}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video tour */}
      {property.videoUrl && (
        <section className="py-16 md:py-20 bg-paper">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <Kicker>Video tour</Kicker>
            <div className="relative w-full aspect-video bg-paper-warm border border-ink/10 overflow-hidden">
              <iframe
                src={property.videoUrl}
                title={`${property.title} — video tour`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="py-20 md:py-24 bg-paper">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <Kicker>Overview</Kicker>
          <p className="font-serif text-lg md:text-xl text-ink/85 leading-[1.7]">
            {property.fullDescription || property.description}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 md:py-28 bg-paper-warm">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <Kicker>Key highlights</Kicker>
          <div className="grid md:grid-cols-2 gap-4">
            {property.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 bg-paper border border-ink/10 p-6">
                <span className="text-brass mt-1.5 select-none shrink-0" aria-hidden>&bull;</span>
                <span className="font-sans text-sm text-ink/75 font-light leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {property.timeline && property.timeline.length > 0 && (
        <section className="py-24 md:py-28 bg-paper">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <Kicker>Execution timeline</Kicker>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-ink/15" />
              <div className="space-y-8">
                {property.timeline.map((item, i) => (
                  <div key={i} className="relative flex items-start gap-8 pl-16">
                    <div className="absolute left-4 top-1 w-4 h-4 border border-brass/40 bg-paper flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-brass" />
                    </div>
                    <div>
                      <div className="font-sans text-xs tracking-[0.15em] uppercase text-brass mb-1">{item.date}</div>
                      <p className="font-sans text-sm text-ink/75 font-light leading-[1.7]">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Press coverage */}
      {relatedPress.length > 0 && (
        <section className="py-24 md:py-28 bg-paper-warm">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <Kicker>Press coverage</Kicker>
            <div className="flex flex-col gap-px bg-ink/10 border border-ink/10">
              {relatedPress.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-paper p-6 md:p-8 flex items-center justify-between hover:bg-paper-warm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-brass border border-brass/30 bg-brass/5 px-2.5 py-1">
                        {item.category}
                      </span>
                      <span className="font-sans text-[10px] text-ink/65">
                        {item.source} · {new Date(item.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <div className="font-serif text-base md:text-lg text-ink group-hover:text-brass transition-colors duration-300">
                      {item.headline}
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-ink/40 group-hover:text-brass transition-colors duration-300 shrink-0 ml-4"
                  />
                </a>
              ))}
            </div>
            <Link
              to="/press"
              className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-ink border-b border-ink/30 pb-1 mt-8 hover:border-brass hover:text-brass transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
            >
              Full press &amp; public record <ArrowRight size={11} />
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-paper mb-6 tracking-tight">
            Have a similar property?
          </h2>
          <p className="font-serif italic text-paper/70 text-lg leading-[1.7] mb-10">
            If you own a multifamily or mixed-use asset in Greater Boston, our
            principals would like to hear from you.
          </p>
          <Link
            to="/sell-your-property"
            className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 bg-paper text-ink hover:bg-brass hover:text-paper transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
          >
            Submit a property <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Other properties */}
      {otherProperties.length > 0 && (
        <section className="py-24 md:py-28 bg-paper">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <p className="font-serif italic text-base md:text-lg text-brass mb-10">
              More from our portfolio
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProperties.map((cs) => (
                <Link
                  key={cs.slug}
                  to={`/portfolio/${cs.slug}`}
                  className="group block bg-paper border border-ink/10 p-8 hover:border-ink/25 transition-all duration-500 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
                >
                  <span className="font-sans text-[9px] tracking-[0.24em] uppercase text-brass mb-3 block">
                    {cs.assetType}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-ink mb-2 group-hover:text-brass transition-colors duration-300 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="font-sans text-xs text-ink/65 font-light">
                    {cs.location} &middot; {cs.units} units &middot; {cs.strategy}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
