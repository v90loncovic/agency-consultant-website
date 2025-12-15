import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { services, pageMeta, ctaSections, navigation } from "@/config/siteConfig";
import { useBookCall } from "@/contexts/BookCallContext";

const Services = () => {
  const { openBookCall } = useBookCall();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-6 opacity-0 animate-fade-up">
              {pageMeta.services.headline}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              {pageMeta.services.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 section-padding">
        <div className="container-wide">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-12 border-t border-border opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div>
                  <service.icon className="h-10 w-10 text-accent mb-6" />
                  <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
            {ctaSections.services.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            {ctaSections.services.description}
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

export default Services;
