import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Adamya transformed our legacy systems into a modern cloud architecture. Their Google Cloud expertise helped us reduce costs by 40% while improving performance tenfold.",
    author: "Priya Sharma",
    role: "CTO, FinanceFirst India",
    company: "FinanceFirst",
  },
  {
    content:
      "The mobile app they built for us exceeded all expectations. The team's attention to detail and commitment to quality is unmatched. Highly recommend their services.",
    author: "Michael Chen",
    role: "Founder & CEO",
    company: "HealthTech Solutions",
  },
  {
    content:
      "Working with a Google Partner gave us confidence from day one. Their AI solutions have automated 60% of our customer service operations.",
    author: "Sarah Johnson",
    role: "Director of Operations",
    company: "RetailMax Global",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Client Success Stories
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our clients say about 
            working with Adamya.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-google-green flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
