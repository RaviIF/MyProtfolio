import React, { useEffect } from "react";
import { X, CheckCircle2, Cpu, ExternalLink, Sparkles, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectItem } from "@/data/projectsData";

interface SidePanelDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenAllProjects?: () => void;
}

export const SidePanelDrawer: React.FC<SidePanelDrawerProps> = ({
  project,
  onClose,
  onOpenAllProjects,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dimmed Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Slide-out Glass Drawer */}
      <aside
        role="dialog"
        aria-label={`${project.title} Case Study`}
        className="relative z-10 w-full max-w-xl h-full bg-[#080a12]/95 backdrop-blur-2xl border-l border-white/[0.08] shadow-2xl p-6 md:p-10 flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Case Study // {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-400 hover:text-white transition-all text-xs font-mono"
            aria-label="Close Case Study"
          >
            <span>[ ESC ]</span>
            <X className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Project Title & Subtitle */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">
            {project.title}
          </h2>
          <p className="font-mono text-sm text-cyan-300/80 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Role & Flagship Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
            Role: {project.role}
          </span>
          {project.isFlagship && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" /> Flagship Production System
            </span>
          )}
        </div>

        {/* Challenge / Context */}
        <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
          <h4 className="font-mono text-xs tracking-wider text-slate-400 uppercase mb-2">
            Engineering Overview
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Architecture Highlights */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="mb-6">
            <h4 className="font-mono text-xs tracking-wider text-cyan-400 uppercase mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Architectural Highlights
            </h4>
            <div className="space-y-2.5">
              {project.architectureHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Deliverables */}
        <div className="mb-6">
          <h4 className="font-mono text-xs tracking-wider text-indigo-400 uppercase mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4" /> Key Deliverables & Systems Built
          </h4>
          <ul className="space-y-2">
            {project.keyDeliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <span className="text-indigo-400 font-bold font-mono">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quantified Metrics */}
        {project.metrics && (
          <div className="mb-6 p-4 rounded-2xl bg-cyan-500/[0.05] border border-cyan-500/20">
            <span className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase block mb-1">
              Production Impact & Telemetry
            </span>
            <span className="text-sm font-semibold text-white">
              {project.metrics}
            </span>
          </div>
        )}

        {/* Full Technology Stack */}
        <div className="mb-8">
          <h4 className="font-mono text-xs tracking-wider text-slate-400 uppercase mb-3">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="mt-auto pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
          {onOpenAllProjects && (
            <Button
              type="button"
              onClick={() => {
                onClose();
                onOpenAllProjects();
              }}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold rounded-xl text-xs h-10 shadow-lg shadow-cyan-500/20"
            >
              Explore All 13 Projects
            </Button>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline flex-1"
            >
              <Button
                variant="outline"
                className="w-full border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 rounded-xl text-xs h-10 gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Link
              </Button>
            </a>
          )}
        </div>
      </aside>
    </div>
  );
};
