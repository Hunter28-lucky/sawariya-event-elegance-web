import { ArrowRight, Star, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Wedding Setup by Shree Sawariya Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-dark-overlay"></div>
      </div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-10 animate-bounce transition-mobile">
        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-luxury rounded-full flex items-center justify-center shadow-luxury">
          <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-primary-foreground" />
        </div>
      </div>
      <div className="hidden md:block absolute bottom-32 left-10 animate-pulse transition-mobile">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-luxury rounded-full flex items-center justify-center shadow-elegant">
          <Star className="w-5 h-5 lg:w-6 lg:h-6 text-gold" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-dark-overlay-light/80 border border-gold/40 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 shadow-soft backdrop-blur-sm transition-mobile">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
          <span className="text-xs sm:text-sm font-medium text-gold-light">Premium Event Planning Services</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight transition-smooth">
          <span className="block text-white">Creating</span>
          <span className="block bg-gradient-luxury bg-clip-text text-transparent">
            Unforgettable
          </span>
          <span className="block text-white">Celebrations</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 transition-smooth">
          From traditional weddings to modern celebrations, we craft every moment with 
          <span className="text-gold font-semibold"> love, luxury, and perfection</span>. 
          Your dream event awaits.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8 sm:mb-10 transition-smooth">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-luxury bg-clip-text text-transparent">500+</div>
            <div className="text-xs sm:text-sm text-gray-400">Events Organized</div>
          </div>
          <div className="hidden sm:block w-px h-8 sm:h-12 bg-gold/30"></div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-luxury bg-clip-text text-transparent">5 Years</div>
            <div className="text-xs sm:text-sm text-gray-400">Experience</div>
          </div>
          <div className="hidden sm:block w-px h-8 sm:h-12 bg-gold/30"></div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-luxury bg-clip-text text-transparent">100%</div>
            <div className="text-xs sm:text-sm text-gray-400">Happy Clients</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-mobile">
          <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto transition-smooth hover:scale-105">
            Plan Your Event
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
          <Button variant="elegant" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto transition-smooth hover:scale-105">
            View Our Work
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gold/20 transition-smooth">
          <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Trusted by families across India</p>
          <div className="flex justify-center items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold transition-mobile hover:scale-110" />
            ))}
            <span className="ml-2 text-xs sm:text-sm font-medium text-white">4.9/5 Customer Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-mobile">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;