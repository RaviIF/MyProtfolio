import React, { useState, useEffect } from "react";
import { TopNav } from "@/components/vertex/TopNav";
import { LeftNavRail } from "@/components/vertex/LeftNavRail";
import { ScrollIndicator } from "@/components/vertex/ScrollIndicator";
import { SidePanelDrawer } from "@/components/vertex/SidePanelDrawer";
import { ProjectsCarouselDeck } from "@/components/vertex/ProjectsCarouselDeck";
import { StudioCanvas } from "@/components/3d/StudioCanvas";
import { SlideHero } from "@/components/vertex/slides/SlideHero";
import { SlideAbout } from "@/components/vertex/slides/SlideAbout";
import { SlideProject } from "@/components/vertex/slides/SlideProject";
import { SlideSkills } from "@/components/vertex/slides/SlideSkills";
import { SlideContact } from "@/components/vertex/slides/SlideContact";
import { VertexCursor } from "@/components/vertex/VertexCursor";
import { PROJECTS_DATA, ProjectItem } from "@/data/projectsData";
import { STATIONS } from "@/components/vertex/types";

const Index: React.FC = () => {
  // 3D Engine State
  const [is3DEnabled, setIs3DEnabled] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("ravi_portfolio_3d_enabled");
      return stored !== null ? stored === "true" : true;
    } catch {
      return true;
    }
  });

  // Active Station Tracking
  const [activeStationId, setActiveStationId] = useState<string>("home");

  // Modals & Drawers
  const [inspectingProject, setInspectingProject] = useState<ProjectItem | null>(null);
  const [isProjectsDeckOpen, setIsProjectsDeckOpen] = useState<boolean>(false);

  // Persist 3D toggle
  useEffect(() => {
    try {
      localStorage.setItem("ravi_portfolio_3d_enabled", String(is3DEnabled));
    } catch {
      // Ignore storage errors
    }
  }, [is3DEnabled]);

  // Active Section Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = STATIONS.map((s) => document.getElementById(s.id)).filter(
        Boolean
      ) as HTMLElement[];
      const scrollPos = window.scrollY + window.innerHeight * 0.45;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el.offsetTop <= scrollPos) {
          setActiveStationId(STATIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToStation = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 4 Flagship Projects
  const smartscopy = PROJECTS_DATA.find((p) => p.id === "smartscopy") || PROJECTS_DATA[0];
  const mimadim = PROJECTS_DATA.find((p) => p.id === "mimadimplus") || PROJECTS_DATA[1];
  const nopainheals = PROJECTS_DATA.find((p) => p.id === "nopainheals") || PROJECTS_DATA[2];
  const visionAi = PROJECTS_DATA.find((p) => p.id === "motion-tracking-ai") || PROJECTS_DATA[3];

  return (
    <div className="relative min-h-screen bg-[#06070a] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-clip">
      {/* Vertex3D Interactive Dual Spring Cursor */}
      <VertexCursor />

      {/* 3D WebGL Cyberpunk Viewport */}
      <StudioCanvas
        isEnabled={is3DEnabled}
        activeStationId={activeStationId}
      />

      {/* Vertex3D Fixed Left Navigation Rail */}
      <LeftNavRail
        activeStationId={activeStationId}
        onSelectStation={handleScrollToStation}
      />

      {/* Vertex3D Fixed Top Navigation Header */}
      <TopNav
        is3DEnabled={is3DEnabled}
        onToggle3D={() => setIs3DEnabled((prev) => !prev)}
        onOpenProjectsDeck={() => setIsProjectsDeckOpen(true)}
        onScrollToStation={handleScrollToStation}
      />

      {/* Vertex3D Pinned Bottom Scroll Indicator */}
      <ScrollIndicator />

      {/* Main Fullscreen Presentation Slides */}
      <main className="relative z-10">
        {/* Station 00 // Dev Center (Hero) */}
        <SlideHero
          onExploreClick={() => handleScrollToStation("about")}
          onOpenProjectsDeck={() => setIsProjectsDeckOpen(true)}
        />

        {/* Station 01 // Engineering Profile */}
        <SlideAbout />

        {/* Station 02 // SmartScopy (Flagship 01) */}
        <SlideProject
          stationId="smartscopy"
          stationCode="02"
          project={smartscopy}
          onInspectCase={(proj) => setInspectingProject(proj)}
          onOpenProjectsDeck={() => setIsProjectsDeckOpen(true)}
        />

        {/* Station 03 // MimadimPlus (Flagship 02) */}
        <SlideProject
          stationId="mimadim"
          stationCode="03"
          project={mimadim}
          onInspectCase={(proj) => setInspectingProject(proj)}
          onOpenProjectsDeck={() => setIsProjectsDeckOpen(true)}
        />

        {/* Station 04 // NoPainHeals (Flagship 03) */}
        <SlideProject
          stationId="nopainheals"
          stationCode="04"
          project={nopainheals}
          onInspectCase={(proj) => setInspectingProject(proj)}
          onOpenProjectsDeck={() => setIsProjectsDeckOpen(true)}
        />

        {/* Station 05 // Edge AI & Vision (Flagship 04) */}
        <SlideProject
          stationId="vision-ai"
          stationCode="05"
          project={visionAi}
          onInspectCase={(proj) => setInspectingProject(proj)}
          onOpenProjectsDeck={() => setIsProjectsDeckOpen(true)}
        />

        {/* Station 06 // Core Systems & Architecture */}
        <SlideSkills />

        {/* Station 07 // Initiate Transmission */}
        <SlideContact />
      </main>

      {/* Slide-out Right Case Study Drawer */}
      <SidePanelDrawer
        project={inspectingProject}
        onClose={() => setInspectingProject(null)}
        onOpenAllProjects={() => setIsProjectsDeckOpen(true)}
      />

      {/* Horizontal Floating Projects Carousel Deck (All 13 Projects) */}
      <ProjectsCarouselDeck
        isOpen={isProjectsDeckOpen}
        onClose={() => setIsProjectsDeckOpen(false)}
        onSelectProject={(proj) => {
          setIsProjectsDeckOpen(false);
          setInspectingProject(proj);
        }}
      />
    </div>
  );
};

export default Index;
