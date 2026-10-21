import React from "react";

export const ScrollIndicator: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none select-none opacity-80"
    >
      {/* Animated Vertical Line & Dot */}
      <div className="relative w-[1.5px] h-9 bg-gradient-to-b from-cyan-400/80 via-indigo-400/40 to-transparent">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-bounce" />
      </div>

      {/* Label */}
      <span className="font-mono text-[9px] tracking-[0.25em] text-slate-400 uppercase">
        SCROLL TO DISCOVER
      </span>
    </div>
  );
};
