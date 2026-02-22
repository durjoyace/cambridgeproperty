import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { caseStudies } from "@/lib/data/case-studies";
import { PAGE_META } from "@/lib/seo/metadata";
import { itemListSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { COMPANY_STATS } from "@/lib/data/stats";

const stats = [
  { value: String(COMPANY_STATS.totalDoors), label: "Doors Owned & Managed" },
  { value: COMPANY_STATS.yearsExperience, label: "Years Experience" },
  { value: COMPANY_STATS.ownerOperated, label: "Owner-Operated" },
  { value: String(COMPANY_STATS.activeCaseStudies), label: "Active Case Studies" },
];

export default function CaseStudies() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        {...PAGE_META.caseStudies}
        schema={[
          itemListSchema(
            caseStudies.map((cs) => ({
              name: cs.title,
              url: `/case-studies#${cs.slug}`,
              description: cs.description,
            }))
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Case Studies", url: "/case-studies" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-8 pb-20 bg-charcoal" ref={sectionRef}>
        <div className="container mx-auto" data-reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Track Record</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Our Track
              <br />
              <span className="text-gold">Record</span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
              A growing portfolio of multifamily and mixed-use properties — each acquired, improved, and operated directly by Patrick and Tim.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40">
            {stats.map((s, i) => (
              <div key={i} className="bg-charcoal-mid p-8 md:p-10 text-center">
                <div className="font-display text-4xl md:text-5xl font-semibold text-gold mb-2 tracking-tight">{s.value}</div>
                <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-cream-muted/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="section-pad bg-charcoal">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal-mid">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6 tracking-tight">
            Have a Property to Discuss?
          </h2>
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.8] mb-10">
            We're always looking for our next acquisition. Submit your property confidentially and hear back from our principals within 48 hours.
          </p>
          <Link
            to="/sell-your-property"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold"
          >
            Sell Your Property <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
