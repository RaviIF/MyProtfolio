import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectItem } from "@/data/projectsData";

interface SlideProjectProps {
  stationId: string;
  stationCode: string;
  project: ProjectItem;
  onInspectCase: (project: ProjectItem) => void;
  onOpenProjectsDeck?: () => void;
}

export const SlideProject: React.FC<SlideProjectProps> = ({
  stationId,
  stationCode,
  project,
  onInspectCase,
  onOpenProjectsDeck,
}) => {
  return (
    <section
      id={stationId}
      className="min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Station Code Header */}
        <div className="mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            STATION {stationCode} // {project.category}
          </span>
        </div>

        {/* Large Brutalist Project Name */}
        <div className="mb-6">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-3">
            {project.title.toUpperCase()}
          </h2>
          <p className="font-mono text-xs sm:text-sm md:text-base text-cyan-300/80 max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Project Card Container */}
        <div className="p-6 md:p-8 rounded-3xl bg-[#090c16]/85 backdrop-blur-2xl border border-white/[0.08] shadow-2xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Description */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Highlights */}
          {project.architecturalHighlights && project.architecturalHighlights.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {project.architecturalHighlights.slice(0, 2).map((highlight, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Telemetry Capsule & Tags */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
            {project.metrics && (
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs font-semibold text-white">
                  {project.metrics}
                </span>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Button
            type="button"
            onClick={() => onInspectCase(project)}
            className="h-11 px-7 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold gap-2 shadow-lg shadow-cyan-500/25 transition-all text-xs font-mono"
          >
            [ INSPECT CASE ]
            <ArrowRight className="w-4 h-4" />
          </Button>

          {onOpenProjectsDeck && (
            <Button
              type="button"
              onClick={onOpenProjectsDeck}
              variant="outline"
              className="h-11 px-5 rounded-xl border-white/10 hover:bg-white/[0.05] text-slate-300 font-semibold gap-2 text-xs font-mono"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              [ ALL PROJECTS (13) ]
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
