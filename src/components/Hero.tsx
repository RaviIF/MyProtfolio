import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-secondary/20 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-float" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full text-sm text-primary border border-primary/20">
              Unity 3D Game Developer
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Ravi Patel
            {/* <span className="inline-block ml-4">
              <ArrowRight className="w-12 h-12 md:w-16 md:h-16 text-primary animate-pulse" />
            </span> */}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building immersive digital experiences across games, AR, and MR
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-primary text-primary-foreground hover:shadow-glow transition-all group"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50">
              <div className="text-4xl font-bold gradient-text mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 col-span-2 md:col-span-1">
              <div className="text-4xl font-bold gradient-text mb-2">XR</div>
              <div className="text-sm text-muted-foreground">AR/MR Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
