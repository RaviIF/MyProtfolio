import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Terminal, Layers } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-20">
      {/* Ambient Radial Auroras */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl animate-float-delayed pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Live Status Pill */}
          <div className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-lg hover:border-cyan-400/40 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs md:text-sm font-medium tracking-wide text-zinc-300">
              Software & Game Developer • <span className="text-cyan-400 font-semibold">Unity</span> • <span className="text-indigo-400 font-semibold">Unreal Engine 5</span> • <span className="text-purple-400 font-semibold">Three.js</span>
            </span>
          </div>

          {/* Heading with Apple-style metallic gradient */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
            <span className="metallic-text">Ravi </span>
            <span className="gradient-text">Patel</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            Architecting real-time 3D applications, medical spatial computing (XR), and hardware-integrated interactive systems.
          </p>

          {/* Action CTAs */}
          <div className="flex gap-4 justify-center flex-wrap items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold px-8 h-12 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all group rounded-xl"
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
                className="bg-white/[0.03] hover:bg-white/[0.08] border-white/15 text-zinc-200 hover:text-white font-semibold px-7 h-12 rounded-xl backdrop-blur-xl gap-2 transition-all hover:border-white/30"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Sleek Linear-style Metric Stat Capsules */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <div className="relative group p-6 rounded-2xl bg-[#0D0F1A]/80 border border-white/[0.08] hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl hover:-translate-y-1">
              <div className="absolute -top-[1px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
              <div className="text-4xl md:text-5xl font-black gradient-text mb-1">3+</div>
              <div className="text-sm font-semibold text-zinc-200">Years Experience</div>
              <div className="text-xs text-zinc-500 mt-1">XR, UE5 & Web3D Systems</div>
            </div>

            <div className="relative group p-6 rounded-2xl bg-[#0D0F1A]/80 border border-white/[0.08] hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl hover:-translate-y-1">
              <div className="absolute -top-[1px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-80" />
              <div className="text-4xl md:text-5xl font-black gradient-text mb-1">15+</div>
              <div className="text-sm font-semibold text-zinc-200">Systems & Projects</div>
              <div className="text-xs text-zinc-500 mt-1">Production Architecture</div>
            </div>

            <div className="relative group p-6 rounded-2xl bg-[#0D0F1A]/80 border border-white/[0.08] hover:border-purple-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl hover:-translate-y-1 col-span-2 md:col-span-1">
              <div className="absolute -top-[1px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80" />
              <div className="text-4xl md:text-5xl font-black gradient-text mb-1">XR & C++</div>
              <div className="text-sm font-semibold text-zinc-200">Spatial Computing</div>
              <div className="text-xs text-zinc-500 mt-1">Procedural 3D & Vision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
