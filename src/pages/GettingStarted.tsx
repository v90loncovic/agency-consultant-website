import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Rocket, Users, MessageSquare, Settings, Zap } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "1. Discovery Call",
    description: "We start with a 30-minute call to understand your business, goals, and challenges. Come prepared to discuss your vision and current pain points.",
  },
  {
    icon: Users,
    title: "2. Strategy Session",
    description: "For qualified opportunities, we schedule a deeper strategy session. We'll audit your current presence and identify high-impact opportunities.",
  },
  {
    icon: Settings,
    title: "3. Custom Proposal",
    description: "We prepare a tailored proposal with scope, timeline, and investment. No cookie-cutter solutions—every engagement is custom.",
  },
  {
    icon: Rocket,
    title: "4. Kickoff",
    description: "Once aligned, we kick off with a comprehensive onboarding process. You'll meet your dedicated team and establish communication rhythms.",
  },
  {
    icon: Zap,
    title: "5. Execution",
    description: "We work in focused sprints with regular check-ins. You'll have visibility into progress and opportunities for feedback throughout.",
  },
  {
    icon: MessageSquare,
    title: "6. Launch & Beyond",
    description: "We don't just deliver and disappear. Post-launch support ensures your investment continues generating returns.",
  },
];

const faqs = [
  {
    question: "What should I prepare for the discovery call?",
    answer: "Come ready to discuss your business model, target audience, current challenges, and goals for the engagement. If you have brand assets, analytics, or competitive research, those are helpful but not required.",
  },
  {
    question: "How long until I see results?",
    answer: "Timeline varies by engagement type. Brand strategy work typically shows impact within 60-90 days. Web development projects launch in 6-16 weeks. Growth marketing campaigns start generating data within the first month.",
  },
  {
    question: "Do you offer retainer arrangements?",
    answer: "Yes. Many clients transition to ongoing retainers after initial project work. Retainers provide continued access to our team for strategy, optimization, and new initiatives.",
  },
  {
    question: "What if we're not the right fit?",
    answer: "No hard feelings. If we're not the right partner for your needs, we'll tell you honestly and try to point you toward better-suited resources.",
  },
];

const GettingStarted = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-6 opacity-0 animate-fade-up">
              Getting started
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              Everything you need to know about working with GoLive. From first call to long-term partnership, here's what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 section-padding border-t border-border">
        <div className="container-wide">
          <h2 className="text-3xl font-display font-medium text-foreground mb-12">
            The process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="p-6 rounded-lg border border-border bg-card opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <step.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-lg font-display font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Need */}
      <section className="py-24 section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-medium text-foreground mb-6">
                What we need from you
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Great partnerships require commitment from both sides. Here's what we ask of our clients:
              </p>
              <ul className="space-y-4">
                {[
                  "A dedicated point of contact with decision-making authority",
                  "Access to stakeholders for research and feedback sessions",
                  "Timely feedback on deliverables (within 3-5 business days)",
                  "Transparency about budget, timeline, and internal constraints",
                  "Trust in our expertise and process",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-display font-medium text-foreground mb-6">
                What you get from us
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our commitment to every client, regardless of engagement size:
              </p>
              <ul className="space-y-4">
                {[
                  "Senior team members on every project—no bait-and-switch",
                  "Regular status updates and transparent communication",
                  "Work that meets the highest standards of quality",
                  "Strategic thinking, not just task execution",
                  "Post-launch support and optimization",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 section-padding">
        <div className="container-wide">
          <h2 className="text-3xl font-display font-medium text-foreground mb-12">
            Common questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Ready to get started?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            Book a free discovery call and let's explore how we can help you achieve your goals.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Book a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GettingStarted;
