import { Card } from "@/components/ui/card";
import { Box, Glasses, Code2, Eye, ShieldCheck, MonitorCheck } from "lucide-react";

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
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Core Technologies</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Production-tested toolkit spanning real-time 3D simulation, spatial computing, low-latency video streaming, and hardened cryptographic infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all rounded-2xl shadow-lg flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors border border-primary/30">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
                      {category.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-muted/40 text-foreground/80 rounded-md text-xs border border-border/30 font-medium"
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
