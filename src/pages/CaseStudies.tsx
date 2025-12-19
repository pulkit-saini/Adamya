import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "FinanceFirst India",
    industry: "Financial Services",
    image: "bg-gradient-to-br from-google-blue/20 to-google-green/20",
    problem:
      "Legacy systems causing slow transaction processing and high operational costs, impacting customer satisfaction.",
    solution:
      "Migrated to Google Cloud Platform with microservices architecture, implemented real-time data processing with BigQuery.",
    outcomes: [
      { icon: TrendingUp, label: "Performance", value: "10x faster" },
      { icon: DollarSign, label: "Cost Reduction", value: "40%" },
      { icon: Users, label: "User Satisfaction", value: "95%" },
      { icon: Clock, label: "Deployment Time", value: "3 months" },
    ],
    technologies: ["Google Cloud", "BigQuery", "Kubernetes", "Firebase"],
  },
  {
    id: 2,
    title: "HealthTech Solutions",
    industry: "Healthcare",
    image: "bg-gradient-to-br from-google-red/20 to-google-yellow/20",
    problem:
      "Needed a HIPAA-compliant mobile app for patient engagement and remote consultations during pandemic growth.",
    solution:
      "Built cross-platform mobile app with secure video consultation, integrated with existing EMR systems using Cloud Healthcare API.",
    outcomes: [
      { icon: Users, label: "Active Users", value: "100K+" },
      { icon: TrendingUp, label: "Consultations", value: "50K/month" },
      { icon: Clock, label: "Time to Market", value: "4 months" },
      { icon: DollarSign, label: "Revenue Growth", value: "200%" },
    ],
    technologies: ["React Native", "Google Cloud", "Healthcare API", "Firebase"],
  },
  {
    id: 3,
    title: "RetailMax Global",
    industry: "E-commerce",
    image: "bg-gradient-to-br from-google-green/20 to-google-blue/20",
    problem:
      "High volume of customer support queries overwhelming the team, leading to poor response times and customer churn.",
    solution:
      "Implemented AI-powered chatbot using Dialogflow, integrated with CRM for personalized responses and automated ticket routing.",
    outcomes: [
      { icon: TrendingUp, label: "Query Resolution", value: "60% automated" },
      { icon: Clock, label: "Response Time", value: "90% faster" },
      { icon: DollarSign, label: "Support Costs", value: "-45%" },
      { icon: Users, label: "CSAT Score", value: "4.8/5" },
    ],
    technologies: ["Dialogflow", "Google Cloud", "BigQuery", "Looker"],
  },
  {
    id: 4,
    title: "LogiStream Enterprises",
    industry: "Logistics",
    image: "bg-gradient-to-br from-google-yellow/20 to-google-red/20",
    problem:
      "Manual fleet tracking and route planning causing delivery delays and fuel inefficiencies across 500+ vehicles.",
    solution:
      "Built real-time fleet management system with IoT integration, ML-based route optimization, and predictive maintenance alerts.",
    outcomes: [
      { icon: DollarSign, label: "Fuel Savings", value: "30%" },
      { icon: Clock, label: "On-time Delivery", value: "98%" },
      { icon: TrendingUp, label: "Efficiency Gain", value: "45%" },
      { icon: Users, label: "Driver Satisfaction", value: "4.5/5" },
    ],
    technologies: ["Google Maps API", "Cloud IoT", "BigQuery ML", "Firebase"],
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Work
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Case Studies & Success Stories
            </h1>
            <p className="text-lg text-muted-foreground">
              Real-world examples of how we've helped businesses transform 
              through technology. Problem → Solution → Measurable Impact.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Card className="border-border/50 overflow-hidden">
                  <div className="grid lg:grid-cols-5">
                    {/* Visual */}
                    <div className={`lg:col-span-2 ${study.image} min-h-[200px] lg:min-h-full flex items-center justify-center p-8`}>
                      <div className="text-center">
                        <h3 className="font-heading text-2xl font-bold mb-2">
                          {study.title}
                        </h3>
                        <Badge variant="secondary">{study.industry}</Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-6 lg:p-8">
                      {/* Problem */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-google-red uppercase tracking-wider mb-2">
                          The Challenge
                        </h4>
                        <p className="text-muted-foreground">{study.problem}</p>
                      </div>

                      {/* Solution */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-google-blue uppercase tracking-wider mb-2">
                          Our Solution
                        </h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h4 className="text-sm font-semibold text-google-green uppercase tracking-wider mb-3">
                          Results & Impact
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {study.outcomes.map((outcome) => (
                            <div
                              key={outcome.label}
                              className="bg-muted/50 rounded-lg p-3 text-center"
                            >
                              <outcome.icon className="h-5 w-5 mx-auto mb-1 text-primary" />
                              <p className="font-bold text-lg">{outcome.value}</p>
                              <p className="text-xs text-muted-foreground">
                                {outcome.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-8">
            Let's discuss how we can help transform your business with 
            technology solutions that deliver real, measurable results.
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
