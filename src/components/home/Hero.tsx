import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { hero } from "@/config/siteConfig";
import { useBookCall } from "@/contexts/BookCallContext";
import { Link } from "react-router-dom";

export function Hero() {
  const { openBookCall } = useBookCall();

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 section-padding">
      <div className="container-wide">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] tracking-tight text-foreground opacity-0 animate-fade-up">
            {hero.headline}
            <br />
            <span className="text-gradient">{hero.headlineAccent}</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed opacity-0 animate-fade-up animation-delay-200">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-300">
            <Button variant="accent" size="lg" onClick={openBookCall}>
              {hero.primaryCta.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
