import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/config/siteConfig";

export function ServicesOverview() {
  return (
    <section className="py-28 section-padding bg-secondary">
      <div className="container-wide">
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-5">
            What we do
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end capabilities designed to help you win in competitive markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background p-8 lg:p-10 rounded-xl border border-border/50 card-hover group opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
                <service.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-display font-medium text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-foreground font-medium link-underline text-lg"
          >
            Explore all services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
