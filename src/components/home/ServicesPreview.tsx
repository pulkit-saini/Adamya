import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  TrendingUp,
  Palette,
  Server,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and scalable architecture.",
    color: "text-google-blue",
    bgColor: "bg-google-blue/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android platforms.",
    color: "text-google-red",
    bgColor: "bg-google-red/10",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud migration, infrastructure optimization, and CI/CD pipelines on Google Cloud.",
    color: "text-google-green",
    bgColor: "bg-google-green/10",
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description: "Intelligent automation and predictive analytics powered by machine learning.",
    color: "text-google-yellow",
    bgColor: "bg-google-yellow/10",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to maximize your online presence and ROI.",
    color: "text-google-blue",
    bgColor: "bg-google-blue/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    color: "text-google-red",
    bgColor: "bg-google-red/10",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-muted-foreground">
            From concept to deployment, we deliver end-to-end technology solutions 
            that help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.bgColor} mb-4`}
                >
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
