import { Quote } from "lucide-react";
import { testimonials } from "@/config/siteConfig";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonialImages = [testimonial1, testimonial2, testimonial3];

export function Testimonials() {
  return (
    <section className="py-28 section-padding">
      <div className="container-wide">
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-5">
            What our clients say
          </h2>
          <p className="text-muted-foreground text-lg">
            We measure our success by the success of our partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-card p-8 lg:p-10 rounded-xl border border-border opacity-0 animate-fade-up transition-shadow hover:shadow-md"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <Quote className="h-8 w-8 text-accent/70 mb-6" />
              <p className="text-foreground leading-relaxed mb-8 text-base lg:text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonialImages[index]}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
