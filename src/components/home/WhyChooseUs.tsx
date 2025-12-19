import { CheckCircle, Clock, HeadphonesIcon, Zap, Shield, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Google Certified Experts",
    description: "Our team holds official Google Cloud certifications ensuring top-tier expertise.",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "Build today for millions of users tomorrow with our enterprise-grade architecture.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Agile methodology and transparent timelines ensure projects ship on schedule.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance for all deployed solutions.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "500+ successful projects delivered across diverse industries and geographies.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous testing and code reviews ensure robust, bug-free deliverables.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Why Adamya
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-muted-foreground mb-8">
              We combine Google's cutting-edge technology with deep domain expertise 
              to deliver solutions that exceed expectations. Our client-first approach 
              ensures your success is our priority.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <reason.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">{reason.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-6 shadow-md border border-border/50">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md border border-border/50 mt-8">
                <div className="text-4xl font-bold text-google-green mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md border border-border/50">
                <div className="text-4xl font-bold text-google-yellow mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Enterprise Clients</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-md border border-border/50 mt-8">
                <div className="text-4xl font-bold text-google-red mb-2">8+</div>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
