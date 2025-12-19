import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  TrendingUp,
  Palette,
  Server,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks and scalable architecture that grow with your business.",
    features: [
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Enterprise Portals",
      "API Development",
      "Performance Optimization",
      "Security Hardening",
    ],
    color: "text-google-blue",
    bgColor: "bg-google-blue/10",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    features: [
      "iOS & Android Native Apps",
      "React Native & Flutter",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "Analytics Integration",
    ],
    color: "text-google-red",
    bgColor: "bg-google-red/10",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud migration, infrastructure optimization, and CI/CD pipelines on Google Cloud Platform.",
    features: [
      "Google Cloud Migration",
      "Kubernetes & Docker",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Alerting",
      "Cost Optimization",
    ],
    color: "text-google-green",
    bgColor: "bg-google-green/10",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI / ML Solutions",
    description:
      "Intelligent automation and predictive analytics powered by machine learning and Google AI tools.",
    features: [
      "Custom ML Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Chatbots & Virtual Assistants",
      "Recommendation Systems",
    ],
    color: "text-google-yellow",
    bgColor: "bg-google-yellow/10",
  },
  {
    id: "digital",
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to maximize your online presence, reach, and return on investment.",
    features: [
      "SEO & SEM Strategy",
      "Google Ads Management",
      "Social Media Marketing",
      "Content Marketing",
      "Analytics & Reporting",
      "Conversion Optimization",
    ],
    color: "text-google-blue",
    bgColor: "bg-google-blue/10",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, accessible, and engaging digital experiences.",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Responsive Design",
      "Accessibility (WCAG)",
      "Design Sprints",
    ],
    color: "text-google-red",
    bgColor: "bg-google-red/10",
  },
  {
    id: "enterprise",
    icon: Server,
    title: "Enterprise Software",
    description:
      "Custom enterprise solutions that streamline operations, improve efficiency, and drive digital transformation.",
    features: [
      "ERP & CRM Solutions",
      "Workflow Automation",
      "Business Intelligence",
      "System Integration",
      "Legacy Modernization",
      "Scalable Architecture",
    ],
    color: "text-google-green",
    bgColor: "bg-google-green/10",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Comprehensive IT Solutions for Modern Businesses
            </h1>
            <p className="text-lg text-muted-foreground">
              From web and mobile development to AI and cloud solutions, we offer 
              end-to-end technology services powered by our Google Cloud expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-lg ${service.bgColor} mb-4`}
                  >
                    <service.icon className={`h-7 w-7 ${service.color}`} />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button asChild>
                    <Link to="/contact">
                      Discuss Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Card className={`border-border/50 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className={`h-4 w-4 ${service.color} flex-shrink-0`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
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
            Not Sure Which Service You Need?
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-8">
            Let's discuss your requirements. Our experts will analyze your needs 
            and recommend the best solution for your business.
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
            <Link to="/contact">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
