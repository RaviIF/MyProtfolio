import React from "react";

interface StudioLoaderProps {
  progress: number; // 0 to 100
  isLoaded: boolean;
}

export const StudioLoader: React.FC<StudioLoaderProps> = ({ progress, isLoaded }) => {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#07080d]/90 backdrop-blur-xl transition-all duration-700 ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center w-36 h-36">
        {/* Outer glowing blur ring */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl animate-pulse" />

        {/* SVG Progress Ring */}
        <svg className="w-32 h-32 -rotate-90 transform">
          {/* Background circle */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            className="stroke-slate-800"
            strokeWidth="3"
            fill="transparent"
          />
          {/* Active cyan gradient stroke */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            className="stroke-cyan-400 transition-all duration-300 ease-out"
            strokeWidth="3.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Center percentage & tech icon */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="font-mono text-xl font-bold tracking-tight text-cyan-400">
            {Math.floor(progress)}%
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 mt-0.5">
            READY
          </span>
        </div>
      </div>

      {/* Futuristic status label */}
      <div className="mt-6 flex flex-col items-center gap-1.5 text-center">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-mono text-xs font-semibold tracking-widest text-slate-300 uppercase">
            Initializing Spatial Lab
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-wide text-slate-500">
          Unreal Engine 5 • Three.js • Spatial WebGL
        </span>
      </div>
    </div>
  );
};
