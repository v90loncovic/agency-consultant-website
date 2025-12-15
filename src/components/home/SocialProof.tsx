import { socialProof } from "@/config/siteConfig";

export function SocialProof() {
  return (
    <section className="py-20 section-padding border-t border-border relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 pointer-events-none" />
      
      <div className="container-wide relative">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-12">
          {socialProof.title}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {socialProof.logos.map((logo) => (
            <div
              key={logo.name}
              className="text-foreground/30 hover:text-foreground/60 transition-colors duration-300 font-display text-xl font-semibold tracking-tight"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
