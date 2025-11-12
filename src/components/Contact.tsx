import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Linkedin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Ravi Patel"
      };
       // 1️⃣ Send message to you
      // await emailjs.send(
      //   'service_4tcy277',
      //   'template_w51obvo',
      //   templateParams,
      //   'kw9uQYqcvZDSGm55g'
      // );
      // 2️⃣ Send auto-reply to user
      await emailjs.send(
        "service_4tcy277",          // same service ID
        "template_xoptwyz",      // your new auto-reply template ID
        {
          to_name: formData.name,
          to_email: formData.email,
          message: formData.message,
          to_name: "Ravi Patel"
          from_name: "Ravi Patel", // your name
        },
        "kw9uQYqcvZDSGm55g"        // your public key
      );
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
      });
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7698512692",
      link: "tel:+917698512692"
    },
    {
      icon: Mail,
      label: "Email",
      value: "rp.ravipatel90@gmail.com",
      link: "mailto:rp.ravipatel90@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://linkedin.com/in/ravi-patel-011839265"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-navy-dark/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Feel free to reach out through any of these channels.
              </p>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all"
                  >
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="bg-muted/30 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="bg-muted/30 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell me about the project
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="I'd like to discuss..."
                    required
                    rows={5}
                    className="bg-muted/30 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:shadow-glow transition-all group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
