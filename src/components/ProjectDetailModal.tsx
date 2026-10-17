import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectItem } from "@/data/projectsData";
import { CheckCircle2, Cpu, Wrench, Layers, ExternalLink } from "lucide-react";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

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

export const ProjectDetailModal = ({
  project,
  isOpen,
  onClose
}: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border border-border/80 p-6 md:p-8 rounded-2xl shadow-2xl">
        <DialogHeader className="text-left space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className={`border px-3 py-1 font-semibold text-xs tracking-wide uppercase ${getCategoryBadgeClass(project.category)}`}>
              {project.category}
            </Badge>
            <span className="text-xs px-2.5 py-1 rounded-md bg-muted/40 text-muted-foreground border border-border/40">
              Role: <span className="text-foreground font-medium">{project.role}</span>
            </span>
          </div>

          <DialogTitle className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            {project.title}
          </DialogTitle>

          <DialogDescription className="text-sm md:text-base text-primary/90 font-medium">
            {project.subtitle}
          </DialogDescription>
        </DialogHeader>

        {/* Overview */}
        <div className="space-y-6 pt-2">
          <div className="p-4 rounded-xl bg-muted/20 border border-border/40 text-foreground/90 text-sm md:text-base leading-relaxed">
            {project.fullDescription}
          </div>

          {/* Key Work & Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Key Engineering Deliverables
            </h4>
            <div className="grid gap-2.5">
              {project.keyWork.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-card/40 border border-border/30 text-xs md:text-sm text-foreground/80"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Feats */}
          {project.architecturalHighlights && project.architecturalHighlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                Architectural Highlights & Innovations
              </h4>
              <div className="grid gap-2.5">
                {project.architecturalHighlights.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs md:text-sm text-foreground/90"
                  >
                    <Layers className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-2 pt-2 border-t border-border/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5 text-muted-foreground" />
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-md bg-muted/50 text-foreground/80 border border-border/40 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-border/40">
            <Button variant="outline" onClick={onClose} className="border-border/60 hover:bg-muted/40">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
