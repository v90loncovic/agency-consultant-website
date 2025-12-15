import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { gettingStarted, ctaSections, navigation } from "@/config/siteConfig";
import { useBookCall } from "@/contexts/BookCallContext";

const GettingStarted = () => {
  const { openBookCall } = useBookCall();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-6 opacity-0 animate-fade-up">
              {gettingStarted.headline}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              {gettingStarted.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 section-padding border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl font-display font-medium text-foreground mb-12">
            {gettingStarted.process.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gettingStarted.process.steps.map((step, index) => (
              <div
                key={step.title}
                className="p-6 rounded-lg border border-border bg-card opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <step.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-lg font-display font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Need */}
      <section className="py-24 section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-medium text-foreground mb-6">
                {gettingStarted.expectations.fromClient.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {gettingStarted.expectations.fromClient.subtitle}
              </p>
              <ul className="space-y-4">
                {gettingStarted.expectations.fromClient.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-display font-medium text-foreground mb-6">
                {gettingStarted.expectations.fromUs.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {gettingStarted.expectations.fromUs.subtitle}
              </p>
              <ul className="space-y-4">
                {gettingStarted.expectations.fromUs.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 section-padding">
        <div className="container-wide">
          <h2 className="text-3xl font-display font-medium text-foreground mb-12">
            Common questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gettingStarted.faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            {ctaSections.gettingStarted.title}
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            {ctaSections.gettingStarted.description}
          </p>
          <Button variant="accent" size="lg" onClick={openBookCall}>
            {navigation.cta.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GettingStarted;
