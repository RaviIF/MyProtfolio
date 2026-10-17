import React from "react";
import { Gamepad2, Eye, Code, Cpu, ShieldCheck, Box } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SlideSkills: React.FC = () => {
  const skillClusters = [
    {
      icon: Gamepad2,
      title: "Game Engines & 3D",
      color: "text-cyan-400 border-cyan-500/30",
      skills: ["Unity (C#)", "Unreal Engine 5 (C++)", "Three.js", "WebGL", "Blender"]
    },
    {
      icon: Eye,
      title: "Spatial Computing (XR)",
      color: "text-indigo-400 border-indigo-500/30",
      skills: ["HoloLens 2 (MRTK)", "XREAL Air / Light", "OpenXR", "WebXR", "Spatial Audio"]
    },
    {
      icon: Code,
      title: "Core Languages",
      color: "text-purple-400 border-purple-500/30",
      skills: ["C#", "C++", "TypeScript", "JavaScript", "Python", "GLSL / HLSL"]
    },
    {
      icon: Cpu,
      title: "Computer Vision & AI",
      color: "text-emerald-400 border-emerald-500/30",
      skills: ["DirectShow", "YOLOv8", "ONNX Runtime", "MediaPipe", "OpenCV"]
    },
    {
      icon: Box,
      title: "Kiosks & Hardware",
      color: "text-blue-400 border-blue-500/30",
      skills: ["Linux / Ubuntu", "Hardened Kiosks", "Floor Projectors", "Sensors", "WebSockets"]
    },
    {
      icon: ShieldCheck,
      title: "Security & Cryptography",
      color: "text-amber-400 border-amber-500/30",
      skills: ["X25519 Elliptic Curve", "AES-256-GCM", "HKDF-SHA256", "Zero-Trust Tunnel"]
    }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Station Label */}
        <div className="mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            STATION 06 // CORE SYSTEMS & ARCHITECTURE
          </span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            Technical Stack & <span className="gradient-text">Architecture</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-slate-400 max-w-2xl">
            6 Specialized Domain Clusters deployed across enterprise medical, CAD automation, and commercial kiosk installations.
          </p>
        </div>

        {/* 6 Skill Clusters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillClusters.map((cluster, idx) => {
            const Icon = cluster.icon;
            return (
              <Card
                key={idx}
                className="p-5 rounded-2xl bg-[#090c16]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/40 transition-all shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-white/[0.04] border flex items-center justify-center ${cluster.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {cluster.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cluster.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
