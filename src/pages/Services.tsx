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
      <section className="pt-36 pb-20 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-8 opacity-0 animate-fade-up">
              {pageMeta.services.headline}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              {pageMeta.services.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 section-padding">
        <div className="container-wide">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start py-16 border-t border-border opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div>
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-8">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-foreground mb-5">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="lg:pt-8">
                  <ul className="space-y-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-foreground text-lg">{feature}</span>
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
      <section className="py-28 section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-6">
            {ctaSections.services.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            {ctaSections.services.description}
          </p>
          <Button variant="accent" size="lg" onClick={openBookCall} className="shadow-lg">
            {navigation.cta.label}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
