import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { about, ctaSections, navigation } from "@/config/siteConfig";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-6 opacity-0 animate-fade-up">
              {about.headline}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              {about.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 section-padding border-t border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-medium text-foreground mb-6">
                {about.story.title}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {about.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="bg-secondary rounded-lg aspect-[4/3] flex items-center justify-center">
              <span className="text-muted-foreground font-display text-xl">Team Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
              {about.values.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {about.values.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {about.values.items.map((value, index) => (
              <div
                key={value.title}
                className="bg-background p-8 rounded-lg opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <h3 className="text-xl font-display font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
              {about.team.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {about.team.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.team.members.map((member, index) => (
              <div
                key={member.name}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Photo</span>
                </div>
                <h3 className="text-lg font-medium text-foreground">{member.name}</h3>
                <p className="text-accent text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            {ctaSections.about.title}
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            {ctaSections.about.description}
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
              <Link to={ctaSections.about.secondaryCta?.href || "/contact"}>
                {ctaSections.about.secondaryCta?.label || "Contact Us"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
