import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Sparkles, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "We'll get back to you within 24 hours with a customized proposal.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guests: "",
        budget: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 98765 43210",
      subInfo: "Available 24/7",
      gradient: "from-blue to-teal"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@shreesawariyaevents.com",
      subInfo: "Quick response guaranteed",
      gradient: "from-purple to-blue"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Mumbai, Maharashtra",
      subInfo: "Service across India",
      gradient: "from-rose to-coral"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Mon - Sun: 9AM - 9PM",
      subInfo: "Emergency support 24/7",
      gradient: "from-emerald to-teal"
    }
  ];

  const eventTypes = [
    "Wedding", "Birthday Party", "Corporate Event", "Anniversary", 
    "Engagement", "Baby Shower", "Religious Function", "Other"
  ];

  const budgetRanges = [
    "₹50,000 - ₹1,00,000", "₹1,00,000 - ₹2,50,000", 
    "₹2,50,000 - ₹5,00,000", "₹5,00,000 - ₹10,00,000", "₹10,00,000+"
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-rose/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center space-x-2 glass-card mb-6">
            <Heart className="w-4 h-4 text-rose animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-luxury bg-clip-text text-transparent">
              Let's Connect
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Ready to Plan Your</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent animate-gradient">
              Dream Event?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch with us today and let's create something magical together. 
            We're here to turn your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div 
                    key={index}
                    className="glass-card hover:shadow-glow transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-center space-y-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center mx-auto shadow-soft group-hover:shadow-glow transition-all duration-300`}>
                        <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">{contact.title}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{contact.info}</p>
                        <p className="text-xs text-muted-foreground">{contact.subInfo}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Why Choose Us */}
            <div className="glass-card">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
                Why Choose <span className="bg-gradient-luxury bg-clip-text text-transparent">Shree Sawariya Events</span>?
              </h3>
              
              <div className="space-y-4">
                {[
                  "✨ 5+ Years of Experience",
                  "🎯 500+ Successful Events",
                  "💎 Premium Quality Service",
                  "📱 24/7 Customer Support",
                  "🏆 Award-Winning Team",
                  "💰 Transparent Pricing"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-button rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Highlight */}
            <div className="glass-card">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-center italic mb-4">
                "Absolutely amazing! They made our wedding day perfect in every way. 
                Highly recommend to anyone looking for top-notch event planning."
              </p>
              <div className="text-center">
                <div className="font-semibold text-foreground">Priya & Raj Sharma</div>
                <div className="text-sm text-muted-foreground">Wedding Celebration, 2024</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Get Your Free Quote</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you with a customized proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="bg-background/50 border-purple/30 focus:border-purple"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                    className="bg-background/50 border-purple/30 focus:border-purple"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background/50 border-purple/30 focus:border-purple"
                />
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-background/50 border border-purple/30 rounded-lg focus:border-purple focus:outline-none text-foreground"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Event Date
                  </label>
                  <Input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="bg-background/50 border-purple/30 focus:border-purple"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Expected Guests
                  </label>
                  <Input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    placeholder="Number of guests"
                    className="bg-background/50 border-purple/30 focus:border-purple"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background/50 border border-purple/30 rounded-lg focus:border-purple focus:outline-none text-foreground"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message / Special Requirements
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your vision, special requirements, or any questions you have..."
                  rows={4}
                  className="bg-background/50 border-purple/30 focus:border-purple resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message & Get Quote
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy. 
                We'll contact you within 24 hours with a personalized proposal.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-button rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">
                Need Immediate Assistance?
              </h3>
              <p className="text-muted-foreground">
                Call us directly for urgent event planning needs or last-minute bookings.
              </p>
              <Button variant="modern" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;