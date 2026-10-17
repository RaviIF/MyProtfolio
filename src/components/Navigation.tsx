import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-dark/95 backdrop-blur-xl shadow-lg border-b border-border/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-black gradient-text hover:scale-105 transition-transform tracking-wider"
          >
            RP
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary transition-colors text-xs font-semibold tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="Ravi_Patel_Resume.pdf"
              download="Ravi_Patel_Resume.pdf"
              className="no-underline hidden sm:inline-block"
            >
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:shadow-glow transition-all font-semibold gap-2 h-9 px-4"
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-card/50 border border-border/50 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-5 rounded-2xl bg-card/95 backdrop-blur-2xl border border-border/50 shadow-2xl flex flex-col gap-3 animate-in fade-in-0 slide-in-from-top-2">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-2 px-3 rounded-lg text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-muted/40 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-border/40">
              <a
                href="Ravi_Patel_Resume.pdf"
                download="Ravi_Patel_Resume.pdf"
                className="no-underline block"
              >
                <Button className="w-full bg-primary text-primary-foreground gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
