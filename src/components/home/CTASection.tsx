import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
            Let's discuss how our Google-powered solutions can drive your digital 
            transformation. Get a free consultation with our experts today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 px-8">
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-background/30 text-foreground hover:bg-background/10 px-8"
            >
              <Link to="/case-studies">View Our Work</Link>
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-background/60">
            <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-background transition-colors">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </a>
            <a href="mailto:contact@adamya.com" className="flex items-center gap-2 hover:text-background transition-colors">
              <Mail className="h-4 w-4" />
              <span>contact@adamya.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
