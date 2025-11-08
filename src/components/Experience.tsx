import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Unity Developer",
      company: "Invisible Fiction, V.U. Nagar, Anand",
      period: "Current Position",
      description: "Developed multiple Unity-based games and applications. Worked with technologies such as Mediapipe, Agora SDK, Vuforia, OpenXR, and MRTK.",
      highlights: [
        "UI/UX enhancements for multiple platforms",
        "Cross-platform deployment (Android, iOS, Windows, Mac, WebGL)",
        "Post-release maintenance and updates",
        "Integration of cutting-edge XR technologies"
      ]
    },
    {
      title: "Computer Engineer Intern",
      company: "Invisible Fiction, V.U. Nagar, Anand",
      period: "January 2023 – May 2023",
      description: "Worked on Iris Recognition With Distance Project using Image Processing and Python.",
      highlights: [
        "Python development",
        "Unity integration",
        "C# programming",
        "Image processing algorithms"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-navy-dark/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                      <Briefcase className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-lg text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-foreground/80 mb-4">{exp.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span className="text-sm text-foreground/70">{highlight}</span>
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
