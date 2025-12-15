import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of companies do you work with?",
    answer: "We partner with growth-stage startups, established mid-market companies, and enterprise organizations across B2B technology, fintech, healthcare, and professional services. Our sweet spot is companies ready to invest seriously in their brand and digital presence.",
  },
  {
    question: "How long does a typical engagement last?",
    answer: "Most strategic engagements run 3-6 months depending on scope. Brand strategy and identity projects typically take 8-12 weeks. Web development projects range from 6-16 weeks. We also offer ongoing retainer relationships for companies seeking continuous partnership.",
  },
  {
    question: "What's your pricing model?",
    answer: "We price based on value and scope, not hours. After our discovery process, we provide fixed-fee proposals so you have complete clarity on investment. Our engagements typically start at $50K for focused projects and scale based on complexity.",
  },
  {
    question: "Do you work with clients outside the US?",
    answer: "Absolutely. We work with companies globally and have experience navigating cross-cultural branding challenges. Our team is distributed, allowing us to support clients across time zones effectively.",
  },
  {
    question: "What makes GoLive different from other agencies?",
    answer: "We combine strategic rigor with creative excellence. Unlike pure creative shops, we ground every decision in business outcomes. Unlike consultancies, we execute beautifully. Our senior team leads every engagement—no bait-and-switch with junior staff.",
  },
  {
    question: "How do we get started?",
    answer: "Start with a discovery call. We'll learn about your business, discuss your goals, and assess fit. If there's mutual alignment, we'll propose a scope and timeline. No lengthy RFP processes required—we move fast.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 section-padding bg-secondary">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
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
                className="bg-background rounded-lg px-6 border border-border"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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
