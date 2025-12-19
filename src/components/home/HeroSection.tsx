import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
export const HeroSection = () => {
  return <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-8 animate-fade-in">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-google-blue" />
              <div className="w-2 h-2 rounded-full bg-google-red" />
              <div className="w-2 h-2 rounded-full bg-google-yellow" />
              <div className="w-2 h-2 rounded-full bg-google-green" />
            </div>
            <span className="text-sm font-medium text-primary">
              Official Google Cloud Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in stagger-1">
            Transform Your Business with{" "}
            <span className="gradient-text">Enterprise-Grade</span> Technology
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in stagger-2">
            Leveraging our Google Partnership to deliver scalable, innovative solutions 
            that drive growth for businesses in India and across the globe.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in stagger-3">
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in stagger-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-google-blue" />
              <span className="text-sm font-medium">Google Certified</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Award className="h-5 w-5 text-google-green" />
              <span className="text-sm font-medium">ISO 27001 Compliant</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-google-yellow" />
              <span className="text-sm font-medium">500+ Clients Served</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        
      </div>
    </section>;
};