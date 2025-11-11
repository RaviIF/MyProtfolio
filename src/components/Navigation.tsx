import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy-dark/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            RP
          </button>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
             <a
              href={`Ravi_Patel_Resume.pdf`}
              download="Ravi_Patel_Resume.pdf"
              className="no-underline"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-primary text-primary-foreground hover:shadow-glow transition-all group"
              >
                Download Resume
              </Button>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
