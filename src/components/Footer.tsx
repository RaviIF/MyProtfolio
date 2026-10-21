const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/40 bg-navy-dark/60 backdrop-blur-md relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-lg font-black gradient-text tracking-wider">
              RAVI PATEL
            </span>
            <p className="text-xs text-muted-foreground mt-1 font-mono">
              Software & Game Developer • Spatial Computing & Native Systems
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground font-mono">
            <span>Unity (C#)</span>
            <span>•</span>
            <span>Unreal Engine 5 (C++)</span>
            <span>•</span>
            <span>Three.js / WebGL</span>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} Ravi Patel. Crafted for High Performance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
