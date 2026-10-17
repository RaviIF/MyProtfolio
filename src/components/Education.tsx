import { Card } from "@/components/ui/card";
import { GraduationCap, Award, CheckCircle2, Calendar, BookOpen } from "lucide-react";

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
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Academic foundation in Computer Engineering paired with verified industry credentials in AI, spatial computing, and enterprise architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Formal Education Card */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Formal Education
              </h3>

              <Card className="p-8 bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all rounded-2xl shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="text-xl font-bold text-foreground">
                        Bachelor of Engineering (B.E.)
                      </h4>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 font-semibold whitespace-nowrap">
                        2019 – 2023
                      </span>
                    </div>

                    <p className="text-primary font-medium text-sm mb-2">
                      Computer Engineering
                    </p>

                    <p className="text-muted-foreground text-sm mb-4">
                      Ipcowala Institute of Engineering & Technology, Anand, Gujarat
                    </p>

                    <div className="p-3 rounded-lg bg-muted/30 border border-border/30 flex items-center justify-between text-xs font-semibold">
                      <span className="text-muted-foreground">Cumulative Grade:</span>
                      <span className="text-primary font-mono text-sm">CGPA: 8.30 / 10.0</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Industry Certifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Industry Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all rounded-xl shadow-lg"
                  >
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-foreground mb-3">
                      {cert.title}
                    </h4>

                    <div className="space-y-1.5">
                      {cert.credentials.map((cred, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
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
