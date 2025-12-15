import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Palette, Rocket, BarChart3, Code, Users } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "Define your market position and craft a narrative that resonates with your ideal customers.",
  },
  {
    icon: Palette,
    title: "Visual Identity",
    description: "Create distinctive brand systems that communicate your values at every touchpoint.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Build high-performance websites and applications that convert visitors into customers.",
  },
  {
    icon: BarChart3,
    title: "Growth Marketing",
    description: "Data-driven campaigns that accelerate customer acquisition and retention.",
  },
  {
    icon: Rocket,
    title: "Product Design",
    description: "User-centered design that creates intuitive digital experiences people love.",
  },
  {
    icon: Users,
    title: "Content Strategy",
    description: "Develop compelling content that builds authority and drives organic growth.",
  },
];

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
