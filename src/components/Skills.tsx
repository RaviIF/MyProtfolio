import { Card } from "@/components/ui/card";
import { Code2, Gamepad2, Smartphone, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Gamepad2,
      title: "Core Skills",
      skills: ["Unity 3D", "XR/AR/MR", "UI/UX Design", "Gameplay Programming"]
    },
    {
      icon: Code2,
      title: "Programming",
      skills: ["C#", "C++", "C", "Python"]
    },
    {
      icon: Smartphone,
      title: "Technologies & SDKs",
      skills: ["Mediapipe", "Vuforia", "Agora SDK", "OpenXR", "MRTK", "In-App Purchases"]
    },
    {
      icon: Cpu,
      title: "Tools & Hardware",
      skills: ["Figma (UI Design)", "Raspberry Pi", "HoloLens", "Image Processing"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-muted/50 text-foreground/80 rounded-lg text-sm border border-border/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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
