import React, { useState, useEffect } from "react";
import { Download, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopNavProps {
  is3DEnabled: boolean;
  onToggle3D: () => void;
  onOpenProjectsDeck: () => void;
  onScrollToStation: (id: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  is3DEnabled,
  onToggle3D,
  onOpenProjectsDeck,
  onScrollToStation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07080d]/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => onScrollToStation("home")}
          className="group flex items-center gap-2 text-left focus:outline-none"
        >
          <span className="text-xl md:text-2xl font-black gradient-text tracking-wider">
            RP
          </span>
          <span className="hidden md:inline-block font-mono text-[10px] tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors uppercase">
            / Spatial Dev
          </span>
        </button>

        {/* Minimalist Vertex-Style Bracket Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            type="button"
            onClick={() => onScrollToStation("home")}
            className="font-mono text-xs tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase"
          >
            [ Home ]
          </button>
          <button
            type="button"
            onClick={onOpenProjectsDeck}
            className="font-mono text-xs tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors uppercase flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-cyan-400" />
            [ Projects (13) ]
          </button>
          <button
            type="button"
            onClick={() => onScrollToStation("contact")}
            className="font-mono text-xs tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase"
          >
            [ Contact ]
          </button>
        </nav>

        {/* Actions & Controls */}
        <div className="flex items-center gap-3">
          {/* 3D Lab Toggle Button */}
          <button
            type="button"
            onClick={onToggle3D}
            title={is3DEnabled ? "Turn off 3D WebGL background" : "Turn on 3D WebGL background"}
            className={`flex items-center gap-2 px-3 h-8 md:h-9 rounded-xl border text-[11px] font-mono font-semibold transition-all ${
              is3DEnabled
                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-sm shadow-cyan-500/20"
                : "bg-white/[0.04] border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                is3DEnabled ? "bg-cyan-400 animate-pulse" : "bg-slate-500"
              }`}
            />
            3D LAB {is3DEnabled ? "ON" : "OFF"}
          </button>

          {/* Resume Download CTA */}
          <a
            href="Ravi_Patel_Resume.pdf"
            download="Ravi_Patel_Resume.pdf"
            className="hidden sm:inline-block"
          >
            <Button
              size="sm"
              className="h-8 md:h-9 px-4 bg-primary text-primary-foreground hover:shadow-glow font-semibold gap-1.5 text-xs rounded-xl"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </Button>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#090b14]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-3">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onScrollToStation("home");
            }}
            className="text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]"
          >
            [ 00 // Home ]
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onScrollToStation("about");
            }}
            className="text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]"
          >
            [ 01 // Profile & Experience ]
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenProjectsDeck();
            }}
            className="text-left font-mono text-xs py-2 px-3 rounded-lg text-cyan-400 hover:bg-cyan-500/10 font-bold"
          >
            [ 02 // All Projects Deck (13) ]
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onScrollToStation("contact");
            }}
            className="text-left font-mono text-xs py-2 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04]"
          >
            [ 07 // Transmission ]
          </button>
          <div className="pt-2 border-t border-white/10">
            <a
              href="Ravi_Patel_Resume.pdf"
              download="Ravi_Patel_Resume.pdf"
              className="block"
            >
              <Button className="w-full bg-primary text-primary-foreground gap-2 text-xs">
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
