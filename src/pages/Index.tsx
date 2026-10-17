import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { StudioCanvas } from "@/components/3d/StudioCanvas";

const Index = () => {
  const [is3DEnabled, setIs3DEnabled] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("ravi_portfolio_3d_enabled");
      return stored !== null ? stored === "true" : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("ravi_portfolio_3d_enabled", String(is3DEnabled));
    } catch {
      // Ignore localStorage issues
    }
  }, [is3DEnabled]);

  const handleToggle3D = () => {
    setIs3DEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen relative bg-[#07080d] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 3D WebGL Spatial Tech Studio Viewport */}
      <StudioCanvas isEnabled={is3DEnabled} />

      {/* Main Glass UI Layer */}
      <div className="relative z-10">
        <Navigation is3DEnabled={is3DEnabled} onToggle3D={handleToggle3D} />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
