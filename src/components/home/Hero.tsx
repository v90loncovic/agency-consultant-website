import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 section-padding">
      <div className="container-wide">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] tracking-tight text-foreground opacity-0 animate-fade-up">
            We build brands that
            <br />
            <span className="text-gradient">move markets.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed opacity-0 animate-fade-up animation-delay-200">
            GoLive is a strategic creative agency for ambitious companies ready to transform their digital presence and capture market leadership.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up animation-delay-300">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
