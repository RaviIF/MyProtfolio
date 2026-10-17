import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software & Game Developer",
      company: "Invisible Fiction",
      location: "Anand, Gujarat, India",
      period: "May 2023 – Present",
      type: "Full-Time",
      description:
        "Lead engineer architecting real-time 3D, spatial computing (XR), and edge computer-vision platforms across Unity, Unreal Engine 5, and Three.js.",
      highlights: [
        "Solo-built SmartScopy: ultra-low latency live video pipeline streaming endoscopic surgery to XREAL glasses & HoloLens 2 with 3D anatomical overlays.",
        "Core contributor to NoPainHeals clinical therapy platform: delivered 12+ interactive floor-projection games and hardened Linux kiosk deployment.",
        "Engineered zero-trust E2EE crypto tunnel (X25519, HKDF-SHA256, AES-256-GCM) and offline-first IndexedDB telemetry queue with automatic retry.",
        "Built MimadimPlus automated CAD-to-3D engine in UE5: C++ procedural generation for walls, doors, windows, and arbitrary polygon floor tile clipping math.",
        "Engineered camera-based edge AI motion tracking with custom YOLO & ONNX models, eliminating video buffer latency via DirectShow."
      ]
    },
    {
      title: "Computer Engineering Intern",
      company: "Invisible Fiction",
      location: "Anand, Gujarat, India",
      period: "January 2023 – May 2023",
      type: "Internship",
      description:
        "Researched and built computer-vision prototypes combining image processing algorithms with interactive application logic.",
      highlights: [
        "Engineered an Iris Recognition and Distance Detection prototype in Python & OpenCV for user screen fatigue monitoring.",
        "Developed geometric distance calculation from optical camera matrices and pupil contour isolation.",
        "Integrated Python biometric tracking scripts with Unity and C# runtime applications.",
        "Researched algorithmic optimizations for lightweight real-time webcam inference."
      ]
    }
  ];

  return (
    <section id="experience" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full" />
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
              Production engineering career building mission-critical medical XR, automated procedural 3D engines, and clinical healthcare platforms.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 md:p-10 rounded-3xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <Briefcase className="w-7 h-7 text-cyan-400" />
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    {/* Header: Title, Company, Period */}
                    <div className="flex flex-wrap justify-between items-start mb-3 gap-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400 font-medium">
                          <span className="flex items-center gap-1.5 text-zinc-200">
                            <Building2 className="w-4 h-4 text-cyan-400" />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <span className="px-3.5 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-semibold flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Role Description */}
                    <p className="text-zinc-200 text-sm md:text-base leading-relaxed mb-6 font-normal">
                      {exp.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-3 pt-5 border-t border-white/[0.08]">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                        Key Engineering Feats & Contributions
                      </h4>
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                          <span className="text-sm text-zinc-300 leading-relaxed">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
