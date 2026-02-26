import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, TrendingUp, ExternalLink } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { getCaseStudyBySlug, caseStudies } from "@/lib/data/case-studies";
import { pressItems } from "@/lib/data/press";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import hotel907 from "@/assets/907-main.jpg";
import storyStreet from "@/assets/17-story-street.jpg";

const propertyImages: Record<string, string> = {
  "907-main": hotel907,
  "building-2": storyStreet,
};

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

      {/* Hero Image */}
      {property.image && propertyImages[property.image] && (
        <div className="relative h-72 md:h-96 lg:h-[28rem] overflow-hidden">
          <img
            src={propertyImages[property.image]}
            alt={property.title}
            className="w-full h-full object-cover"
            width={1200}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>
      )}

      {/* Hero */}
      <section className={`${property.image ? "pt-12" : "pt-8"} pb-20 bg-charcoal`} ref={sectionRef}>
        <div className="container mx-auto" data-reveal>
          {/* Back link */}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.15em] uppercase text-cream-muted/50 hover:text-gold transition-colors duration-300 mb-10"
          >
            <ArrowLeft size={12} /> All Projects
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">{property.strategy}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight mb-4">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-cream-muted/60">
                <MapPin size={14} className="text-gold/60" />
                <span className="font-sans text-sm font-light">
                  {property.location} {property.neighborhood ? `— ${property.neighborhood}` : ""}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-3 py-1.5">
                {property.assetType}
              </span>
              {property.statusDetail && (
                <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-gold border border-gold/30 bg-gold/5 px-3 py-1.5">
                  {property.statusDetail}
                </span>
              )}
              <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-cream-muted/60 border border-border/40 px-3 py-1.5">
                {property.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border/40">
            {displayMetrics.map((m, i) => (
              <div key={i} className="bg-charcoal-mid p-6 md:p-8 flex flex-col items-center text-center">
                <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/60 mb-2">{m.label}</div>
                <div className="font-sans text-sm text-cream font-light">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Snapshot */}
      {property.performanceSnapshot && property.performanceSnapshot.length > 0 && (
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <TrendingUp size={14} className="text-gold/60" />
              <span className="section-label">Performance Snapshot</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30">
              {property.performanceSnapshot.map((pm, i) => (
                <div key={i} className="bg-charcoal-mid p-8 flex flex-col items-center text-center">
                  <div className="font-display text-3xl md:text-4xl font-semibold text-gold mb-2">{pm.value}</div>
                  <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-cream mb-1">{pm.label}</div>
                  {pm.context && (
                    <div className="font-sans text-xs text-cream-muted/50 font-light">{pm.context}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Tour */}
      {property.videoUrl && (
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Video Tour</span>
            </div>
            <div className="relative w-full aspect-video bg-charcoal-mid border border-border/40 overflow-hidden">
              <iframe
                src={property.videoUrl}
                title={`${property.title} — Video Tour`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* Full Description */}
      <section className="section-pad bg-charcoal">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Overview</span>
          </div>
          <p className="font-sans text-sm md:text-base text-cream-muted leading-[1.8] font-light">
            {property.fullDescription || property.description}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-charcoal-mid">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="divider-gold" />
            <span className="section-label">Key Highlights</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {property.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 bg-charcoal border border-border/40 p-6">
                <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 shrink-0" />
                <span className="font-sans text-sm text-cream-muted font-light leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {property.timeline && property.timeline.length > 0 && (
        <section className="section-pad bg-charcoal">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="divider-gold" />
              <span className="section-label">Execution Timeline</span>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border/40" />
              <div className="space-y-8">
                {property.timeline.map((item, i) => (
                  <div key={i} className="relative flex items-start gap-8 pl-16">
                    <div className="absolute left-4 top-1 w-4 h-4 border border-gold/40 bg-charcoal flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-gold/60" />
                    </div>
                    <div>
                      <div className="font-sans text-xs tracking-[0.15em] uppercase text-gold mb-1">{item.date}</div>
                      <p className="font-sans text-sm text-cream-muted font-light leading-[1.7]">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Press Coverage */}
      {relatedPress.length > 0 && (
        <section className="section-pad bg-charcoal-mid">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="divider-gold" />
              <span className="section-label">Press Coverage</span>
            </div>
            <div className="flex flex-col gap-px bg-border/30">
              {relatedPress.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-charcoal p-6 md:p-8 flex items-center justify-between hover:bg-charcoal/80 transition-all duration-300"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold border border-gold/30 bg-gold/5 px-2.5 py-1">
                        {item.category}
                      </span>
                      <span className="font-sans text-[10px] text-cream-muted/60">
                        {item.source} · {new Date(item.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <div className="font-sans text-sm text-cream font-light group-hover:text-gold transition-colors duration-300">
                      {item.headline}
                    </div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-cream-muted/40 group-hover:text-gold/60 transition-colors duration-300 shrink-0 ml-4"
                  />
                </a>
              ))}
            </div>
            <Link
              to="/press"
              className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.15em] uppercase text-gold/70 hover:text-gold transition-colors duration-300 mt-6"
            >
              Full Press & Public Record <ArrowRight size={10} />
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-charcoal-mid">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6 tracking-tight">
            Have a Similar Property?
          </h2>
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.8] mb-10">
            If you own a multifamily or mixed-use asset in Greater Boston, our principals would like to hear from you.
          </p>
          <Link
            to="/sell-your-property"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
          >
            Submit Your Property <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Other Properties */}
      {otherProperties.length > 0 && (
        <section className="section-pad bg-charcoal">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="divider-gold" />
              <span className="section-label">More from Our Portfolio</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProperties.map((cs) => (
                <Link
                  key={cs.slug}
                  to={`/portfolio/${cs.slug}`}
                  className="group bg-charcoal-mid border border-border/40 p-8 hover:border-gold/15 transition-all duration-500 shadow-card block"
                >
                  <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold/60 mb-3 block">
                    {cs.assetType}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                    {cs.title}
                  </h3>
                  <p className="font-sans text-xs text-cream-muted/60 font-light">
                    {cs.location} &middot; {cs.units} Units &middot; {cs.strategy}
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
