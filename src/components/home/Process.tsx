import { process } from "@/config/siteConfig";

export function Process() {
  return (
    <section className="py-24 section-padding">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
            {process.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {process.steps.map((step, index) => (
            <div
              key={step.number}
              className="relative opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              <span className="text-6xl md:text-7xl font-display font-medium text-muted/80">
                {step.number}
              </span>
              <h3 className="text-xl font-display font-medium text-foreground mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
              {index < process.steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
