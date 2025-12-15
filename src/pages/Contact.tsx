import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-6 opacity-0 animate-fade-up">
              Let's talk
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-up animation-delay-200">
              Ready to transform your brand? Book a free strategy call or send us a message. We respond to every inquiry within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="opacity-0 animate-fade-up animation-delay-200">
              <h2 className="text-2xl font-display font-medium text-foreground mb-8">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Company name"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="opacity-0 animate-fade-up animation-delay-300">
              <h2 className="text-2xl font-display font-medium text-foreground mb-8">
                Or reach out directly
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:hello@golive.agency"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      hello@golive.agency
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+14155551234"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +1 (415) 555-1234
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      548 Market Street, Suite 12345
                      <br />
                      San Francisco, CA 94104
                    </p>
                  </div>
                </div>
              </div>

              {/* Book a call CTA */}
              <div className="mt-12 p-8 bg-secondary rounded-lg">
                <h3 className="text-xl font-display font-medium text-foreground mb-3">
                  Prefer to talk live?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a free 30-minute strategy call with our team.
                </p>
                <Button variant="accent" asChild>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
