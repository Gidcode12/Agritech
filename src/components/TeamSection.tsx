
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

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

  // Gallery items with images of varying aspect ratios
  const galleryItems = [
    {
      image: "https://i.ibb.co/fdhFfsSb/ogoo.jpg",
      caption: "Team brainstorming session"
    },
    {
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop",
      caption: "Planning our next move"
    },
    {
      image: "https://i.ibb.co/21538QQb/celyse.png",
      caption: "Design thinking workshop"
    },
    {
      image: "https://i.ibb.co/YF8pcWjb/matt.jpg",
      caption: "Coding marathon"
    },
    {
      image: "https://i.ibb.co/YFm5z0Rp/ERIOLUWA-1.png",
      caption: "Project review meeting"
    },
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1350&auto=format&fit=crop",
      caption: "Team building activity"
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1350&auto=format&fit=crop",
      caption: "Working remotely together"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1350&auto=format&fit=crop",
      caption: "Collaborative problem-solving"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
      caption: "Tech infrastructure planning"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      caption: "Remote work setup"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      caption: "Research and development"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      caption: "Hardware exploration"
    }
  ];

  return (
    <section id="team" className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 left-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className={`text-center max-w-3xl mx-auto mb-3 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            Memorable experiences. From milestones to everyday interactions and fun moments.
          </p>
        </div>
        
        {/* Horizontal scrolling masonry gallery */}
        <div 
          className={`w-full overflow-x-auto pb-4 scrollbar-hide
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div 
            ref={galleryRef}
            className="flex gap-2.5 min-w-max" 
            style={{ paddingBottom: '10px' }}
          >
            {galleryItems.map((item, i) => {
              // Decide random height for images to create masonry effect
              const heightClass = i % 3 === 0 
                ? "h-[250px]" 
                : i % 3 === 1 
                  ? "h-[350px]" 
                  : "h-[300px]";
                
              return (
                <div 
                  key={i} 
                  className={`shrink-0 ${heightClass} w-[280px] group`}
                >
                  <div className="relative h-full overflow-hidden rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-1">
                    <img 
                      src={item.image} 
                      alt={item.caption}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
