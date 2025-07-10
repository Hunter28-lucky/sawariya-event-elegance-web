import { ArrowRight, Star, Heart, Calendar, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Wedding Setup by Shree Sawariya Events"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple/20 via-transparent to-blue/20"></div>
      </div>

      {/* Floating Animated Elements */}
      <div className="absolute top-20 right-4 md:right-10 animate-float">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-button rounded-2xl flex items-center justify-center shadow-glow">
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
        </div>
      </div>
      <div className="absolute bottom-32 left-4 md:left-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-accent rounded-full flex items-center justify-center shadow-elegant">
          <Star className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
      </div>
      <div className="absolute top-1/2 right-8 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-8 h-8 bg-gradient-luxury rounded-lg flex items-center justify-center shadow-soft opacity-80">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 glass-card mb-6 shadow-soft hover:shadow-glow transition-all duration-300">
          <div className="w-2 h-2 bg-gradient-button rounded-full animate-pulse"></div>
          <Calendar className="w-4 h-4 text-purple" />
          <span className="text-sm font-semibold bg-gradient-luxury bg-clip-text text-transparent">
            Premium Event Planning Services
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-hero mb-6">
          <span className="block text-foreground">Creating</span>
          <span className="block bg-gradient-hero bg-clip-text text-transparent animate-gradient">
            Unforgettable
          </span>
          <span className="block text-foreground">Celebrations</span>
        </h1>

        {/* Subtitle */}
        <p className="text-subtitle text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          From traditional weddings to modern celebrations, we craft every moment with{" "}
          <span className="bg-gradient-luxury bg-clip-text text-transparent font-bold">
            love, luxury, and perfection
          </span>
          . Your dream event awaits.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 mb-10">
          <div className="glass-card text-center min-w-[120px] hover:shadow-glow transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-luxury bg-clip-text text-transparent">500+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Events Organized</div>
          </div>
          <div className="glass-card text-center min-w-[120px] hover:shadow-glow transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-button bg-clip-text text-transparent">5 Years</div>
            <div className="text-xs md:text-sm text-muted-foreground">Experience</div>
          </div>
          <div className="glass-card text-center min-w-[120px] hover:shadow-glow transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Happy Clients</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="hero" 
            size="xl" 
            className="w-full sm:w-auto"
            onClick={() => scrollToSection('#contact')}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Plan Your Event
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            variant="elegant" 
            size="xl" 
            className="w-full sm:w-auto group"
            onClick={() => scrollToSection('#gallery')}
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            View Our Work
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="glass-card max-w-md mx-auto">
          <p className="text-sm text-muted-foreground mb-4">Trusted by families across India</p>
          <div className="flex justify-center items-center space-x-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-gold text-gold animate-pulse" style={{ animationDelay: `${star * 0.1}s` }} />
            ))}
          </div>
          <span className="text-sm font-semibold bg-gradient-luxury bg-clip-text text-transparent">
            4.9/5 Customer Rating • 500+ Reviews
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple rounded-full flex justify-center glass">
          <div className="w-1 h-3 bg-gradient-button rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;