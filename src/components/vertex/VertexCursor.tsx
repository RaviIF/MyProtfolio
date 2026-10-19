import React, { useEffect, useRef, useState } from "react";

export const VertexCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      // Dot follows cursor immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0px) translate(-50%, -50%)`;
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);

    // Spring physics loop for the trailing ring (Vertex3D 0.18 ease)
    const animateRing = () => {
      const ease = 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0px) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animateRing);
    };

    // Hover listener on interactive elements
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          target.closest("input") ||
          target.closest(".carousel-3d-item") ||
          target.closest(".clickable"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleOver, { passive: true });

    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* 1. Precision Center Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] will-change-transform"
      />

      {/* 2. Vertex3D Trailing Spring Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 rounded-full border border-white/40 transition-all duration-200 ease-out will-change-transform ${
          isHovered
            ? "h-14 w-14 border-cyan-400 bg-cyan-400/10 shadow-[0_0_16px_rgba(34,211,238,0.4)]"
            : isMouseDown
            ? "h-6 w-6 border-white/80 bg-white/20"
            : "h-9 w-9 bg-transparent"
        }`}
      />
    </div>
  );
};
