import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Target,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@adamyainov.com",
    href: "mailto:info@adamyainov.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 1204164821",
    href: "tel:+911204164821",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "H-87, 3rd Floor, Sector 63, Noida, UP, India",
    href: "https://maps.app.goo.gl/LWWHazh9Zhbp8buM6",
  },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "Cloud & DevOps",
  "AI/ML Solutions",
  "Digital Marketing",
  "UI/UX Design",
  "Enterprise Software",
  "Other",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Thank you! We'll be in touch within 24 hours.");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your business? Get in touch with our team for a
              free consultation and discover how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-border/50">
                <CardContent className="p-6 lg:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-google-green/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-google-green" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. Our team will get back to
                        you within 24 business hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-heading text-xl font-semibold mb-6">
                        Get a Free Consultation
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input id="firstName" placeholder="John" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input id="lastName" placeholder="Doe" required />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@company.com"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" placeholder="Your Company" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="service">
                              Service Interested In
                            </Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem
                                    key={service}
                                    value={service
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}
                                  >
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">
                            Tell Us About Your Project *
                          </Label>
                          <Textarea
                            id="message"
                            placeholder="Describe your project requirements, goals, and timeline..."
                            rows={5}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-heading text-xl font-semibold mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-medium text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <Card className="border-border/50 bg-primary/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Business Hours</h3>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    We typically respond within 24 business hours
                  </p>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <Card className="border-border/50 overflow-hidden">
                <section className=" bg-muted">
                  <iframe
                    src="https://maps.google.com/maps?hl=en&q=H%20Block%2C%20Sector%2063%2C%20Noida&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </section>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
