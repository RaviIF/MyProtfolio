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
import { ArrowUpRight, Sparkles, Layers } from "lucide-react";

const getCategoryBadgeClass = (category: string) => {
  switch (category) {
    case "Medical XR":
      return "bg-cyan-500/10 text-cyan-300 border-cyan-500/30";
    case "Unreal Engine 5":
      return "bg-purple-500/10 text-purple-300 border-purple-500/30";
    case "Healthcare & Web3D":
      return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
    case "AI & Vision":
      return "bg-amber-500/10 text-amber-300 border-amber-500/30";
    case "Games & VR":
      return "bg-rose-500/10 text-rose-300 border-rose-500/30";
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
    <section id="projects" className="py-28 relative">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-purple-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" /> Production Portfolio
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              Featured <span className="gradient-text">Projects & Systems</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-6 rounded-full" />
            <p className="text-zinc-400 text-base md:text-lg">
              Explore 13 production systems engineered across Medical XR, Unreal Engine 5 procedural pipelines, Web3D healthcare kiosks, and edge AI computer vision.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14">
            {PROJECT_CATEGORIES.map((category) => {
              const count = getCategoryCount(category);
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white border-transparent shadow-lg shadow-cyan-500/25 scale-105"
                      : "bg-[#0E101A]/80 text-zinc-400 border-white/[0.08] hover:border-white/25 hover:text-white backdrop-blur-md"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-white/[0.06] text-zinc-400"
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
                className={`group relative flex flex-col justify-between p-7 rounded-2xl bg-[#0D0F1A]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer overflow-hidden ${
                  project.featured ? "ring-1 ring-cyan-500/30" : ""
                }`}
              >
                {/* Top Glowing Accent Line for Flagship Cards */}
                {project.featured && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                )}

                <div>
                  {/* Category Badge & Featured indicator */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge
                      className={`text-xs px-2.5 py-0.5 border ${getCategoryBadgeClass(
                        project.category
                      )}`}
                    >
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <span className="text-[11px] font-semibold text-cyan-400 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        <Sparkles className="w-3 h-3 text-cyan-400" /> Flagship
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 mb-3 tracking-wide">
                    {project.subtitle}
                  </p>

                  {/* Role */}
                  <div className="mb-3">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500">
                      Role:
                    </span>
                    <span className="text-xs text-zinc-300 font-medium ml-1.5">
                      {project.role}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Pills Footer */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-0.5 bg-white/[0.04] text-zinc-300 rounded-md border border-white/[0.08] font-mono group-hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[11px] px-2 py-0.5 text-zinc-500 font-mono">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span>View Architecture & Case Study</span>
                    <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                  </div>
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
