import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/siteConfig";

export function FAQ() {
  return (
    <section className="py-28 section-padding bg-secondary">
      <div className="container-wide">
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-5">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl px-8 border border-border/70 shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-6 text-base lg:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
