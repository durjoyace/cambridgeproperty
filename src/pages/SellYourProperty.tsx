import { CheckCircle, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import PropertySubmissionForm from "@/components/forms/PropertySubmissionForm";
import PrivacyNotice from "@/components/forms/PrivacyNotice";
import FAQSection from "@/components/FAQSection";
import { PAGE_META } from "@/lib/seo/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PageHeader } from "@/components/brand/PageHeader";

const acquisitionCriteria = [
  { label: "Asset type", value: "Multifamily · mixed-use · urban retail · specialty commercial" },
  { label: "Geography", value: "Boston–NYC corridor, with particular focus on Massachusetts and Rhode Island" },
  { label: "Transaction size", value: "$5M – $75M equity, flexible for strategic portfolios" },
  { label: "Strategy", value: "Stabilized, value-add, adaptive reuse, recapitalization, sale-leaseback" },
  { label: "Structure", value: "Direct buyer. Deal-by-deal. GP capital in every transaction" },
  { label: "Response", value: "48 business hours, yes or no" },
];

const faqs = [
  {
    question: "Who reviews my submission?",
    answer:
      "Every submission is read by a principal — Patrick Barrett or Timothy Johnson. No analysts, no brokers, no investment committee lag.",
  },
  {
    question: "Is my information confidential?",
    answer:
      "Yes. Submissions go to the principals only. We never list, broker, forward, or aggregate property information. Your file is held with the same discretion we would want for our own property.",
  },
  {
    question: "What are you actually buying?",
    answer:
      "Multifamily, mixed-use, urban retail, selective adaptive reuse, and specialty commercial (self-storage, last-mile industrial). We consider both stabilized and value-add opportunities, and we weight toward deals where the numbers are disciplined and the basis is right.",
  },
  {
    question: "How quickly do you move?",
    answer:
      "48 business hours to a yes or no. For deals that match, we schedule a principal-to-principal conversation within the first week. We underwrite quickly because we're not waiting on a committee.",
  },
  {
    question: "Do I need a broker?",
    answer:
      "No. We prefer working directly with owners — it eliminates broker fees and keeps the process confidential. If you already have a broker engaged, we will work through them.",
  },
];

export default function SellYourProperty() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        {...PAGE_META.sellYourProperty}
        schema={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Direct Acquisition", url: "/sell-your-property" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-20 bg-paper" ref={sectionRef}>
        <div className="container mx-auto px-6 md:px-12" data-reveal>
          <PageHeader
            label="Direct Acquisition"
            descriptor="Submit a property"
          />

          <div className="max-w-4xl">
            <p className="font-serif italic text-base md:text-lg text-brass mb-6">
              For owners with a property to bring
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-ink tracking-tight mb-6">
              Submit a property.
              <br />
              <em className="text-brass font-serif italic">We will read it.</em>
            </h1>
            <p className="font-serif text-lg md:text-xl leading-[1.7] text-ink/85 max-w-2xl">
              Thane &amp; Reeve buys direct. No committees, no investment-committee lag,
              no brokers unless you want one. Principals evaluate every opportunity
              personally.
            </p>
          </div>
        </div>
      </section>

      {/* Criteria + form */}
      <section className="bg-paper-warm py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div>
              <p className="font-serif italic text-base md:text-lg text-brass mb-6">
                Our criteria
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4 tracking-tight leading-[1.2]">
                What we underwrite.
              </h2>
              <p className="font-serif text-lg text-ink/85 leading-[1.7] mb-10 max-w-md">
                We move fast on opportunities that match the thesis. If your property
                fits the parameters below, expect a direct conversation with a
                principal.
              </p>

              <div className="border-t border-ink/15 mb-10">
                {acquisitionCriteria.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-ink/15 py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                  >
                    <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-ink/55 w-36 shrink-0">
                      {item.label}
                    </span>
                    <span className="font-serif italic text-ink/85 text-base leading-[1.6]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-paper border-l-2 border-brass p-6">
                <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-brass mb-4">
                  Reach a principal
                </p>
                <a
                  href="mailto:acquisitions@thaneandreeve.com"
                  className="flex items-center gap-4 group"
                >
                  <Mail size={16} className="text-brass" />
                  <div>
                    <div className="font-serif italic text-ink text-lg group-hover:text-brass transition-colors">
                      acquisitions@thaneandreeve.com
                    </div>
                    <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink/55">
                      Read only by the partners
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <p className="font-serif italic text-base md:text-lg text-brass mb-6">
                  Confidential submission
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 tracking-tight leading-[1.2]">
                  Bring the property.
                </h2>
                <div className="flex flex-col gap-3 mb-6">
                  {[
                    "Read only by Patrick and Timothy",
                    "Encrypted in transit, never forwarded",
                    "No obligation, no broker fees",
                    "48-hour response — yes or no",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={14} className="text-brass shrink-0" />
                      <span className="font-sans text-sm text-ink/70 font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <PropertySubmissionForm variant="full" />
              <div className="mt-6">
                <PrivacyNotice />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Questions from owners"
        label="Acquisition FAQ"
      />

      {/* Bottom CTA */}
      <section className="py-20 bg-ink">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <p className="font-serif italic text-lg text-paper/75 leading-[1.7] mb-8">
            Thane &amp; Reeve takes confidentiality seriously. Property submissions are
            read by the partners only — never listed, never forwarded.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.22em] uppercase text-paper border-b border-paper/30 pb-1 hover:border-brass-light hover:text-brass-light transition-colors duration-300"
          >
            About the partners <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
