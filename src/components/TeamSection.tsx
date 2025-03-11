
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  
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

  // Scroll functions
  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Gallery items with different sizes and positions for collage effect
  const galleryItems = [
    {
      image: "https://i.ibb.co/fdhFfsSb/ogoo.jpg",
      caption: "Team brainstorming session",
      size: "small" // small size
    },
    {
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop",
      caption: "Planning our next move",
      size: "large" // large size
    },
    {
      image: "https://i.ibb.co/21538QQb/celyse.png",
      caption: "Design thinking workshop",
      size: "medium" // medium size
    },
    {
      image: "https://i.ibb.co/YF8pcWjb/matt.jpg",
      caption: "Coding marathon",
      size: "small" // small size
    },
    {
      image: "https://i.ibb.co/YFm5z0Rp/ERIOLUWA-1.png",
      caption: "Project review meeting",
      size: "medium" // medium size
    },
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Team building activity",
      size: "large" // large size
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Working remotely together",
      size: "medium" // medium size
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Collaborative problem-solving",
      size: "small" // small size
    }
  ];

  return (
    <section id="team" className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-10 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gallery
          </h2>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-end gap-2 mb-4 px-4 md:px-8">
          <Button 
            onClick={scrollLeft} 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            onClick={scrollRight} 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Grid-based collage gallery */}
        <div 
          ref={galleryRef}
          className={`
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 px-4 md:px-8
            overflow-x-auto pb-8 snap-x snap-mandatory
            scrollbar-hide scroll-smooth
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}
          `}
          style={{ 
            gridAutoFlow: 'column',
            gridTemplateRows: 'repeat(2, minmax(120px, 1fr))',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            minWidth: '100%',
            gridAutoColumns: 'minmax(120px, 200px)'
          }}
        >
          {galleryItems.map((item, i) => (
            <div 
              key={i} 
              className={`
                group snap-start transform transition-all duration-500 hover:scale-[1.03]
                overflow-hidden rounded-xl relative
                ${item.size === 'large' ? 'row-span-2 col-span-1' : 
                  item.size === 'medium' ? 'row-span-1 col-span-1' : 'row-span-1 col-span-1'}
                animation-delay-${(i+1)*100}
              `}
              style={{
                minHeight: item.size === 'large' ? '280px' : 
                          item.size === 'medium' ? '180px' : '140px',
                aspectRatio: item.size === 'large' ? '3/4' : 
                            item.size === 'medium' ? '4/3' : '1/1'
              }}
            >
              <img 
                src={item.image} 
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 ease-out 
                         group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-2 left-3 right-3 text-white text-sm font-medium">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Auto-scrolling indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {[...Array(Math.ceil(galleryItems.length / 4))].map((_, i) => (
            <div 
              key={i} 
              className={`
                h-2 rounded-full bg-primary/20 transition-all duration-300
                ${i === 0 ? 'w-8 bg-primary' : 'w-2'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
