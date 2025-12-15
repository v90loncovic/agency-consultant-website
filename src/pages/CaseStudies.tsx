import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const caseStudies = [
  {
    client: "Vertex Analytics",
    industry: "Enterprise Software",
    title: "Scaling to $50M ARR with a Complete Brand Transformation",
    description: "We repositioned Vertex from a generic analytics tool to the definitive enterprise platform, driving 340% growth in qualified leads.",
    metrics: [
      { label: "Lead increase", value: "340%" },
      { label: "Conversion rate", value: "2.4x" },
      { label: "ARR achieved", value: "$50M" },
    ],
    tags: ["Brand Strategy", "Web Development", "Growth Marketing"],
    featured: true,
  },
  {
    client: "Streamline",
    industry: "Fintech",
    title: "Launching a Fintech Disruptor in 90 Days",
    description: "From concept to market-ready brand, we helped Streamline enter a crowded market with a distinctive presence.",
    metrics: [
      { label: "Time to market", value: "90 days" },
      { label: "Seed funding", value: "$12M" },
      { label: "User signups", value: "15K+" },
    ],
    tags: ["Brand Strategy", "Visual Identity", "Product Design"],
    featured: false,
  },
  {
    client: "DataPulse",
    industry: "Healthcare Tech",
    title: "Redefining Healthcare Data for Enterprise Buyers",
    description: "A complete rebrand and digital overhaul that positioned DataPulse as the trusted partner for healthcare organizations.",
    metrics: [
      { label: "Pipeline growth", value: "280%" },
      { label: "Sales cycle", value: "-40%" },
      { label: "Contract value", value: "2x" },
    ],
    tags: ["Brand Strategy", "Web Development", "Content Strategy"],
    featured: false,
  },
  {
    client: "Nexus",
    industry: "B2B SaaS",
    title: "Building a Category-Defining Brand from Scratch",
    description: "We partnered with Nexus from day one to create a brand that would define a new category in workflow automation.",
    metrics: [
      { label: "Brand awareness", value: "+450%" },
      { label: "Website traffic", value: "8x" },
      { label: "Demo requests", value: "320%" },
    ],
    tags: ["Brand Strategy", "Visual Identity", "Web Development"],
    featured: false,
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-6 opacity-0 animate-fade-up">
              Work that delivers results
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              We measure success by the growth of our partners. Explore how we've helped ambitious companies transform their brands and accelerate their trajectory.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 section-padding">
        <div className="container-wide">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <article
                key={study.client}
                className={`rounded-2xl overflow-hidden border border-border card-hover opacity-0 animate-fade-up ${
                  study.featured ? "bg-primary text-primary-foreground" : "bg-card"
                }`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`text-sm ${study.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                        {study.client}
                      </span>
                      <span className={`text-sm ${study.featured ? "text-primary-foreground/40" : "text-muted-foreground/40"}`}>•</span>
                      <span className={`text-sm ${study.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                        {study.industry}
                      </span>
                    </div>
                    <h2 className={`text-2xl md:text-3xl font-display font-medium mb-4 ${
                      study.featured ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      {study.title}
                    </h2>
                    <p className={`text-lg leading-relaxed mb-8 ${
                      study.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}>
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            study.featured
                              ? "bg-primary-foreground/10 text-primary-foreground"
                              : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant={study.featured ? "accent" : "outline"}
                      asChild
                    >
                      <Link to={`/case-studies`}>
                        Read case study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${
                    study.featured ? "bg-primary-foreground/5" : "bg-secondary/50"
                  }`}>
                    <div className="grid grid-cols-3 gap-6">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <span className={`text-2xl md:text-3xl font-display font-medium ${
                            study.featured ? "text-primary-foreground" : "text-foreground"
                          }`}>
                            {metric.value}
                          </span>
                          <p className={`text-sm mt-1 ${
                            study.featured ? "text-primary-foreground/50" : "text-muted-foreground"
                          }`}>
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-padding">
        <div className="container-wide">
          <div className="bg-secondary rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
              Ready to be our next success story?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
