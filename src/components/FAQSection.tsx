import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
  title?: string;
  label?: string;
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  label = "FAQ",
}: Props) {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="section-pad bg-charcoal" ref={sectionRef}>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16" data-reveal>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">{label}</span>
            <div className="divider-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream tracking-tight">
            {title}
          </h2>
        </div>
        <div data-reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border/40 bg-charcoal-mid px-6 data-[state=open]:border-gold/20"
              >
                <AccordionTrigger className="font-sans text-sm text-cream font-medium py-5 hover:text-gold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-cream-muted/80 font-light leading-[1.8] pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
