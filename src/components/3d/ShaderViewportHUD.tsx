import React, { useEffect } from "react";
import { ShaderViewportMode } from "./types";
import { Layers, Eye, Box } from "lucide-react";

interface ShaderViewportHUDProps {
  mode: ShaderViewportMode;
  onModeChange: (mode: ShaderViewportMode) => void;
}

export const ShaderViewportHUD: React.FC<ShaderViewportHUDProps> = ({
  mode,
  onModeChange,
}) => {
  // Keyboard shortcuts (1: LIT, 2: WIREFRAME, 3: X-RAY)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "1") {
        onModeChange("lit");
      } else if (e.key === "2") {
        onModeChange("wireframe");
      } else if (e.key === "3") {
        onModeChange("xray");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onModeChange]);

  const modes: { id: ShaderViewportMode; label: string; shortcut: string; icon: React.ReactNode }[] = [
    { id: "lit", label: "LIT", shortcut: "1", icon: <Eye className="w-3 h-3" /> },
    { id: "wireframe", label: "WIREFRAME", shortcut: "2", icon: <Box className="w-3 h-3" /> },
    { id: "xray", label: "X-RAY", shortcut: "3", icon: <Layers className="w-3 h-3" /> },
  ];

  return (
    <aside
      aria-label="3D Viewport Shader Buffer Controller"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-1.5 pointer-events-auto select-none"
    >
      {/* Top Tag Label */}
      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#0a0d16]/80 border border-white/[0.08] backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="font-mono text-[9px] tracking-widest text-slate-400 uppercase">
          VIEWPORT BUFFER
        </span>
      </div>

      {/* Mode Buttons Capsule */}
      <div className="flex items-center gap-1 p-1 rounded-xl bg-[#090c14]/90 border border-white/[0.12] backdrop-blur-xl shadow-2xl shadow-cyan-950/40">
        {modes.map((m) => {
          const isActive = mode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => onModeChange(m.id)}
              title={`Switch to ${m.label} mode (Shortcut: ${m.shortcut})`}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-mono text-[11px] transition-all duration-200 ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_12px_rgba(34,211,238,0.3)] font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] border border-transparent"
              }`}
            >
              <span className={isActive ? "text-cyan-400" : "text-slate-500"}>
                {m.icon}
              </span>
              <span>[{m.label}]</span>
              <span className="text-[9px] opacity-40 hidden sm:inline">
                {m.shortcut}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
