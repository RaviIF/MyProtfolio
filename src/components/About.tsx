import { Card } from "@/components/ui/card";
import { CheckCircle2, Box, Radio, ShieldCheck, Eye } from "lucide-react";

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
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          </div>

          <Card className="p-8 md:p-10 bg-card/40 backdrop-blur-md border-border/50 rounded-2xl shadow-xl">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 font-normal">
              I am a <strong className="text-primary font-semibold">Software and Game Developer</strong> with 3+ years of production experience building high-performance 3D applications, spatial computing (XR) platforms, and edge computer-vision systems across <strong className="text-foreground">Unity (C#)</strong>, <strong className="text-foreground">Unreal Engine 5 (C++)</strong>, and <strong className="text-foreground">Three.js / WebGL</strong>.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
              My engineering work spans mission-critical medical technology — such as solo-building <strong className="text-foreground/90">SmartScopy</strong> to stream live surgical endoscopy feeds into XR headsets with 3D anatomical overlays — to clinical healthcare platforms like <strong className="text-foreground/90">NoPainHeals</strong> (12+ interactive floor-projection games, zero-trust E2EE telemetry, and hardened Linux kiosks), and <strong className="text-foreground/90">MimadimPlus</strong> (automated procedural CAD-to-3D architectural generation in UE5).
            </p>

            {/* Core Competency Pillars */}
            <div className="grid md:grid-cols-2 gap-5 pt-4 border-t border-border/40">
              {competencies.map((comp, index) => {
                const Icon = comp.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-card/50 border border-border/40 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-base font-bold text-foreground">
                        {comp.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-normal pl-12">
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
