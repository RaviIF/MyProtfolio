import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.E. in Computer Engineering",
      institution: "IPCOWALA Institute of Engineering & Technology",
      details: "CGPA: 8.30, CPI: 8.35",
      year: "2019-2023"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Santram Vidya Mandir, Karamsad",
      details: "49.05%",
      year: "2019"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Vir Vithalbhai High School, Karamsad",
      details: "80.45%",
      year: "2017"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="space-y-6">
            {education.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground mb-1">{item.institution}</p>
                    <p className="text-sm text-foreground/70">{item.details}</p>
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

export default Education;
