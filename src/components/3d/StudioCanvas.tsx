import { StudioScene } from "./StudioScene";
import { StudioLoader } from "./StudioLoader";
import { ShaderViewportMode } from "./types";

interface StudioCanvasProps {
  isEnabled?: boolean;
  activeStationId?: string;
  viewportMode?: ShaderViewportMode;
}

export const StudioCanvas: React.FC<StudioCanvasProps> = ({
  isEnabled = true,
  activeStationId = "home",
  viewportMode = "lit",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<StudioScene | null>(null);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Synchronize active station morphing
  useEffect(() => {
    if (sceneRef.current && activeStationId) {
      sceneRef.current.setActiveStation(activeStationId);
    }
  }, [activeStationId]);

  // Synchronize game engine shader viewport mode
  useEffect(() => {
    if (sceneRef.current && viewportMode) {
      sceneRef.current.setViewportMode(viewportMode);
    }
  }, [viewportMode]);

  useEffect(() => {
    if (!isEnabled || !containerRef.current) {
      if (sceneRef.current) {
        sceneRef.current.destroy();
        sceneRef.current = null;
      }
      return;
    }

    // 1. Instantiate StudioScene
    const scene = new StudioScene();
    sceneRef.current = scene;

    // Simulate progressive streaming progress
    let progress = 10;
    setLoadingProgress(progress);
    const progressInterval = setInterval(() => {
      progress += Math.random() * 25;
      if (progress >= 95) {
        progress = 95;
        clearInterval(progressInterval);
      }
      setLoadingProgress(Math.min(95, progress));
    }, 80);

    const isInitialized = scene.init(containerRef.current, {
      initialViewportMode: viewportMode,
      onLoaded: () => {
        clearInterval(progressInterval);
        setLoadingProgress(100);
        scene.setActiveStation(activeStationId);
        setTimeout(() => {
          setIsLoaded(true);
        }, 350);
      },
      onError: (err) => {
        console.warn("StudioCanvas: WebGL fallback activated.", err);
        clearInterval(progressInterval);
        setHasError(true);
        setIsLoaded(true);
      },
    });

    if (!isInitialized) {
      clearInterval(progressInterval);
      setHasError(true);
      setIsLoaded(true);
      return;
    }

    // 2. Scroll Progress Tracker
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      scene.setScrollProgress(progress);
      resetIdleTimer();
    };

    // 3. Mouse Parallax & Fluid Ripple Tracker
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      scene.setMouseOffset(normalizedX, normalizedY);

      // WebGL UV coordinates: (0,0) is bottom-left, (1,1) is top-right
      const uvX = e.clientX / window.innerWidth;
      const uvY = 1.0 - e.clientY / window.innerHeight;
      scene.onCursorMove(uvX, uvY, performance.now() * 0.001);

      resetIdleTimer();
    };

    // 4. Click ripple burst
    const handleClick = (e: MouseEvent) => {
      const uvX = e.clientX / window.innerWidth;
      const uvY = 1.0 - e.clientY / window.innerHeight;
      scene.onCursorClick(uvX, uvY);
      resetIdleTimer();
    };

    // 5. Idle Battery Saver Watchdog (3s timeout)
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    const resetIdleTimer = () => {
      scene.setIdle(false);
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        scene.setIdle(true);
      }, 3000);
    };
    resetIdleTimer();

    // 6. Window Resize Handler
    const handleResize = () => {
      scene.resize();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });
    window.addEventListener("resize", handleResize);

    // Initial scroll sync
    handleScroll();

    // Cleanup on unmount
    return () => {
      clearInterval(progressInterval);
      if (idleTimer) clearTimeout(idleTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      scene.destroy();
      sceneRef.current = null;
    };
  }, [isEnabled]);

  if (!isEnabled || hasError) {
    return null;
  }

  return (
    <>
      {/* Vertex3D-Style Circular Loader */}
      <StudioLoader progress={loadingProgress} isLoaded={isLoaded} />

      {/* WebGL Canvas Viewport Fixed Behind UI */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-1000"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
    </>
  );
};
