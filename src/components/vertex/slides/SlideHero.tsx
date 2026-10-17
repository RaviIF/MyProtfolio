import React from "react";
import { ArrowDown, Download, Sparkles, Terminal, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideHeroProps {
  onExploreClick: () => void;
  onOpenProjectsDeck: () => void;
}

export const SlideHero: React.FC<SlideHeroProps> = ({ onExploreClick, onOpenProjectsDeck }) => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 pt-24 pb-20 select-none"
    >
      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        {/* Top Status Capsule */}
        <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs text-slate-300 tracking-wider">
            STATION 00 // DEV COMMAND CENTER
          </span>
        </div>

        {/* Large Brutalist Hero Heading */}
        <div className="mb-6">
          <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-cyan-400 uppercase block mb-3">
            Real-Time 3D • Native Systems • Spatial Computing
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1.05]">
            <span className="metallic-text">RAVI </span>
            <span className="gradient-text">PATEL</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-8">
          Software & Game Developer architecting high-performance runtime systems across{" "}
          <span className="text-cyan-400 font-semibold font-mono">Unity (C#)</span>,{" "}
          <span className="text-indigo-400 font-semibold font-mono">Unreal Engine 5 (C++)</span>,{" "}
          <span className="text-purple-400 font-semibold font-mono">Three.js</span>, and{" "}
          <span className="text-emerald-400 font-semibold font-mono">Hardened Linux Kiosks</span>.
        </p>

        {/* Linear Metric Capsules */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl w-full mb-10">
          <div className="p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center">
            <span className="font-mono text-2xl md:text-3xl font-extrabold gradient-text block">
              3+ Years
            </span>
            <span className="font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block">
              Production Experience
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center">
            <span className="font-mono text-2xl md:text-3xl font-extrabold gradient-text block">
              15+ Systems
            </span>
            <span className="font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block">
              Engines, Games & Kiosks
            </span>
          </div>

          <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#0d101d]/75 border border-white/[0.08] backdrop-blur-xl text-center">
            <span className="font-mono text-2xl md:text-3xl font-extrabold gradient-text block">
              &lt;100ms
            </span>
            <span className="font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1 block">
              Low-Latency XR & E2EE
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            type="button"
            onClick={onExploreClick}
            className="h-11 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold gap-2 shadow-lg shadow-cyan-500/25 transition-all text-xs font-mono"
          >
            [ EXPLORE WORK ]
            <ArrowDown className="w-3.5 h-3.5" />
          </Button>

          <Button
            type="button"
            onClick={onOpenProjectsDeck}
            variant="outline"
            className="h-11 px-6 rounded-xl border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 font-semibold gap-2 text-xs font-mono"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            [ ALL PROJECTS (13) ]
          </Button>

          <a
            href="Ravi_Patel_Resume.pdf"
            download="Ravi_Patel_Resume.pdf"
            className="no-underline hidden sm:inline-block"
          >
            <Button
              type="button"
              variant="outline"
              className="h-11 px-5 rounded-xl border-white/10 hover:bg-white/[0.05] text-slate-300 font-semibold gap-2 text-xs font-mono"
            >
              <Download className="w-3.5 h-3.5" />
              [ RESUME ]
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
