import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredCaseStudy } from "@/config/siteConfig";

export function FeaturedCaseStudy() {
  return (
    <section className="py-24 section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm uppercase tracking-widest text-primary-foreground/50 mb-4 block">
              {featuredCaseStudy.label}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-6">
              {featuredCaseStudy.title}
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              {featuredCaseStudy.description}
            </p>
            <div className="flex flex-wrap gap-8 mb-10">
              {featuredCaseStudy.metrics.map((metric) => (
                <div key={metric.label}>
                  <span className="text-3xl font-display font-medium">{metric.value}</span>
                  <p className="text-sm text-primary-foreground/50 mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
            <Button variant="accent" asChild>
              <Link to={featuredCaseStudy.ctaHref}>
                {featuredCaseStudy.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground/20 font-display text-2xl">Case Study Preview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
