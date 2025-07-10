import { Users, Award, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Every event is crafted with love and dedication to create lasting memories."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every detail of your celebration."
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building lasting relationships with our clients through transparency and reliability."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous planning and flawless execution for your perfect day."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-gold-dark font-semibold tracking-wide uppercase">About Us</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Crafting Dreams Into
                <span className="block bg-gradient-luxury bg-clip-text text-transparent">
                  Beautiful Reality
                </span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Shree Sawariya Events, we believe every celebration deserves to be extraordinary. 
              Founded with a passion for creating magical moments, we specialize in transforming 
              your vision into unforgettable experiences.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              From intimate gatherings to grand celebrations, our team brings creativity, 
              precision, and years of expertise to every event. We understand that each 
              celebration is unique, and we work tirelessly to ensure every detail reflects 
              your personality and dreams.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Our Journey</h4>
              <p className="text-muted-foreground">
                With over 5 years of experience and 500+ successful events, we've built 
                a reputation for excellence in the event planning industry. Our journey 
                began with a simple belief: every celebration should be as unique as the 
                people celebrating it.
              </p>
            </div>

            <Button variant="elegant" size="lg" className="mt-6">
              Discover Our Story
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-gold/20 hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto shadow-soft">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">Meet Our Team</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Our passionate team of event specialists, designers, and coordinators work together 
            to bring your vision to life with creativity and precision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Creative Director", role: "Design & Concept" },
              { name: "Event Coordinator", role: "Planning & Execution" },
              { name: "Operations Manager", role: "Logistics & Support" }
            ].map((member, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-gold/20 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto shadow-soft"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{member.name}</h4>
                    <p className="text-gold-dark font-medium">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;