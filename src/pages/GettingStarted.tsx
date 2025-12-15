import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileCode2 } from "lucide-react";
import { gettingStarted, ctaSections, navigation } from "@/config/siteConfig";
import { useBookCall } from "@/contexts/BookCallContext";

const GettingStarted = () => {
  const { openBookCall } = useBookCall();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-6 opacity-0 animate-fade-up">
              {gettingStarted.headline}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 opacity-0 animate-fade-up animation-delay-200">
              {gettingStarted.subheadline}
            </p>
            <div className="flex items-center gap-2 text-sm bg-muted/50 border border-border rounded-lg px-4 py-3 opacity-0 animate-fade-up animation-delay-300">
              <FileCode2 className="h-4 w-4 text-accent flex-shrink-0" />
              <code className="text-foreground font-mono">{gettingStarted.configPath}</code>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Sections */}
      <section className="py-16 section-padding border-t border-border">
        <div className="container-wide">
          <div className="space-y-16">
            {gettingStarted.sections.map((section, index) => (
              <div
                key={section.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className="h-6 w-6 text-accent" />
                    <h2 className="text-2xl font-display font-medium text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.description}
                  </p>
                  {section.tip && (
                    <p className="text-sm text-muted-foreground/80 italic">
                      💡 {section.tip}
                    </p>
                  )}
                </div>
                <div className="bg-muted/30 border border-border rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-foreground/90 font-mono whitespace-pre-wrap">
                    {section.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publish Checklist */}
      <section className="py-24 section-padding bg-secondary">
        <div className="container-wide">
          <h2 className="text-3xl font-display font-medium text-foreground mb-4">
            {gettingStarted.publishChecklist.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Run through this checklist before going live.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gettingStarted.publishChecklist.items.map((item, index) => (
              <div
                key={item.label}
                className="flex items-start gap-3 p-4 bg-background border border-border rounded-lg opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
              >
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
            {gettingStarted.footer.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            {gettingStarted.footer.description}
          </p>
          <Button variant="accent" size="lg" onClick={openBookCall}>
            {navigation.cta.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GettingStarted;
