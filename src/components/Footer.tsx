import { Phone, Mail, MapPin, Instagram, Facebook, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      "Wedding Planning",
      "Birthday Parties",
      "Corporate Events",
      "Religious Functions",
      "Catering Services",
      "Photography"
    ],
    quickLinks: [
      "About Us",
      "Our Portfolio",
      "Testimonials",
      "Get Quote",
      "Contact Us",
      "Blog"
    ],
    eventTypes: [
      "Traditional Weddings",
      "Modern Celebrations",
      "Corporate Meetings",
      "Product Launches",
      "Anniversary Parties",
      "Festival Celebrations"
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-foreground to-muted-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">
                Shree Sawariya Events
              </h3>
              <p className="text-background/80 leading-relaxed mb-6">
                Creating unforgettable celebrations with passion, creativity, and precision. 
                Your dream event is our commitment.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-sm">info@shreesawariyaevents.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gold">Follow Us</h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-gold/30 hover:border-gold hover:bg-gold/20">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-gold/30 hover:border-gold hover:bg-gold/20">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-background/80 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-background/80 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Types */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Event Types</h4>
            <ul className="space-y-3">
              {footerLinks.eventTypes.map((eventType, index) => (
                <li key={index}>
                  <a
                    href="#gallery"
                    className="text-background/80 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {eventType}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="py-8 border-t border-background/20">
          <div className="text-center space-y-4">
            <h4 className="text-xl font-semibold text-gold">Stay Updated</h4>
            <p className="text-background/80 max-w-2xl mx-auto">
              Subscribe to our newsletter for event planning tips, latest trends, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:border-gold"
              />
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80 text-sm">
              © {currentYear} Shree Sawariya Events. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1 text-background/80 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for creating beautiful memories</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/80 hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-background/80 hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;