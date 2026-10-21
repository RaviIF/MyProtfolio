import { Card } from "@/components/ui/card";
import { GraduationCap, Award, CheckCircle2, BookOpen } from "lucide-react";

const Education = () => {
  const certifications = [
    {
      issuer: "Anthropic",
      title: "Claude Foundation & Engineering Suite",
      credentials: ["Claude 101", "Claude Code 101", "Claude Platform 101"],
      year: "2024"
    },
    {
      issuer: "Edunet Foundation / SAP CSR",
      title: "Emerging Technologies: AI, IoT & ERP",
      credentials: ["Code Unnati Certification", "Machine Learning & IoT Systems"],
      year: "2022–2023"
    },
    {
      issuer: "SAP",
      title: "ABAP Programming & Enterprise Systems",
      credentials: ["Learn the ABCs of ABAP Programming on SAP BTP"],
      year: "2023"
    }
  ];

  return (
    <section id="education" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full" />
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
              Academic foundation in Computer Engineering paired with verified industry credentials in AI, spatial computing, and enterprise architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Formal Education Card */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Formal Education
              </h3>

              <Card className="p-8 rounded-3xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 transition-all shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="text-xl font-bold text-white">
                        Bachelor of Engineering (B.E.)
                      </h4>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold font-mono whitespace-nowrap">
                        2019 – 2023
                      </span>
                    </div>

                    <p className="text-cyan-400 font-medium text-sm mb-2">
                      Computer Engineering
                    </p>

                    <p className="text-zinc-400 text-sm mb-5">
                      Ipcowala Institute of Engineering & Technology, Anand, Gujarat
                    </p>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between text-xs font-semibold">
                      <span className="text-zinc-400">Cumulative Grade:</span>
                      <span className="text-cyan-400 font-mono text-sm">CGPA: 8.30 / 10.0</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Industry Certifications */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Industry Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="p-6 rounded-2xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-indigo-500/40 transition-all shadow-lg"
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-3">
                      {cert.title}
                    </h4>

                    <div className="space-y-1.5">
                      {cert.credentials.map((cred, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span>{cred}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
