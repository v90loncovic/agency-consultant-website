import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Alexandra Chen",
    role: "Founder & CEO",
    bio: "Former McKinsey consultant with 15+ years building brands for Fortune 500 companies and high-growth startups.",
  },
  {
    name: "Marcus Williams",
    role: "Creative Director",
    bio: "Award-winning designer who's shaped visual identities for some of the world's most recognized technology brands.",
  },
  {
    name: "Sarah Okonkwo",
    role: "Head of Strategy",
    bio: "Brand strategist with a track record of positioning companies for successful exits and market leadership.",
  },
  {
    name: "David Park",
    role: "Technical Director",
    bio: "Engineering leader who's built and scaled digital products for companies from seed stage to IPO.",
  },
];

const values = [
  {
    title: "Excellence over everything",
    description: "We don't do 'good enough.' Every deliverable reflects our commitment to craft and quality.",
  },
  {
    title: "Results-obsessed",
    description: "Beautiful work is meaningless without business impact. We measure success by your growth.",
  },
  {
    title: "Radical honesty",
    description: "We'll tell you what you need to hear, not what you want to hear. Trust is built on truth.",
  },
  {
    title: "Long-term thinking",
    description: "We build brands and relationships that compound over time. No shortcuts, no quick fixes.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-6 opacity-0 animate-fade-up">
              We're GoLive
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              A strategic creative agency that helps ambitious companies build brands that capture markets. We combine deep strategic thinking with world-class execution.
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
                Our story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  GoLive was founded on a simple premise: the best brands are built at the intersection of strategy and creativity. Too often, companies choose between agencies that think well and agencies that design well.
                </p>
                <p>
                  We started GoLive to prove you don't have to choose. Our team combines deep business acumen with exceptional creative talent, delivering work that's both strategically sound and beautifully executed.
                </p>
                <p>
                  Since our founding, we've partnered with over 100 companies—from pre-seed startups to public enterprises—helping them clarify their positioning, strengthen their presence, and accelerate their growth.
                </p>
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
              What we believe
            </h2>
            <p className="text-muted-foreground text-lg">
              Our values guide every decision we make and every relationship we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
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
              Leadership team
            </h2>
            <p className="text-muted-foreground text-lg">
              Senior professionals who lead every engagement. No bait-and-switch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
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
            Want to work together?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            We're always looking for ambitious projects and talented people. Get in touch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/contact">View Open Roles</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
