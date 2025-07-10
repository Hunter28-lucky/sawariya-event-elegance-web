import { Users, Award, Heart, Star, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const achievements = [
    {
      icon: Calendar,
      number: "500+",
      title: "Events Completed",
      description: "Successfully organized events across India"
    },
    {
      icon: Users,
      number: "1000+",
      title: "Happy Families",
      description: "Families who trusted us with their special moments"
    },
    {
      icon: Award,
      number: "5",
      title: "Years Experience",
      description: "Years of excellence in event management"
    },
    {
      icon: Star,
      number: "4.9",
      title: "Average Rating",
      description: "Based on 500+ customer reviews"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-warm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Section Badge */}
            <div className="inline-flex items-center space-x-2 glass-card">
              <Heart className="w-4 h-4 text-rose animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-luxury bg-clip-text text-transparent">
                About Our Journey
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-foreground">Creating </span>
                <span className="bg-gradient-hero bg-clip-text text-transparent">Magical Moments</span>
                <span className="text-foreground"> Since 2019</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-button rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                At <span className="bg-gradient-luxury bg-clip-text text-transparent font-semibold">Shree Sawariya Events</span>, 
                we believe every celebration tells a unique story. Since our inception, we've been dedicated to transforming 
                your dreams into extraordinary realities.
              </p>
              <p>
                From intimate gatherings to grand celebrations, our team of passionate professionals ensures every detail 
                reflects your vision. We specialize in <span className="text-purple font-semibold">weddings, corporate events, 
                social celebrations</span>, and everything in between.
              </p>
              <p>
                Our commitment to excellence and innovation has made us one of the most trusted names in event management 
                across India.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="modern" 
                size="lg"
                onClick={() => scrollToSection('#services')}
                className="group"
              >
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Our Services
              </Button>
              <Button 
                variant="elegant" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className="glass-card hover:shadow-glow transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-button rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
                        {achievement.number}
                      </div>
                      <div className="text-sm md:text-base font-semibold text-foreground">
                        {achievement.title}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground leading-tight">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="glass-card max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold">
                  Ready to create your <span className="bg-gradient-hero bg-clip-text text-transparent">perfect event</span>?
                </h3>
                <p className="text-muted-foreground">
                  Let's discuss your vision and bring it to life with our expertise.
                </p>
              </div>
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('#contact')}
                className="shrink-0"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Start Planning
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;