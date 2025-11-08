import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Strong teamwork and communication",
    "Quick learning and multitasking",
    "Responsible for maintaining applications post-release",
    "Cross-platform development expertise"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              I'm a Unity 3D Game Developer with experience working in dynamic, collaborative 
              environments. I focus on enhancing user experiences, creating cross-platform 
              applications, and developing interactive games for Android, iOS, Windows, Mac, 
              and WebGL. I'm a quick learner with strong problem-solving skills and a passion 
              for immersive technology.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
