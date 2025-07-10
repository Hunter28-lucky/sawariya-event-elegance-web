import { ArrowRight, Star, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Wedding Setup by Shree Sawariya Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-bounce">
        <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center shadow-luxury">
          <Heart className="w-8 h-8 text-primary-foreground" />
        </div>
      </div>
      <div className="absolute bottom-32 left-10 animate-pulse">
        <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-elegant">
          <Star className="w-6 h-6 text-foreground" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-warm border border-gold/30 rounded-full px-6 py-2 mb-6 shadow-soft">
          <Calendar className="w-4 h-4 text-gold-dark" />
          <span className="text-sm font-medium text-foreground">Premium Event Planning Services</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-foreground">Creating</span>
          <span className="block bg-gradient-luxury bg-clip-text text-transparent">
            Unforgettable
          </span>
          <span className="block text-foreground">Celebrations</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          From traditional weddings to modern celebrations, we craft every moment with 
          <span className="text-gold-dark font-semibold"> love, luxury, and perfection</span>. 
          Your dream event awaits.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center space-x-8 mb-10">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-luxury bg-clip-text text-transparent">500+</div>
            <div className="text-sm text-muted-foreground">Events Organized</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gold/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-luxury bg-clip-text text-transparent">5 Years</div>
            <div className="text-sm text-muted-foreground">Experience</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gold/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-luxury bg-clip-text text-transparent">100%</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Plan Your Event
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-6">
            View Our Work
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gold/20">
          <p className="text-sm text-muted-foreground mb-4">Trusted by families across India</p>
          <div className="flex justify-center items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-gold text-gold" />
            ))}
            <span className="ml-2 text-sm font-medium">4.9/5 Customer Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;