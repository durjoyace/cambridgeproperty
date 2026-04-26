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
import { PageHeader } from "@/components/brand/PageHeader";

const caseStudyFaqs = [
  {
    question: "What is the firm's acquisition strategy?",
    answer:
      "We target multifamily, mixed-use, urban retail, and specialty commercial across the Northeast, and we underwrite to hold. Basis discipline and downside protection come first; upside is earned through operational improvements and entitlement value creation.",
  },
  {
    question: "What size deals does the firm underwrite?",
    answer:
      "Generally $5M–$75M of equity, with flexibility for strategic portfolios. This size range is where our vertically-integrated, principal-led approach compounds — small enough to be underwritten personally, large enough for meaningful operational economics.",
  },
  {
    question: "How does Thane & Reeve create value?",
    answer:
      "Three vectors. Operational alpha — in-house management, sub-four-hour maintenance response, institutional reporting. Entitlement value creation — zoning, regulatory navigation, and the political capital to see a development through. Disciplined capital improvements — targeted capex to unlock embedded rent growth.",
  },
];

const stats = [
  { value: "$45M", label: "Ground-up development" },
  { value: "$37.75M", label: "Institutional financing" },
  { value: "75+", label: "Doors held &amp; managed" },
  { value: "Active", label: "Pipeline in Northeast" },
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
            })),
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Case Studies", url: "/case-studies" },
          ]),
          faqSchema(caseStudyFaqs),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-20 bg-paper" ref={sectionRef}>
        <div className="container mx-auto px-6 md:px-12" data-reveal>
          <PageHeader
            label="Case Studies"
            descriptor="Selected work, written up"
          />

          <div className="max-w-4xl">
            <p className="font-serif italic text-base md:text-lg text-brass mb-6">
              Selected work
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-ink tracking-tight mb-6">
              The underwriting, the execution, the judgment call.
            </h1>
            <p className="font-sans text-lg md:text-xl leading-[1.7] text-ink/70 font-light max-w-2xl">
              These are the decisions we'd be proud to be judged on later. Each
              asset sourced directly, entitled through complex municipal process,
              and operated as a long-term hold.
            </p>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-paper">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
            {stats.map((s, i) => (
              <div key={i} className="bg-paper p-8 md:p-10 text-center">
                <div
                  className="font-serif text-2xl md:text-3xl text-ink mb-2 tracking-tight"
                  dangerouslySetInnerHTML={{ __html: s.value }}
                />
                <div
                  className="font-sans text-[10px] tracking-[0.22em] uppercase text-ink/55"
                  dangerouslySetInnerHTML={{ __html: s.label }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-paper-warm py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={caseStudyFaqs} label="Investment strategy" title="Questions from partners" />

      {/* CTA */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-paper mb-6 tracking-tight">
            Have a deal to bring?
          </h2>
          <p className="font-serif italic text-paper/75 text-lg leading-[1.7] mb-10">
            We move quickly on opportunities that match the thesis. Submit
            directly to the partners — 48-hour response, yes or no.
          </p>
          <Link
            to="/sell-your-property"
            className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 bg-paper text-ink hover:bg-brass hover:text-paper transition-colors duration-300"
          >
            Direct acquisition <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
