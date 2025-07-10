import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Instagram,
  Facebook,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      action: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@shreesawariyaevents.com",
      action: "mailto:info@shreesawariyaevents.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Mumbai, Maharashtra, India",
      action: "#"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sun: 9:00 AM - 9:00 PM",
      action: "#"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your event planning services. Can we discuss my requirements?");

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-gold-dark font-semibold tracking-wide uppercase">Contact Us</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's Plan Your
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">
              Perfect Event
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to create magical moments? Get in touch with us and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-6">
                We're here to help you create unforgettable celebrations. 
                Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-gold/20 hover:border-gold/40 hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center shadow-soft">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gold-dark">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp Button */}
            <Card className="bg-gradient-hero border-gold/30 shadow-elegant">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Quick Chat on WhatsApp</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Get instant responses to your queries
                </p>
                <Button 
                  variant="luxury" 
                  className="w-full"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="elegant" size="icon" className="w-12 h-12">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="elegant" size="icon" className="w-12 h-12">
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-gold/20 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <Input
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="border-gold/30 focus:border-gold"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number *</label>
                      <Input
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-gold/30 focus:border-gold"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-gold/30 focus:border-gold"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Event Type *</label>
                      <Select onValueChange={(value) => handleInputChange('eventType', value)}>
                        <SelectTrigger className="border-gold/30 focus:border-gold">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="birthday">Birthday Party</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="religious">Religious Function</SelectItem>
                          <SelectItem value="anniversary">Anniversary</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Event Date</label>
                      <Input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange('eventDate', e.target.value)}
                        className="border-gold/30 focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message *</label>
                    <Textarea
                      placeholder="Tell us about your event requirements, budget, and any specific preferences..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-gold/30 focus:border-gold min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full text-lg py-6">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>

                {/* Trust Indicators */}
                <div className="pt-6 border-t border-gold/20">
                  <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">4.9/5 Customer Rating</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ✓ Free consultation ✓ 24/7 support ✓ Custom packages
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-gold/20 shadow-elegant overflow-hidden">
            <div className="h-64 bg-gradient-warm flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="w-12 h-12 text-gold-dark mx-auto" />
                <h4 className="text-xl font-semibold text-foreground">Our Location</h4>
                <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                <Button variant="elegant">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;