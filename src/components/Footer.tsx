import { Phone, Mail, MapPin, Heart, Star, Sparkles, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Wedding Planning",
    "Corporate Events",
    "Birthday Parties",
    "Anniversary Celebrations",
    "Photography & Video",
    "Entertainment Services"
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#", gradient: "from-pink-500 to-purple-500" },
    { name: "Facebook", icon: Facebook, href: "#", gradient: "from-blue-600 to-blue-700" },
    { name: "Twitter", icon: Twitter, href: "#", gradient: "from-blue-400 to-blue-500" },
    { name: "YouTube", icon: Youtube, href: "#", gradient: "from-red-500 to-red-600" }
  ];

  return (
    <footer className="bg-gradient-warm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-button rounded-xl flex items-center justify-center shadow-glow">
                  <Sparkles className="w-7 h-7 text-white animate-pulse" />
                </div>
                <div className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
                  Shree Sawariya Events
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Creating unforgettable celebrations since 2019. We transform your dreams into 
                magical realities with our expertise in event planning and management.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue to-teal rounded-lg flex items-center justify-center shadow-soft">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">+91 98765 43210</div>
                    <div className="text-sm text-muted-foreground">24/7 Available</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple to-blue rounded-lg flex items-center justify-center shadow-soft">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">info@shreesawariyaevents.com</div>
                    <div className="text-sm text-muted-foreground">Quick Response</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-rose to-coral rounded-lg flex items-center justify-center shadow-soft">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Mumbai, Maharashtra</div>
                    <div className="text-sm text-muted-foreground">Service Across India</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-muted-foreground">Events</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-button bg-clip-text text-transparent">5+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">4.9</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-purple transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant="elegant" 
                size="sm" 
                className="w-full"
                onClick={() => scrollToSection('#contact')}
              >
                <Heart className="w-4 h-4 mr-2" />
                Plan Your Event
              </Button>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gradient-button rounded-full"></div>
                    <span className="text-muted-foreground hover:text-purple transition-colors duration-300 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-purple/20">
          <div className="glass-card max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold">
                  Stay Updated with Our Latest Events
                </h3>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter and get exclusive event planning tips, 
                  latest trends, and special offers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background/50 border border-purple/30 rounded-lg focus:border-purple focus:outline-none text-foreground"
                />
                <Button variant="hero" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="py-8 border-t border-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gradient-to-r ${social.gradient} rounded-lg flex items-center justify-center shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">4.9/5 Rating</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-purple/30"></div>
              <div className="text-sm text-muted-foreground">500+ Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © 2024 Shree Sawariya Events. All rights reserved. 
              <span className="bg-gradient-luxury bg-clip-text text-transparent font-semibold ml-1">
                Crafted with ❤️
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-purple transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;