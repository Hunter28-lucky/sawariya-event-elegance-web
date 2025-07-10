import { Camera, Heart, Star, Sparkles, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import galleryImage from "@/assets/gallery-collage.jpg";

const GallerySection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const galleryCategories = [
    {
      title: "Weddings",
      count: "250+",
      description: "Traditional & modern wedding celebrations",
      gradient: "from-rose to-coral"
    },
    {
      title: "Corporate",
      count: "150+",
      description: "Professional business events",
      gradient: "from-blue to-teal"
    },
    {
      title: "Social Events",
      count: "100+",
      description: "Birthday parties & celebrations",
      gradient: "from-purple to-blue"
    }
  ];

  const testimonials = [
    {
      name: "Priya & Raj",
      event: "Wedding Celebration",
      rating: 5,
      comment: "Our dream wedding came to life beautifully. Every detail was perfect!"
    },
    {
      name: "Tech Corp",
      event: "Annual Conference",
      rating: 5,
      comment: "Professional, organized, and exceeded all our expectations."
    },
    {
      name: "Sharma Family",
      event: "25th Anniversary",
      rating: 5,
      comment: "A magical celebration that our family will cherish forever."
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-warm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-36 h-36 bg-rose/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-44 h-44 bg-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center space-x-2 glass-card mb-6">
            <Camera className="w-4 h-4 text-rose animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-luxury bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Moments We've</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent animate-gradient">
              Created Together
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our collection of beautifully crafted events and see how we 
            transform dreams into unforgettable experiences.
          </p>
        </div>

        {/* Main Gallery Feature */}
        <div className="mb-16">
          <div className="glass-card overflow-hidden group cursor-pointer hover:shadow-glow transition-all duration-500">
            <div className="relative">
              <img
                src={galleryImage}
                alt="Event Gallery Showcase"
                className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-transparent to-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        Premium Event Gallery
                      </h3>
                      <p className="text-muted-foreground">
                        Over 500+ successful events captured in stunning detail
                      </p>
                    </div>
                    <Button variant="glass" size="icon-lg" className="shrink-0">
                      <Eye className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {galleryCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card hover:shadow-glow transition-all duration-300 hover:scale-105 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-soft group-hover:shadow-glow transition-all duration-300`}>
                  <Camera className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-purple transition-colors">
                    {category.title}
                  </h3>
                  <div className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
                    {category.count}
                  </div>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full group-hover:bg-purple/10 transition-colors"
                >
                  View Gallery
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              What Our <span className="bg-gradient-hero bg-clip-text text-transparent">Clients Say</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from the families and businesses 
              who trusted us with their special moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card hover:shadow-glow transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground text-center mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Client Info */}
                <div className="text-center space-y-1">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="glass-card max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-gradient-button rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                <Heart className="w-10 h-10 text-white animate-pulse" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to Create Your Own
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Magical Moment</span>?
              </h3>
              
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Let's discuss your vision and create an event that will be remembered 
                and cherished for years to come.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => scrollToSection('#contact')}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Button>
                <Button 
                  variant="elegant" 
                  size="xl"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  View Full Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;