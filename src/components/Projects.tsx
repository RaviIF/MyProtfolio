import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Fruit Samurai",
      description: "Hand-tracking-based game using Mediapipe. Players slice fruits using hand gestures, combining traditional fun gameplay with advanced interactive control.",
      role: "Jr. Game Developer",
      responsibilities: "Hand tracking, gesture slicing, UI implementation",
      tech: ["Unity3D", "C#", "Mediapipe"],
      category: "Game"
    },
    {
      title: "Fiction OT",
      description: "Medical visualization system for surgical training with hand-eye coordination improvements and simulation of medical imaging (CT, MRI, Endoscopy).",
      role: "Jr. Unity Developer",
      responsibilities: "XR integration, visualization logic",
      tech: ["Unity3D", "C#", "XR"],
      category: "Medical"
    },
    {
      title: "Clean the City",
      description: "A black-hole-based mobile game for environmental cleanup gameplay.",
      role: "Jr. Unity Developer",
      responsibilities: "Ad integration, UI/UX improvements, shadow and lighting tweaks",
      tech: ["Unity3D", "C#"],
      category: "Mobile Game"
    },
    {
      title: "Alien Runner",
      description: "PC motion-controlled game using body tracking with Mediapipe.",
      role: "Jr. Game Developer",
      responsibilities: "Motion detection system development",
      tech: ["Unity3D", "C#", "Mediapipe"],
      category: "PC Game"
    },
    {
      title: "Enter If You Dare",
      description: "Gesture-based ghost elimination game with immersive interactive controls.",
      role: "Jr. Game Developer",
      responsibilities: "Gesture detection system development",
      tech: ["Unity3D", "C#", "Mediapipe"],
      category: "Game"
    },
    {
      title: "3D Bone Visualizing (HoloLens)",
      description: "Interactive visualization for medical applications using HoloLens mixed reality.",
      role: "Jr. Game Developer",
      responsibilities: "XR rendering and data visualization",
      tech: ["Unity3D", "C#", "HoloLens"],
      category: "Medical XR"
    },
    {
      title: "Streaming Application for OT (HoloLens)",
      description: "Real-time video streaming and camera capture system using MRTK for HoloLens in operating theaters.",
      role: "Jr. Game Developer",
      responsibilities: "Streaming setup, camera integration",
      tech: ["Unity3D", "C#", "MRTK", "HoloLens"],
      category: "Medical XR"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-navy-dark/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group"
              >
                <div className="mb-4">
                  <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-primary">Role:</span>
                    <p className="text-sm text-foreground/80">{project.role}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary">Key Work:</span>
                    <p className="text-sm text-foreground/80">{project.responsibilities}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-border/30">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-muted/30 text-foreground/70 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
