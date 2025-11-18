const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Ravi Patel.All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
