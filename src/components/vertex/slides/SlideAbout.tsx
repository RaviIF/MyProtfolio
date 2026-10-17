import React from "react";
import { Box, Radio, ShieldCheck, Eye, GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SlideAbout: React.FC = () => {
  const competencies = [
    {
      icon: Box,
      title: "Procedural 3D & C++ Systems",
      description: "Automated CAD-to-3D mesh generation, polygon clipping math, and runtime procedural floor systems in Unreal Engine 5."
    },
    {
      icon: Radio,
      title: "Low-Latency XR Video Pipelines",
      description: "Sub-100ms real-time camera streaming to XREAL glasses & HoloLens 2 with 3D volumetric CT/MRI anatomical overlays."
    },
    {
      icon: ShieldCheck,
      title: "Kiosk Hardening & Zero-Trust E2EE",
      description: "Commercial Linux/Ubuntu kiosk deployments with X25519, HKDF-SHA256, AES-256-GCM, and offline-first telemetry queues."
    },
    {
      icon: Eye,
      title: "Computer Vision & Edge AI",
      description: "DirectShow buffer-free camera processing, YOLO + ONNX models, and MediaPipe body tracking for controller-free gameplay."
    }
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative px-6 md:px-16 py-24 select-none"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Station Label */}
        <div className="mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            STATION 01 // ENGINEERING PROFILE
          </span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            Core Technical <span className="gradient-text">Competencies</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-slate-400 max-w-2xl">
            Software & Game Developer at Invisible Fiction (May 2023 – Present). Bridging low-level C++ engine architecture with immersive spatial computing.
          </p>
        </div>

        {/* 4 Competency Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {competencies.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <Card
                key={idx}
                className="p-5 md:p-6 rounded-2xl bg-[#0a0d18]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-400/40 transition-all shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{comp.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {comp.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">
                B.E. in Computer Engineering (CGPA: 8.30 / 10.0)
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Ipcowala Institute of Eng. & Tech. (2019 – 2023)
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">
                Anthropic & SAP Industry Certifications
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Claude Architecture • SAP CSR (Code Unnati)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
