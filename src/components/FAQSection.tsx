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
  title = "Questions from partners",
  label = "Notes",
}: Props) {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="bg-paper-warm py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16" data-reveal>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-ink/55 mb-4">
              {label}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.2] tracking-tight">
              {title}
            </h2>
          </div>
          <div data-reveal>
            <Accordion type="single" collapsible className="space-y-0 border-t border-ink/15">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-ink/15 px-0"
                >
                  <AccordionTrigger className="font-serif text-lg md:text-xl text-ink font-normal py-6 hover:text-brass hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-base text-ink/75 font-light leading-[1.8] pb-6 pr-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
