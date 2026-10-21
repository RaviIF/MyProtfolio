import { Card } from "@/components/ui/card";
import { Box, Glasses, Code2, Eye, ShieldCheck, MonitorCheck, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Box,
      title: "Engines & 3D Systems",
      skills: [
        "Unreal Engine 5 (C++)",
        "Unity 3D (C#)",
        "Three.js",
        "WebGL",
        "UProceduralMeshComponent",
        "HLSL/GLSL Shaders",
        "Blueprints",
        "Skeletal Animation",
        "Physics & Collision"
      ]
    },
    {
      icon: Glasses,
      title: "Spatial Computing & XR",
      skills: [
        "Microsoft HoloLens 2",
        "MRTK",
        "OpenXR",
        "XREAL Glasses",
        "Meta Quest / PCVR",
        "3D Volumetric CT/MRI Viz",
        "Spatial Hand Tracking",
        "Vuforia"
      ]
    },
    {
      icon: Code2,
      title: "Programming Languages",
      skills: [
        "C++",
        "C#",
        "Python",
        "JavaScript (ES6+)",
        "TypeScript",
        "HLSL / GLSL",
        "Bash / Shell",
        "HTML5 / CSS3"
      ]
    },
    {
      icon: Eye,
      title: "Computer Vision & Edge AI",
      skills: [
        "Ultralytics YOLO",
        "ONNX Runtime",
        "MediaPipe Pose & Hand",
        "OpenCV",
        "DirectShow (cv2.CAP_DSHOW)",
        "Iris Biometric Tracking",
        "Gesture Recognition"
      ]
    },
    {
      icon: MonitorCheck,
      title: "Interactive Kiosks & Web",
      skills: [
        "Electron Kiosk Lockdown",
        "Node.js",
        "Linux / Ubuntu Kiosk",
        "WebSockets (Pusher v7)",
        "IndexedDB Offline Queue",
        "Vite",
        "REST APIs",
        "Web Audio API"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Security & Cryptography",
      skills: [
        "End-to-End Encryption (E2EE)",
        "X25519 Key Exchange",
        "HKDF-SHA256 Derivation",
        "AES-256-GCM Cipher",
        "Hardware Fingerprinting",
        "Zero-Trust Telemetry"
      ]
    }
  ];

  return (
    <section id="skills" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              Skills & <span className="gradient-text">Core Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full" />
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
              Production-tested toolkit spanning real-time 3D simulation, spatial computing, low-latency video streaming, and hardened cryptographic infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-7 rounded-2xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.08]">
                      {category.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white/[0.04] text-zinc-300 rounded-md text-xs border border-white/[0.08] font-medium group-hover:border-white/15 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
