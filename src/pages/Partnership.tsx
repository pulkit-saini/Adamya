import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Cloud,
  Database,
  BarChart3,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Check,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Industry-leading security measures to protect your data and applications.",
  },
  {
    icon: Zap,
    title: "99.99% Uptime SLA",
    description: "Google's global infrastructure ensures your applications are always available.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Deploy closer to your users with Google's worldwide network of data centers.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain insights with BigQuery and Google's powerful data analytics tools.",
  },
];

const technologies = [
  { name: "Google Cloud Platform", description: "Full suite of cloud services" },
  { name: "Firebase", description: "App development platform" },
  { name: "BigQuery", description: "Enterprise data warehouse" },
  { name: "Kubernetes (GKE)", description: "Container orchestration" },
  { name: "Cloud AI/ML", description: "Machine learning services" },
  { name: "Cloud Functions", description: "Serverless computing" },
  { name: "Cloud Storage", description: "Object storage service" },
  { name: "Cloud SQL", description: "Managed databases" },
];

const certifications = [
  "Google Cloud Professional Data Engineer",
  "Google Cloud Professional Cloud Architect",
  "Google Cloud Professional Cloud Developer",
  "Google Cloud Associate Cloud Engineer",
];

const Partnership = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-google-blue/5 via-google-green/5 to-google-blue/5" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-google-blue" />
                <div className="w-2 h-2 rounded-full bg-google-red" />
                <div className="w-2 h-2 rounded-full bg-google-yellow" />
                <div className="w-2 h-2 rounded-full bg-google-green" />
              </div>
              <span className="text-sm font-medium text-primary">
                Official Partner
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Google Cloud Partnership
            </h1>
            <p className="text-lg text-muted-foreground">
              As an official Google Cloud Partner, we bring enterprise-grade reliability, 
              security, and scalability to every project we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* What It Means */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
                What Our Partnership Means for You
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our Google Cloud Partner status is more than a badge—it's a commitment 
                to excellence. It means our team has undergone rigorous training and 
                certification, demonstrating deep expertise in Google's technologies.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                When you work with Adamya, you get direct access to Google's latest 
                technologies, priority support, and solutions architected by certified 
                professionals who know how to maximize the platform's potential.
              </p>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-google-yellow flex-shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={benefit.title} className="border-border/50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-5">
                    <benefit.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Google Technologies We Use
            </h2>
            <p className="text-muted-foreground">
              Leveraging the full power of Google Cloud to build robust, scalable solutions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-card p-5 rounded-lg border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Cloud className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-xs text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Benefits */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12">
              How This Benefits Your Business
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Cost Optimization",
                  description: "Our expertise helps you avoid common pitfalls and optimize cloud spending from day one.",
                },
                {
                  title: "Faster Time to Market",
                  description: "Pre-built solutions and best practices accelerate your development timeline.",
                },
                {
                  title: "Future-Proof Architecture",
                  description: "Solutions designed to scale seamlessly as your business grows.",
                },
                {
                  title: "Priority Support Access",
                  description: "As a partner, we have access to Google's technical support team for complex issues.",
                },
              ].map((item, index) => (
                <div key={item.title} className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
            Ready to Leverage Google Cloud?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Let our certified experts help you harness the full power of Google Cloud 
            for your next project.
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
            <Link to="/contact">
              Start Your Cloud Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Partnership;
