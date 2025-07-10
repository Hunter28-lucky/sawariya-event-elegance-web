import { useState } from "react";
import { Filter, Eye, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import galleryImage from "@/assets/gallery-collage.jpg";

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Weddings", "Birthdays", "Corporate", "Religious", "Parties"];

  const galleryItems = [
    {
      id: 1,
      category: "Weddings",
      title: "Royal Wedding Setup",
      image: galleryImage,
      description: "Luxurious mandap decoration with golden elements"
    },
    {
      id: 2,
      category: "Birthdays",
      title: "Princess Theme Birthday",
      image: galleryImage,
      description: "Magical princess themed celebration"
    },
    {
      id: 3,
      category: "Corporate",
      title: "Annual Conference",
      image: galleryImage,
      description: "Professional corporate event setup"
    },
    {
      id: 4,
      category: "Religious",
      title: "Ganesh Chaturthi Celebration",
      image: galleryImage,
      description: "Traditional religious ceremony"
    },
    {
      id: 5,
      category: "Parties",
      title: "Engagement Ceremony",
      image: galleryImage,
      description: "Elegant engagement party setup"
    },
    {
      id: 6,
      category: "Weddings",
      title: "Destination Wedding",
      image: galleryImage,
      description: "Beautiful outdoor wedding arrangement"
    },
    {
      id: 7,
      category: "Birthdays",
      title: "Superhero Theme",
      image: galleryImage,
      description: "Action-packed superhero birthday party"
    },
    {
      id: 8,
      category: "Corporate",
      title: "Product Launch",
      image: galleryImage,
      description: "Modern product launch event"
    },
    {
      id: 9,
      category: "Religious",
      title: "Diwali Celebration",
      image: galleryImage,
      description: "Traditional Diwali festivities"
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h3 className="text-gold-dark font-semibold tracking-wide uppercase">Our Portfolio</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Event Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of beautifully executed events and celebrations 
            that showcase our creativity and attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "luxury" : "elegant"}
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-300"
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group bg-card border-gold/20 hover:border-gold/40 hover:shadow-luxury transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="luxury" className="w-10 h-10 p-0">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="luxury" className="w-10 h-10 p-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-luxury text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-3">
                <h4 className="text-xl font-semibold text-foreground group-hover:text-gold-dark transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instagram Integration Section */}
        <div className="bg-background rounded-3xl p-8 md:p-12 shadow-elegant text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Follow Our Latest Work
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Stay updated with our latest events and behind-the-scenes moments on Instagram
          </p>
          
          <div className="space-y-4">
            <div className="flex justify-center items-center space-x-4 text-gold-dark">
              <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">IG</span>
              </div>
              <span className="text-xl font-semibold">@shreesawariyaevents2025</span>
            </div>
            
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Follow Us on Instagram
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="elegant" size="lg" className="text-lg px-8 py-6">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;