import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Linkedin, Send, Loader2, MapPin, Github } from "lucide-react";
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
    // show immediate mini popup while sending
    toast({
      title: "Sending your message...",
      description: "Please wait a moment.",
    });
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Ravi Patel"
      };
      const templateParams2 = {
        to_name: formData.name,
        from_name: formData.name,
        from_email: formData.email,
        to_email: formData.email,
        message: formData.message,
      };
      // Send auto-reply to user
      await emailjs.send(
        "service_9g0u4yf",
        "template_xoptwyz", 
        templateParams2,
        "kw9uQYqcvZDSGm55g"
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
      icon: Mail,
      label: "Email",
      value: "rp.ravipatel90@gmail.com",
      link: "mailto:rp.ravipatel90@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 76985 12692",
      link: "tel:+917698512692"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ravi-patel-011839265",
      link: "https://linkedin.com/in/ravi-patel-011839265"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Anand, Gujarat, India",
      link: "https://maps.google.com/?q=Anand,Gujarat"
    }
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full" />
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
              I am open to discuss high-impact software engineering roles, XR spatial computing architectures, or specialized contract systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="p-5 rounded-2xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-lg group hover:-translate-y-0.5"
                  >
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{info.label}</p>
                        <p className="text-sm md:text-base text-zinc-200 group-hover:text-cyan-300 transition-colors font-medium">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <Card className="p-8 md:p-10 rounded-3xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

              <h3 className="text-xl font-bold text-white mb-2">Send Direct Message</h3>
              <p className="text-xs text-zinc-400 mb-6">Receive an instant auto-confirmation reply upon submission.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                    className="bg-white/[0.03] border-white/[0.1] focus:border-cyan-400 rounded-xl text-white placeholder:text-zinc-600 h-11"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    required
                    className="bg-white/[0.03] border-white/[0.1] focus:border-cyan-400 rounded-xl text-white placeholder:text-zinc-600 h-11"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Project Details / Inquiry
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, team, or opportunity..."
                    required
                    rows={4}
                    className="bg-white/[0.03] border-white/[0.1] focus:border-cyan-400 rounded-xl text-white placeholder:text-zinc-600 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all group disabled:opacity-50"
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
