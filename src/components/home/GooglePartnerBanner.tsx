import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Database, BarChart3, Shield } from "lucide-react";

const technologies = [
  { icon: Cloud, name: "Google Cloud Platform" },
  { icon: Database, name: "Firebase" },
  { icon: BarChart3, name: "BigQuery" },
  { icon: Shield, name: "Cloud Security" },
];

export const GooglePartnerBanner = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-google-green/5 to-google-blue/5" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-google-blue" />
                <div className="w-2 h-2 rounded-full bg-google-red" />
                <div className="w-2 h-2 rounded-full bg-google-yellow" />
                <div className="w-2 h-2 rounded-full bg-google-green" />
              </div>
              <span className="text-sm font-medium text-primary">
                Official Google Partner
              </span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              Powered by Google Cloud Technology
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              As an official Google Cloud Partner, we bring enterprise-grade reliability, 
              security, and scalability to every project. Our certified team leverages 
              Google's cutting-edge infrastructure to build solutions that grow with your business.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center">
                    <tech.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link to="/partnership">
                Learn About Our Partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Orbiting circles */}
              <div className="absolute inset-0 border-2 border-dashed border-border/30 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border-2 border-dashed border-border/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-16 border-2 border-dashed border-border/50 rounded-full animate-[spin_10s_linear_infinite]" />
              
              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-card shadow-lg border border-border/50 flex items-center justify-center">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-google-blue" />
                    <div className="w-3 h-3 rounded-full bg-google-red" />
                    <div className="w-3 h-3 rounded-full bg-google-yellow" />
                    <div className="w-3 h-3 rounded-full bg-google-green" />
                  </div>
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-google-blue/10 flex items-center justify-center animate-float">
                <Cloud className="h-6 w-6 text-google-blue" />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-google-green/10 flex items-center justify-center animate-float stagger-2">
                <Database className="h-6 w-6 text-google-green" />
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-google-red/10 flex items-center justify-center animate-float stagger-3">
                <BarChart3 className="h-6 w-6 text-google-red" />
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-google-yellow/10 flex items-center justify-center animate-float stagger-4">
                <Shield className="h-6 w-6 text-google-yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
