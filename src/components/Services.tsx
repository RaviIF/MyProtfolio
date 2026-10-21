import { Card } from "@/components/ui/card";
import { Glasses, Box, MonitorCheck, Eye, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Glasses,
      title: "Spatial Computing & Medical XR",
      description:
        "Mission-critical XR applications with sub-100ms video streaming, surgical endoscope feeds, and volumetric medical data visualization.",
      features: [
        "Operating theatre live camera & endoscope video pipelines",
        "Targeted headsets: Microsoft HoloLens 2, XREAL Air, Meta Quest",
        "MRTK & OpenXR gesture interaction and spatial anchoring",
        "Interactive 3D anatomical reconstruction from CT, MRI, and X-ray"
      ]
    },
    {
      icon: Box,
      title: "Unreal Engine 5 & Procedural C++ Systems",
      description:
        "High-performance C++ pipelines converting raw architectural drawings into real-time interactive 3D simulations without manual modeling.",
      features: [
        "Automated 2D CAD/DXF-to-3D procedural building engines",
        "Custom C++ mesh generation via UProceduralMeshComponent",
        "Geometric clipping algorithms for complex polygon room tile contours",
        "Runtime interior customization and dynamic asset swapping"
      ]
    },
    {
      icon: MonitorCheck,
      title: "Interactive Kiosks & Web3D Platforms",
      description:
        "Commercial rehabilitation stations, multi-modal floor projections, and zero-trust encrypted telemetry for clinical deployments.",
      features: [
        "Hardened Linux (Ubuntu) & Windows Electron kiosk architectures",
        "Zero-trust E2EE crypto tunnel (X25519, HKDF-SHA256, AES-256-GCM)",
        "Offline-first IndexedDB metric sync queues with automatic retries",
        "Modular Three.js / WebGL architecture and AI voice recognition"
      ]
    },
    {
      icon: Eye,
      title: "Computer Vision & Edge AI",
      description:
        "Real-time vision pipelines that eliminate input latency and transform standard camera feeds into controller-free interactive experiences.",
      features: [
        "DirectShow camera capture (cv2.CAP_DSHOW) eliminating buffer lag",
        "Hybrid ML models combining MediaPipe skeletal landmarks with YOLO/ONNX",
        "Controller-free full-body games (Fruit Samurai, Alien Runner, etc.)",
        "Biometric distance tracking and iris localization algorithms"
      ]
    }
  ];

  return (
    <section id="services" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              Engineering <span className="gradient-text">Services & Capabilities</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full" />
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
              Specialized engineering consulting and end-to-end development for spatial computing, procedural 3D, and clinical kiosk hardware.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 md:p-10 rounded-3xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-2xl flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 mb-6 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 pt-5 border-t border-white/[0.08]">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                          <span className="text-sm text-zinc-300 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
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

export default Services;
