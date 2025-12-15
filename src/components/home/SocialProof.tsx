const logos = [
  { name: "Stripe", svg: "STRIPE" },
  { name: "Notion", svg: "NOTION" },
  { name: "Figma", svg: "FIGMA" },
  { name: "Linear", svg: "LINEAR" },
  { name: "Vercel", svg: "VERCEL" },
  { name: "Framer", svg: "FRAMER" },
];

export function SocialProof() {
  return (
    <section className="py-16 section-padding border-t border-border">
      <div className="container-wide">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-10">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-muted-foreground/40 hover:text-muted-foreground transition-colors font-display text-xl font-semibold tracking-tight"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
