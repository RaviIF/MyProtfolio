import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Terminal, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16">
      {/* Floating decorative ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-primary/20 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-secondary/20 blur-3xl animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-primary/10 blur-2xl animate-float pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Senior Role Pill Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-md rounded-full text-xs md:text-sm text-primary border border-primary/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="font-semibold tracking-wide">
              Software & Game Developer | Unity • Unreal Engine 5 • Three.js
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight">
            Ravi <span className="gradient-text">Patel</span>
          </h1>

          {/* Senior Tagline */}
          <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            Architecting real-time 3D applications, medical spatial computing (XR), and hardware-integrated interactive systems.
          </p>

          {/* Action CTAs */}
          <div className="flex gap-4 justify-center flex-wrap items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-primary text-primary-foreground hover:shadow-glow transition-all group font-semibold px-6"
            >
              Explore Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="Ravi_Patel_Resume.pdf"
              download="Ravi_Patel_Resume.pdf"
              className="no-underline"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold px-6 gap-2"
              >
                <Download className="w-4 h-4 text-primary" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Quantifiable Senior Metric Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-colors">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-1">3+</div>
              <div className="text-sm font-semibold text-foreground">Years Experience</div>
              <div className="text-xs text-muted-foreground mt-0.5">XR, UE5 & Web3D Systems</div>
            </div>
            <div className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-colors">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-1">15+</div>
              <div className="text-sm font-semibold text-foreground">Projects & Systems</div>
              <div className="text-xs text-muted-foreground mt-0.5">Production Architecture</div>
            </div>
            <div className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-colors col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-1">XR & C++</div>
              <div className="text-sm font-semibold text-foreground">Spatial Computing</div>
              <div className="text-xs text-muted-foreground mt-0.5">Procedural 3D & Vision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
