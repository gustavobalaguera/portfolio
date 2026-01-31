const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors inter-font">
            About
          </a>
          {/* <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors inter-font">
            Projects
          </a> */}
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors inter-font">
            Contact
          </a>
        </div>
        
        <div className="text-xs text-muted-foreground/50 mono-font">
          © {currentYear} Iron Sites. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
