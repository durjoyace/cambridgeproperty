import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import PropertySubmissionForm from "@/components/forms/PropertySubmissionForm";
import PrivacyNotice from "@/components/forms/PrivacyNotice";
import FAQSection from "@/components/FAQSection";
import { PAGE_META } from "@/lib/seo/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const acquisitionCriteria = [
  { label: "Asset Type", value: "Multifamily, Mixed-Use, Urban Retail, Hotel" },
  { label: "Geography", value: "Cambridge, Somerville, Inner Greater Boston — expanding to select U.S. markets" },
  { label: "Transaction Size", value: "$5M — $50M" },
  { label: "Unit Count", value: "15 — 150 units, with flexibility for strategic portfolios" },
  { label: "Structure", value: "Direct buyer. No investment committee, no intermediary approval" },
  { label: "Response Time", value: "24 hours for qualified opportunities" },
];

const faqs = [
  {
    question: "Who reviews my submission?",
    answer: "Every submission is reviewed personally by Patrick W. Barrett III and Tim Johnson, CPM — the principals of Barrett & Johnson. No analysts, no brokers, no committees.",
  },
  {
    question: "Is my information confidential?",
    answer: "Absolutely. Your property details are shared only with our principals. We never list, broker, or disclose your information to third parties.",
  },
  {
    question: "What types of properties do you acquire?",
    answer: "Multifamily, mixed-use, urban retail, and hotel assets in the $5M–$50M range. We consider both stabilized and value-add opportunities in entitlement-complex markets where direct sourcing and political capital create structural advantages.",
  },
  {
    question: "How quickly will I receive a response?",
    answer: "24 hours for opportunities that meet our acquisition criteria. For properties that match, we typically schedule a principal-to-principal conversation within the first week.",
  },
  {
    question: "Do I need a broker to work with you?",
    answer: "No. We are direct principals and prefer working directly with owners. This eliminates broker fees and allows for a more efficient, confidential process. We can also work with your broker if one is already engaged.",
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
      <section className="pt-8 pb-20 bg-charcoal" ref={sectionRef}>
        <div className="container mx-auto" data-reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Direct Acquisition</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Submit a
              <br />
              <span className="text-gold italic">Property</span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
              We are direct principals — not a fund, not a broker. Patrick and Tim
              evaluate every opportunity personally and respond within 24 hours.
              No committees, no approval chains.
            </p>
          </div>
        </div>
      </section>

      {/* Acquisition Criteria Table */}
      <section className="section-pad bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — criteria */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-cream mb-3 tracking-tight">
                Our Acquisition Criteria
              </h2>
              <p className="font-sans text-sm text-cream-muted/60 font-light leading-[1.7] mb-10 max-w-md">
                We move fast on opportunities that match our thesis. If your property
                fits the parameters below, expect a direct conversation with a principal.
              </p>

              <div className="flex flex-col gap-px bg-border/30 mb-10">
                {acquisitionCriteria.map((item) => (
                  <div key={item.label} className="bg-charcoal p-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 w-32 shrink-0">
                      {item.label}
                    </span>
                    <span className="font-sans text-sm text-cream font-light leading-[1.6]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct contact — Patrick's phone prominent */}
              <div className="bg-charcoal border border-gold/15 p-8">
                <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-5">
                  Reach a Principal Directly
                </div>
                <div className="flex flex-col gap-4">
                  <a href="tel:6177783521" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                      <Phone size={16} className="text-gold/60 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <div className="font-sans text-sm text-cream font-medium group-hover:text-gold transition-colors">
                        (617) 778-3521
                      </div>
                      <div className="font-sans text-[10px] text-cream-muted/40">
                        Patrick W. Barrett III — Direct Line
                      </div>
                    </div>
                  </a>
                  <a href="mailto:acquisitions@barrettjohnson.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                      <Mail size={16} className="text-gold/60 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <div className="font-sans text-sm text-cream font-medium group-hover:text-gold transition-colors">
                        acquisitions@barrettjohnson.com
                      </div>
                      <div className="font-sans text-[10px] text-cream-muted/40">
                        Reviewed by principals only
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <div className="mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-cream mb-3 tracking-tight">
                  Confidential Submission
                </h2>
                <div className="flex flex-col gap-3 mb-6">
                  {[
                    "Reviewed exclusively by Patrick and Tim",
                    "All submissions encrypted and confidential",
                    "No obligation — no broker fees",
                    "24-hour response for qualified opportunities",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={12} className="text-gold/50 shrink-0" />
                      <span className="font-sans text-xs text-cream-muted/60 font-light">{item}</span>
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

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Acquisition FAQ"
        label="Common Questions"
      />

      {/* Bottom CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto text-center max-w-2xl">
          <p className="font-sans text-sm text-cream-muted/50 font-light leading-[1.8] mb-8">
            Barrett & Johnson takes confidentiality seriously. All property submissions
            are reviewed exclusively by our principals. Your information is never shared
            with brokers, listed publicly, or disclosed to third parties.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-gold/60 hover:text-gold transition-colors duration-300"
          >
            About Our Principals <ArrowRight size={12} />
          </Link>
        </div>
      </section>
    </>
  );
}
