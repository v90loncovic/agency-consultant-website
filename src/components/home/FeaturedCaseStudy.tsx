import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredCaseStudy } from "@/config/siteConfig";
import { useBookCall } from "@/contexts/BookCallContext";
import caseStudyImage from "@/assets/case-study-dashboard.jpg";

export function FeaturedCaseStudy() {
  const { openBookCall } = useBookCall();

  return (
    <section className="py-28 section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm uppercase tracking-widest text-primary-foreground/50 mb-6 block">
              {featuredCaseStudy.label}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-8 leading-tight">
              {featuredCaseStudy.title}
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10">
              {featuredCaseStudy.description}
            </p>
            <div className="flex flex-wrap gap-10 mb-12">
              {featuredCaseStudy.metrics.map((metric) => (
                <div key={metric.label}>
                  <span className="text-4xl md:text-5xl font-display font-semibold text-accent">
                    {metric.value}
                  </span>
                  <p className="text-sm text-primary-foreground/50 mt-2 uppercase tracking-wide">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <Button 
              variant="accent" 
              size="lg"
              asChild 
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link to={featuredCaseStudy.ctaHref}>
                {featuredCaseStudy.ctaLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative opacity-0 animate-fade-up animation-delay-200" style={{ animationFillMode: "forwards" }}>
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-xl" />
            <img
              src={caseStudyImage}
              alt="Analytics dashboard showing growth metrics"
              className="relative rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
