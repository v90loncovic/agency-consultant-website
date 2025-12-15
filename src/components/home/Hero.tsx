import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { hero } from "@/config/siteConfig";
import { useBookCall } from "@/contexts/BookCallContext";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-consulting.jpg";

export function Hero() {
  const { openBookCall } = useBookCall();

  return (
    <section className="min-h-screen flex items-center pt-28 pb-20 section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] tracking-tight text-foreground opacity-0 animate-fade-up">
              {hero.headline}
              <br />
              <span className="text-gradient">{hero.headlineAccent}</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              {hero.subheadline}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-300">
              <Button variant="accent" size="lg" onClick={openBookCall}>
                {hero.primaryCta.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
          <div className="relative opacity-0 animate-fade-up animation-delay-400 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl" />
              <img
                src={heroImage}
                alt="Consulting team collaborating in modern office"
                className="relative rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
