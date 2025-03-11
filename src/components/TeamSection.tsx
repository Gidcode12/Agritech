
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
      galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Enhanced gallery items with more images for better scrolling experience
  const galleryItems = [
    {
      image: "https://i.ibb.co/fdhFfsSb/ogoo.jpg",
      caption: "Team brainstorming session",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop",
      caption: "Planning our next move",
      size: "large"
    },
    {
      image: "https://i.ibb.co/21538QQb/celyse.png",
      caption: "Design thinking workshop",
      size: "small"
    },
    {
      image: "https://i.ibb.co/YF8pcWjb/matt.jpg",
      caption: "Coding marathon",
      size: "medium"
    },
    {
      image: "https://i.ibb.co/YFm5z0Rp/ERIOLUWA-1.png",
      caption: "Project review meeting",
      size: "small"
    },
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1350&auto=format&fit=crop",
      caption: "Team building activity",
      size: "large"
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1350&auto=format&fit=crop",
      caption: "Working remotely together",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1350&auto=format&fit=crop",
      caption: "Collaborative problem-solving",
      size: "small"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
      caption: "Tech infrastructure planning",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      caption: "Remote work setup",
      size: "large"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      caption: "Research and development",
      size: "medium"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      caption: "Hardware exploration",
      size: "small"
    }
  ];

  return (
    <section id="team" className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 left-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-6 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold">
            Gallery
          </h2>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-end gap-2 mb-2 px-4 md:px-8">
          <Button 
            onClick={scrollLeft} 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            onClick={scrollRight} 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Tighter collage gallery with smaller gaps */}
        <div 
          ref={galleryRef}
          className={`
            grid grid-flow-col auto-cols-max gap-[10px] px-4 md:px-8
            overflow-x-auto pb-4 pt-1 snap-x snap-mandatory
            scrollbar-hide scroll-smooth
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}
          `}
          style={{ 
            gridTemplateRows: 'repeat(3, minmax(80px, auto))',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {galleryItems.map((item, i) => (
            <div 
              key={i} 
              className={`
                group snap-start transform transition-all duration-300 hover:translate-y-[-3px]
                overflow-hidden rounded-md relative shadow-md
                ${item.size === 'large' ? 'row-span-3 w-[190px] h-[290px]' : 
                  item.size === 'medium' ? 'row-span-2 w-[160px] h-[190px]' : 'row-span-1 w-[140px] h-[140px]'}
              `}
              style={{
                gridColumnStart: 'auto',
                gridRowStart: ((i % 3) + 1)
              }}
            >
              <img 
                src={item.image} 
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 ease-out 
                         group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-2 mt-3">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className={`
                h-2 rounded-full transition-all duration-300
                ${i === 0 ? 'w-8 bg-primary' : 'w-2 bg-primary/20'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
