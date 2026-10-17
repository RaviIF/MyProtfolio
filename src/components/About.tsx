import { Card } from "@/components/ui/card";
import { CheckCircle2, Box, Radio, ShieldCheck, Eye, Sparkles } from "lucide-react";

const About = () => {
  const competencies = [
    {
      icon: Box,
      title: "Procedural 3D & C++ Systems",
      description: "Automated CAD-to-3D mesh generation, polygon room clipping math, and custom runtime tools in Unreal Engine 5."
    },
    {
      icon: Radio,
      title: "Low-Latency XR Video Pipelines",
      description: "Sub-100ms real-time camera streaming to XREAL glasses & HoloLens 2 with 3D volumetric CT/MRI overlays."
    },
    {
      icon: ShieldCheck,
      title: "Kiosk Hardening & Zero-Trust E2EE",
      description: "Commercial Linux/Ubuntu kiosk deployments with X25519, HKDF-SHA256, AES-256-GCM, and offline-first telemetry queues."
    },
    {
      icon: Eye,
      title: "Computer Vision & Edge AI",
      description: "DirectShow buffer-free camera processing, YOLO + ONNX models, and MediaPipe full-body tracking for controller-free gameplay."
    }
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Engineering Profile
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full" />
          </div>

          <Card className="p-8 md:p-12 rounded-3xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/3 right-1/3 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />

            <p className="text-lg md:text-xl text-zinc-100 leading-relaxed mb-6 font-normal">
              I am a <strong className="text-cyan-400 font-semibold">Software and Game Developer</strong> with 3+ years of production experience building high-performance 3D applications, spatial computing (XR) platforms, and edge computer-vision systems across <strong className="text-white">Unity (C#)</strong>, <strong className="text-white">Unreal Engine 5 (C++)</strong>, and <strong className="text-white">Three.js / WebGL</strong>.
            </p>

            <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-10">
              My engineering work spans mission-critical medical technology — such as solo-building <strong className="text-zinc-200">SmartScopy</strong> to stream live surgical endoscopy feeds into XR headsets with 3D anatomical overlays — to clinical healthcare platforms like <strong className="text-zinc-200">NoPainHeals</strong> (12+ interactive floor-projection games, zero-trust E2EE telemetry, and hardened Linux kiosks), and <strong className="text-zinc-200">MimadimPlus</strong> (automated procedural CAD-to-3D architectural generation in UE5).
            </p>

            {/* Core Competency Pillars */}
            <div className="grid md:grid-cols-2 gap-5 pt-6 border-t border-white/[0.08]">
              {competencies.map((comp, index) => {
                const Icon = comp.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/40 transition-all hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-3.5 mb-2.5">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {comp.title}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed pl-13">
                      {comp.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
