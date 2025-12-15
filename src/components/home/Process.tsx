import { process } from "@/config/siteConfig";

export function Process() {
  return (
    <section className="py-28 section-padding">
      <div className="container-wide">
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-5">
            {process.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {process.steps.map((step, index) => (
            <div
              key={step.number}
              className="relative opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              <span className="text-7xl md:text-8xl font-display font-semibold text-muted/60">
                {step.number}
              </span>
              <h3 className="text-xl font-display font-medium text-foreground mt-4 mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < process.steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px bg-border/60 -translate-x-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
