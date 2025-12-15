import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/config/siteConfig";

export function ServicesOverview() {
  return (
    <section className="py-24 section-padding bg-secondary">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
            What we do
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end capabilities designed to help you win in competitive markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background p-8 rounded-lg card-hover group opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <service.icon className="h-8 w-8 text-accent mb-6" />
              <h3 className="text-xl font-display font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-foreground font-medium link-underline"
          >
            Explore all services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
