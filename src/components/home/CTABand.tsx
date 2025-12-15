import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ctaSections, navigation } from "@/config/siteConfig";

export function CTABand() {
  return (
    <section className="py-24 section-padding">
      <div className="container-wide">
        <div className="bg-primary rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-primary-foreground mb-6">
            {ctaSections.home.title}
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            {ctaSections.home.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link to={navigation.cta.href}>
                {navigation.cta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
