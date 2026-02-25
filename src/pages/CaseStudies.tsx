import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import FAQSection from "@/components/FAQSection";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { caseStudies } from "@/lib/data/case-studies";
import { PAGE_META } from "@/lib/seo/metadata";
import { itemListSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { COMPANY_STATS } from "@/lib/data/stats";

const caseStudyFaqs = [
  {
    question: "What is your acquisition strategy?",
    answer: "We target multifamily, mixed-use, and urban retail assets in the $5M–$50M range across entitlement-complex markets. Every asset is underwritten to hold — basis discipline and downside protection before pursuing upside through operational improvements and entitlement value creation.",
  },
  {
    question: "What size properties do you target?",
    answer: "15–150 units, with flexibility for strategic portfolios. This range allows us to apply our vertically integrated, principal-led approach while achieving meaningful operational economies.",
  },
  {
    question: "How do you create value?",
    answer: "Three vectors: operational alpha (sub-4-hour maintenance, tenant retention, AppFolio enterprise systems), entitlement value creation (zoning expertise, regulatory navigation, political capital), and disciplined capital improvements targeted to unlock embedded rent growth.",
  },
];

const stats = [
  { value: "$45M", label: "Ground-Up Development" },
  { value: "$37.75M", label: "Financing Secured" },
  { value: String(COMPANY_STATS.totalDoors), label: "Doors Owned & Operated" },
  { value: "$100M+", label: "Active Pipeline" },
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
              url: `/portfolio/${cs.slug}`,
              description: cs.description,
            }))
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Development Portfolio", url: "/case-studies" },
          ]),
          faqSchema(caseStudyFaqs),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-8 pb-20 bg-charcoal" ref={sectionRef}>
        <div className="container mx-auto" data-reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Development Portfolio</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Active
              <br />
              <span className="text-gold">Development</span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
              Each asset sourced directly, entitled through complex municipal process,
              and operated as a long-term hold. No intermediaries, no investment
              committee lag.
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
                <div className="font-display text-3xl md:text-4xl font-semibold text-gold mb-2 tracking-tight">{s.value}</div>
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

      {/* FAQ */}
      <FAQSection faqs={caseStudyFaqs} label="Investment Strategy" />

      {/* CTA */}
      <section className="py-20 bg-charcoal-mid">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6 tracking-tight">
            Have an Opportunity?
          </h2>
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.8] mb-10">
            We move fast on opportunities that match our thesis. Submit a property
            directly to our principals — 24-hour response for qualified opportunities.
          </p>
          <Link
            to="/sell-your-property"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold"
          >
            Direct Acquisition <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
