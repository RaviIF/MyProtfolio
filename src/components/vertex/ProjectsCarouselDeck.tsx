import React, { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ALL_PROJECTS, ProjectItem, ProjectCategory } from "@/data/projectsData";

interface ProjectsCarouselDeckProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES: { label: string; value: ProjectCategory | "All"; count: number }[] = [
  { label: "All Systems", value: "All", count: ALL_PROJECTS.length },
  { label: "Medical XR", value: "Medical XR", count: ALL_PROJECTS.filter((p) => p.category === "Medical XR").length },
  { label: "Unreal Engine 5", value: "Unreal Engine 5", count: ALL_PROJECTS.filter((p) => p.category === "Unreal Engine 5").length },
  { label: "Healthcare & Web3D", value: "Healthcare & Web3D", count: ALL_PROJECTS.filter((p) => p.category === "Healthcare & Web3D").length },
  { label: "AI & Vision", value: "AI & Vision", count: ALL_PROJECTS.filter((p) => p.category === "AI & Vision").length },
  { label: "Games & VR", value: "Games & VR", count: ALL_PROJECTS.filter((p) => p.category === "Games & VR").length },
];

export const ProjectsCarouselDeck: React.FC<ProjectsCarouselDeckProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "All">("All");
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        scrollTrack("right");
      } else if (e.key === "ArrowLeft") {
        scrollTrack("left");
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const scrollTrack = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const scrollAmount = direction === "right" ? 360 : -360;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  if (!isOpen) return null;

  const filteredProjects =
    selectedCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div
      role="dialog"
      aria-label="Projects Archive Deck"
      className="fixed inset-0 z-50 bg-[#06080e]/95 backdrop-blur-2xl flex flex-col p-6 md:p-10 animate-in fade-in duration-300"
    >
      {/* Deck Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
              ARCHIVE // 13 PRODUCTION SYSTEMS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Projects <span className="gradient-text">Carousel Deck</span>
          </h2>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-mono"
        >
          <span>[ ESC ]</span>
          <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
        </button>
      </div>

      {/* Category Filter Pills & Scroll Arrows */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20 font-bold"
                    : "bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] opacity-60">({cat.count})</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Left / Right Navigation */}
        <div className="hidden sm:flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() => scrollTrack("left")}
            className="w-9 h-9 rounded-xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => scrollTrack("right")}
            className="w-9 h-9 rounded-xl border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08]"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Horizontal Scrollable Carousel Track */}
      <div
        ref={trackRef}
        className="flex-1 flex gap-5 overflow-x-auto items-stretch pb-6 scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group shrink-0 w-[300px] sm:w-[340px] p-6 rounded-2xl bg-[#090c16]/90 border border-white/[0.08] hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/15 transition-all duration-300 flex flex-col justify-between cursor-pointer snap-start relative overflow-hidden"
          >
            {/* Top Glowing Bar on Hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Domain Category Pill */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] tracking-wider text-cyan-400 uppercase font-semibold">
                  {project.category}
                </span>
                {project.isFlagship && (
                  <span className="flex items-center gap-1 font-mono text-[10px] text-indigo-400">
                    <Sparkles className="w-3 h-3 text-cyan-400" /> Flagship
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {project.title}
              </h3>

              {/* Subtitle */}
              <p className="font-mono text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                {project.subtitle}
              </p>

              {/* Metric Tag */}
              {project.metrics && (
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-4">
                  <span className="font-mono text-[11px] text-cyan-300 block line-clamp-1 font-medium">
                    ⚡ {project.metrics}
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Tech Tags & Inspect CTA */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 pt-3 border-t border-white/[0.06]">
                <span>[ INSPECT CASE ]</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
