import React from "react";
import { STATIONS } from "./types";

interface LeftNavRailProps {
  activeStationId: string;
  onSelectStation: (id: string) => void;
}

export const LeftNavRail: React.FC<LeftNavRailProps> = ({ activeStationId, onSelectStation }) => {
  return (
    <aside
      aria-label="Section Navigation Rail"
      className="fixed left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-5 pointer-events-auto select-none"
    >
      {/* Background Rail Line */}
      <div className="absolute left-[7px] top-1 bottom-1 w-[1.5px] bg-white/[0.08]" />

      {STATIONS.map((station) => {
        const isActive = activeStationId === station.id;
        return (
          <button
            key={station.id}
            type="button"
            onClick={() => onSelectStation(station.id)}
            className="group relative flex items-center gap-3 text-left focus:outline-none"
          >
            {/* Dot Indicator */}
            <div
              className={`relative z-10 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? "border border-cyan-400/80 bg-[#07080d] shadow-sm shadow-cyan-400/50 scale-110"
                  : "border border-white/20 bg-[#07080d] group-hover:border-cyan-400/40"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee] scale-100"
                    : "bg-transparent group-hover:bg-white/40 scale-75"
                }`}
              />
            </div>

            {/* Station Text Label */}
            <div className="flex flex-col">
              <span
                className={`font-mono text-[11px] tracking-wider transition-all duration-200 ${
                  isActive
                    ? "text-cyan-400 font-bold translate-x-1"
                    : "text-slate-400/60 font-medium group-hover:text-slate-200 group-hover:translate-x-0.5"
                }`}
              >
                {station.label}
              </span>
            </div>
          </button>
        );
      })}
    </aside>
  );
};
