import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  PROJECT_CATEGORIES,
  PROJECTS_DATA,
  ProjectCategory,
  ProjectItem
} from "@/data/projectsData";
import ProjectDetailModal from "./ProjectDetailModal";
import { ArrowUpRight, Sparkles } from "lucide-react";

const getCategoryBadgeClass = (category: string) => {
  switch (category) {
    case "Medical XR":
      return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
    case "Unreal Engine 5":
      return "bg-purple-500/10 text-purple-400 border-purple-500/30";
    case "Healthcare & Web3D":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
    case "AI & Vision":
      return "bg-amber-500/10 text-amber-400 border-amber-500/30";
    case "Games & VR":
      return "bg-rose-500/10 text-rose-400 border-rose-500/30";
    default:
      return "bg-primary/20 text-primary border-primary/30";
  }
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Filter projects by selected category
  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  // Calculate project counts for each category
  const getCategoryCount = (category: ProjectCategory) => {
    if (category === "All") return PROJECTS_DATA.length;
    return PROJECTS_DATA.filter((p) => p.category === category).length;
  };

  return (
    <section id="projects" className="py-24 bg-navy-dark/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects & Systems</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-base md:text-lg">
              Explore 13 production systems engineered across Medical XR, Unreal Engine 5 procedural pipelines, Web3D healthcare kiosks, and edge AI computer vision.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
            {PROJECT_CATEGORIES.map((category) => {
              const count = getCategoryCount(category);
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-2 border ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-glow scale-105"
                      : "bg-card/50 text-foreground/70 border-border/40 hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col justify-between p-6 bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                <div>
                  {/* Category Badge & Featured indicator */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge
                      className={`text-xs px-2.5 py-0.5 border ${getCategoryBadgeClass(
                        project.category
                      )}`}
                    >
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <span className="text-[11px] font-semibold text-primary flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Flagship
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-primary" />
                  </h3>
                  <p className="text-xs font-medium text-primary/80 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Role */}
                  <div className="mb-3">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">
                      Role:
                    </span>
                    <span className="text-xs text-foreground/80 font-medium ml-1.5">
                      {project.role}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Pills Footer */}
                <div className="pt-4 border-t border-border/30">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 bg-muted/40 text-foreground/75 rounded border border-border/30 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[11px] px-1.5 py-0.5 text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs font-semibold text-primary hover:text-primary group-hover:bg-primary/10 transition-colors p-0 h-8 justify-start"
                  >
                    View Architecture & Details →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Deep-dive Detail Dialog */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
