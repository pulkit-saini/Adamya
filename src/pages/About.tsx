import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, Globe, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client-First",
    description: "Your success is our priority. We listen, understand, and deliver.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Quality is non-negotiable. Every line of code matters to us.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving businesses across continents with local expertise.",
  },
];

const milestones = [
  { year: "2016", event: "Founded in Mumbai, India" },
  { year: "2018", event: "Expanded to San Francisco, USA" },
  { year: "2019", event: "Became Official Google Cloud Partner" },
  { year: "2021", event: "Crossed 300+ successful projects" },
  { year: "2023", event: "ISO 27001 Certification achieved" },
  { year: "2024", event: "500+ projects milestone" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Adamya
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Building the Future of Digital Innovation
            </h1>
            <p className="text-lg text-muted-foreground">
              We are a team of passionate technologists dedicated to transforming 
              businesses through innovative technology solutions powered by our 
              Google Cloud partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg border border-border/50 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses of all sizes with enterprise-grade technology 
                solutions that drive growth, efficiency, and competitive advantage. 
                We believe that every organization deserves access to world-class 
                technology, and we make that possible through our expertise and 
                Google partnership.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border/50 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-google-green/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-google-green" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted technology partner for businesses globally, 
                recognized for our innovation, reliability, and the tangible impact 
                we create. We envision a world where technology seamlessly enables 
                human potential and drives sustainable progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-lg border border-border/50 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline 
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground">
              Key milestones in our growth story
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-4 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                    <div className="bg-card p-4 rounded-lg border border-border/50 inline-block">
                      <span className="font-heading font-bold text-primary">{milestone.year}</span>
                      <p className="text-sm text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />
                  <div className="flex-1 pl-12 md:pl-0 md:hidden">
                    <span className="font-heading font-bold text-primary">{milestone.year}</span>
                    <p className="text-sm text-muted-foreground">{milestone.event}</p>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Whether you're looking to transform your business or join our team, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
