import { 
  Heart, 
  Gift, 
  Building, 
  Church, 
  Utensils, 
  Music, 
  Camera, 
  Flower2,
  Crown,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Complete wedding planning from engagement to reception with traditional and modern themes.",
      features: ["Venue Selection", "Mandap Decoration", "Catering", "Photography"]
    },
    {
      icon: Gift,
      title: "Birthday Celebrations",
      description: "Themed birthday parties for all ages with custom decorations and entertainment.",
      features: ["Custom Themes", "Balloon Decor", "Cake Design", "Entertainment"]
    },
    {
      icon: Building,
      title: "Corporate Events",
      description: "Professional corporate gatherings, conferences, and business celebrations.",
      features: ["Conferences", "Product Launches", "Team Building", "Award Ceremonies"]
    },
    {
      icon: Church,
      title: "Religious Functions",
      description: "Sacred ceremonies and religious celebrations with traditional arrangements.",
      features: ["Puja Arrangements", "Temple Decor", "Havan Setup", "Prasad Management"]
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Authentic cuisines and custom menus for all types of events and gatherings.",
      features: ["Multi-Cuisine", "Live Counters", "Custom Menus", "Dietary Options"]
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Professional sound systems, lighting, and entertainment for memorable experiences.",
      features: ["Sound Systems", "DJ Services", "Light Shows", "Live Performances"]
    },
    {
      icon: Flower2,
      title: "Floral Arrangements",
      description: "Exquisite floral designs and decorations that enhance the beauty of your event.",
      features: ["Bridal Bouquets", "Stage Decor", "Table Arrangements", "Entrance Decor"]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography and videography to capture every precious moment.",
      features: ["Event Photography", "Videography", "Drone Shots", "Album Creation"]
    },
    {
      icon: Crown,
      title: "Stage Design",
      description: "Stunning stage setups and backdrops that create the perfect focal point.",
      features: ["Custom Backdrops", "Lighting Design", "Seating Arrangements", "VIP Sections"]
    },
    {
      icon: Sparkles,
      title: "Custom Themes",
      description: "Unique themed decorations tailored to your preferences and celebration style.",
      features: ["Theme Development", "Color Coordination", "Props & Accessories", "Ambiance Creation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-gold-dark font-semibold tracking-wide uppercase">Our Services</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Complete Event Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to execution, we provide comprehensive event planning services 
            to make your celebration truly exceptional and memorable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card hover:bg-gradient-warm border-gold/20 hover:border-gold/40 hover:shadow-elegant transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-6 space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center shadow-soft group-hover:shadow-luxury transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                {/* Title */}
                <h4 className="text-xl font-semibold text-foreground group-hover:text-gold-dark transition-colors duration-300">
                  {service.title}
                </h4>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-gold-dark">Key Features:</h5>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-warm rounded-3xl p-8 md:p-12 shadow-elegant">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-bold text-foreground">Our Process</h3>
            <p className="text-lg text-muted-foreground">
              Simple steps to create your perfect event
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Planning", desc: "Detailed planning and design concepts" },
              { step: "03", title: "Coordination", desc: "Managing all vendors and logistics" },
              { step: "04", title: "Execution", desc: "Flawless event execution and management" }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto shadow-soft">
                  <span className="text-lg font-bold text-primary-foreground">{process.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;