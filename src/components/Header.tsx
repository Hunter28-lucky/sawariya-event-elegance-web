import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Sparkles, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set initial theme based on system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle('light', !prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-luxury backdrop-blur-xl' 
          : 'bg-background/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top bar with contact info - Hidden on mobile */}
        <div className="hidden lg:flex justify-between items-center py-2 text-sm border-b border-purple/20">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground hover:text-purple transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground hover:text-blue transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@shreesawariyaevents.com</span>
            </div>
          </div>
          <div className="text-muted-foreground">
            <span className="bg-gradient-luxury bg-clip-text text-transparent font-medium">
              Follow us: @shreesawariyaevents2025
            </span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-button rounded-xl flex items-center justify-center shadow-glow">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="text-xl md:text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
              Shree Sawariya Events
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-purple transition-all duration-300 font-medium relative group px-2 py-1"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-button transition-all duration-300 group-hover:w-full rounded-full"></span>
              </button>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="glass"
              size="icon"
              onClick={toggleTheme}
              className="ml-2"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </Button>
            
            <Button variant="hero" size="lg" className="ml-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Theme Toggle */}
            <Button
              variant="glass"
              size="icon-sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 text-blue-500" />
              )}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="glass"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="glass-card m-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left text-foreground hover:text-purple transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-purple/10"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 border-t border-purple/20">
            <Button variant="hero" className="w-full" size="lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>
          
          {/* Mobile contact info */}
          <div className="pt-4 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@shreesawariyaevents.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;