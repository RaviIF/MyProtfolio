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
    <section id="experience" className="py-24 bg-navy-dark/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Production engineering career building mission-critical medical XR, automated procedural 3D engines, and clinical healthcare platforms.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 md:p-10 bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all shadow-xl rounded-2xl"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                      <Briefcase className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    {/* Header: Title, Company, Period */}
                    <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground font-medium">
                          <span className="flex items-center gap-1.5 text-foreground/90">
                            <Building2 className="w-4 h-4 text-primary" />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-3.5 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs font-semibold flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Role Description */}
                    <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-6 font-medium">
                      {exp.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2.5 pt-4 border-t border-border/40">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                        Key Engineering Feats & Contributions
                      </h4>
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-foreground/80 leading-relaxed">
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
