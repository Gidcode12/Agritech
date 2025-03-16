
import { useState, useEffect, useRef } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Handle visibility animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('team');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Gallery items with images of varying aspect ratios
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
      caption: "Sustainable crop rotation planning",
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1592982592166-a5ff2834812a",
      caption: "Organic vegetable cultivation",
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8",
      caption: "Water conservation systems",
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da",
      caption: "Soil health assessment",
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8",
      caption: "Agricultural training workshops",
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
      caption: "Community harvest celebrations",
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1625757870084-a560237c1d89",
      caption: "Renewable energy for farms",
      featured: false
    },
    {
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce",
      caption: "Farmers market connections",
      featured: true
    }
  ];

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      
      if (activeIndex < galleryItems.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
  };

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  return (
    <section id="team" className="py-24">
      <div className="container-custom">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-10 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div>
            <div className="accent-badge mb-4">
              <Camera className="h-3 w-3 mr-1" />
              <span>Our Journey</span>
            </div>
            
            <h2 className="section-title">
              From Field to <span className="text-gradient">Impact</span>
            </h2>
            
            <p className="section-subtitle">
              Explore our visual journey in sustainable agriculture and the communities we serve.
            </p>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 mt-6 md:mt-0">
            <button 
              onClick={scrollToPrev}
              className="h-10 w-10 rounded-full flex items-center justify-center bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollToNext}
              className="h-10 w-10 rounded-full flex items-center justify-center bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="mb-16">
          <div 
            className={`${isVisible ? 'fade-in' : 'opacity-0'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
            style={{ animationDelay: '200ms' }}
          >
            {galleryItems.filter(item => item.featured).map((item, i) => (
              <div 
                key={`featured-${i}`} 
                className="relative rounded-xl overflow-hidden aspect-[4/3] group"
              >
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="p-4 text-white font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className={`${isVisible ? 'fade-in' : 'opacity-0'} flex overflow-x-auto gap-4 pb-4 scrollbar-hide`}
            style={{ animationDelay: '400ms' }}
          >
            {galleryItems.filter(item => !item.featured).map((item, i) => (
              <div 
                key={`scroll-${i}`} 
                className="shrink-0 w-72 h-48 rounded-xl overflow-hidden group"
              >
                <div className="relative h-full">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-4 text-white text-sm">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            <button 
              onClick={scrollToPrev}
              className="h-10 w-10 rounded-full flex items-center justify-center bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollToNext}
              className="h-10 w-10 rounded-full flex items-center justify-center bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
