import { CheckCircle } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import PropertySubmissionForm from "@/components/forms/PropertySubmissionForm";
import PrivacyNotice from "@/components/forms/PrivacyNotice";
import FAQSection from "@/components/FAQSection";
import { PAGE_META } from "@/lib/seo/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Who reviews my submission?",
    answer: "Every submission is reviewed personally by Patrick W. Barrett III and Tim Johnson, CPM — the principals of Barrett & Johnson. No brokers, no committees.",
  },
  {
    question: "Is my information confidential?",
    answer: "Absolutely. Your property details are shared only with our principals. We never list, broker, or disclose your information to third parties.",
  },
  {
    question: "What types of properties do you acquire?",
    answer: "We focus on 15-150 unit multifamily and mixed-use (residential + retail) assets in Greater Boston. We consider both stabilized and value-add opportunities.",
  },
  {
    question: "How quickly will I receive a response?",
    answer: "We respond to all submissions within 48 business hours. For properties that match our criteria, we typically schedule an initial conversation within the first week.",
  },
  {
    question: "Do I need a broker to work with you?",
    answer: "No. We are direct buyers and prefer working directly with owners. This eliminates broker fees and allows for a more efficient, confidential process.",
  },
];

const trustSignals = [
  "Direct conversation with Patrick or Tim",
  "All submissions are confidential and encrypted",
  "No obligation — explore your options",
  "Response within 48 business hours",
  "No broker fees or commissions",
  "15+ years of hands-on ownership experience",
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
            { name: "Sell Your Property", url: "/sell-your-property" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-8 pb-20 bg-charcoal" ref={sectionRef}>
        <div className="container mx-auto text-center max-w-3xl" data-reveal>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Confidential Submission</span>
            <div className="divider-gold" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight mb-6">
            Sell Your Property
            <br />
            <span className="text-gold italic">Confidentially</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-cream-muted leading-[1.8] font-light max-w-xl mx-auto">
            Are you an owner considering a sale or joint venture? We are direct buyers — no brokers, no committees. Patrick and Tim review every submission personally.
          </p>
        </div>
      </section>

      {/* Trust Signals + Form */}
      <section className="section-pad bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Trust Signals */}
            <div className="lg:sticky lg:top-32">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-cream mb-8 tracking-tight">
                Why Work With Us
              </h2>
              <div className="flex flex-col gap-4 mb-10">
                {trustSignals.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={13} className="text-gold/60 shrink-0" />
                    <span className="font-sans text-sm text-cream-muted/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
              <PrivacyNotice />
            </div>

            {/* Form */}
            <PropertySubmissionForm variant="full" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions"
        label="Seller FAQ"
      />

      {/* Privacy Statement */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm text-cream-muted/60 font-light leading-[1.8]">
            Barrett & Johnson takes your privacy seriously. All property submissions are reviewed exclusively by our principals — Patrick W. Barrett III and Tim Johnson, CPM. Your information is never shared with brokers, listed publicly, or disclosed to third parties. By submitting, you acknowledge that Barrett & Johnson may contact you regarding your property.
          </p>
        </div>
      </section>
    </>
  );
}
