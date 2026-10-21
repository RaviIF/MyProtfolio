import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const SlideContact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_7vljb2h",
        "template_k3j7nfe",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "GekL2x0c-5PjX33sM"
      );

      setIsSent(true);
      toast({
        title: "Transmission Received",
        description: "Your message was transmitted successfully. I will respond promptly.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.warn("Direct transmission fallback:", error);
      toast({
        title: "Transmission Logged",
        description: "Thank you for reaching out. You can also connect via direct email or LinkedIn.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col justify-between relative px-6 md:px-16 pt-24 pb-12 select-none"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10 my-auto">
        {/* Station Label */}
        <div className="mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            STATION 07 // GET IN TOUCH
          </span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-2">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-slate-400">
            Open for Senior Software & Game Development, Spatial Computing (XR), and Interactive 3D roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Credentials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                  Email Address
                </span>
                <a
                  href="mailto:patelravi28042001@gmail.com"
                  className="text-xs md:text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono"
                >
                  patelravi28042001@gmail.com
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                  Phone / WhatsApp
                </span>
                <a
                  href="tel:+919712728974"
                  className="text-xs md:text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono"
                >
                  +91 97127 28974
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                  Location
                </span>
                <span className="text-xs md:text-sm font-semibold text-white font-mono">
                  Karamsad, Anand, Gujarat, India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex gap-3">
              <a
                href="https://github.com/RaviPatel2804"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 text-slate-300 hover:text-cyan-400 transition-all flex items-center justify-center gap-2 text-xs font-mono"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-patel-394939223/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-400/40 text-slate-300 hover:text-indigo-400 transition-all flex items-center justify-center gap-2 text-xs font-mono"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Terminal Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-3xl bg-[#080b14]/85 backdrop-blur-2xl border border-white/[0.08] shadow-2xl space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Your Name
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="h-10 bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@studio.com"
                    className="h-10 bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                  Message Details
                </label>
                <Textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, team requirements, or role details..."
                  className="bg-white/[0.03] border-white/10 text-white rounded-xl text-xs focus:border-cyan-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl text-xs font-mono shadow-lg shadow-cyan-500/20"
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <Loader2 className="ml-2 w-3.5 h-3.5 animate-spin" />
                  </>
                ) : isSent ? (
                  <>
                    <span>Message Sent Successfully</span>
                    <CheckCircle2 className="ml-2 w-3.5 h-3.5 text-emerald-400" />
                  </>
                ) : (
                  <>
                    <span>[ SEND MESSAGE ]</span>
                    <Send className="ml-2 w-3.5 h-3.5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Minimalist Bottom Legal */}
      <footer className="pt-8 border-t border-white/[0.06] text-center relative z-10">
        <p className="font-mono text-[11px] text-slate-500">
          © {new Date().getFullYear()} Ravi Patel. Software & Game Developer.
        </p>
      </footer>
    </section>
  );
};
