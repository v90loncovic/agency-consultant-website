const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep into your business, market, and audience to uncover insights that inform strategy.",
  },
  {
    number: "02",
    title: "Design",
    description: "We craft solutions that balance creativity with commercial objectives, iterating until it's right.",
  },
  {
    number: "03",
    title: "Deliver",
    description: "We launch, measure, and optimize—ensuring your investment generates measurable returns.",
  },
];

export function Process() {
  return (
    <section className="py-24 section-padding">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
            Our process
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven methodology refined over hundreds of successful engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {steps.map((step, index) => (
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
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
