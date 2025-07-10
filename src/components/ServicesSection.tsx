import { Heart, Users, Building, Gift, Camera, Music, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Complete wedding planning from traditional ceremonies to modern celebrations.",
      features: ["Venue Selection", "Catering Management", "Decoration & Themes", "Photography & Videography"],
      gradient: "from-rose to-coral",
      popular: true
    },
    {
      icon: Building,
      title: "Corporate Events",
      description: "Professional corporate event management for meetings, conferences, and team building.",
      features: ["Conference Management", "Product Launches", "Team Building", "Award Ceremonies"],
      gradient: "from-blue to-teal"
    },
    {
      icon: Users,
      title: "Social Celebrations",
      description: "Birthday parties, anniversaries, and family celebrations made memorable.",
      features: ["Birthday Parties", "Anniversary Celebrations", "Family Gatherings", "Cultural Events"],
      gradient: "from-purple to-blue"
    },
    {
      icon: Gift,
      title: "Special Occasions",
      description: "Custom event planning for engagements, baby showers, and milestone celebrations.",
      features: ["Engagement Ceremonies", "Baby Showers", "Retirement Parties", "Graduation Events"],
      gradient: "from-emerald to-teal"
    },
    {
      icon: Camera,
      title: "Photography & Video",
      description: "Professional photography and videography services to capture your precious moments.",
      features: ["Event Photography", "Videography", "Live Streaming", "Photo Albums"],
      gradient: "from-gold to-rose"
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Complete entertainment solutions including music, DJ, and live performances.",
      features: ["DJ Services", "Live Music", "Entertainment Shows", "Sound & Lighting"],
      gradient: "from-purple-dark to-rose"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-purple/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-rose/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center space-x-2 glass-card mb-6">
            <Sparkles className="w-4 h-4 text-purple animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-luxury bg-clip-text text-transparent">
              Our Services
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Comprehensive Event</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent animate-gradient">
              Solutions
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From planning to execution, we provide end-to-end event management services 
            tailored to your unique needs and vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="glass-card hover:shadow-glow transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300 mb-6`}>
                  <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-purple transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-gradient-button rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-6 group-hover:bg-purple/10 transition-colors"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r ${service.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="glass-card max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Don't see what you're looking for?
              </h3>
              <p className="text-muted-foreground text-lg">
                We offer custom event planning services tailored to your specific needs. 
                <span className="bg-gradient-luxury bg-clip-text text-transparent font-semibold">
                  Let's create something amazing together!
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => scrollToSection('#contact')}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Discuss Custom Plans
                </Button>
                <Button 
                  variant="elegant" 
                  size="xl"
                  onClick={() => scrollToSection('#gallery')}
                >
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;