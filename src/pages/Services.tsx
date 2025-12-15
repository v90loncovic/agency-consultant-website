import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Palette, Code, BarChart3, Rocket, Users, Check } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "Define your market position and craft a narrative that resonates with your ideal customers.",
    features: [
      "Competitive analysis & market positioning",
      "Brand architecture & messaging framework",
      "Value proposition development",
      "Customer persona development",
    ],
  },
  {
    icon: Palette,
    title: "Visual Identity",
    description: "Create distinctive brand systems that communicate your values at every touchpoint.",
    features: [
      "Logo design & visual identity systems",
      "Brand guidelines & asset libraries",
      "Marketing collateral design",
      "Packaging & environmental design",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Build high-performance websites and applications that convert visitors into customers.",
    features: [
      "Custom website design & development",
      "E-commerce platforms",
      "Web application development",
      "CMS implementation & optimization",
    ],
  },
  {
    icon: BarChart3,
    title: "Growth Marketing",
    description: "Data-driven campaigns that accelerate customer acquisition and retention.",
    features: [
      "Paid media strategy & management",
      "SEO & content marketing",
      "Marketing automation",
      "Analytics & attribution modeling",
    ],
  },
  {
    icon: Rocket,
    title: "Product Design",
    description: "User-centered design that creates intuitive digital experiences people love.",
    features: [
      "UX research & strategy",
      "UI design & prototyping",
      "Design systems",
      "Usability testing",
    ],
  },
  {
    icon: Users,
    title: "Content Strategy",
    description: "Develop compelling content that builds authority and drives organic growth.",
    features: [
      "Content audit & strategy",
      "Editorial planning",
      "Copywriting & storytelling",
      "Video & multimedia production",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-6 opacity-0 animate-fade-up">
              Services built for growth
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              End-to-end capabilities designed to help ambitious companies capture market leadership and accelerate growth.
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
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Book a free strategy call and we'll help you identify the highest-impact opportunities for your business.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Book a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
