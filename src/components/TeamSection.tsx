
import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, ExternalLink, Instagram, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
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

  // Team member gallery items
  const galleryItems = [
    {
      image: "https://i.ibb.co/fdhFfsSb/ogoo.jpg",
      caption: "Ready to crush the challenge",
      name: "Ogoochukwu Jonnwakalo",
      role: "Team Lead"
    },
    {
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop",
      caption: "Brainstorming new ideas",
      name: "Alima Umwiza",
      role: "Reporter/Presenter"
    },
    {
      image: "https://i.ibb.co/21538QQb/celyse.png",
      caption: "Perfecting the presentation",
      name: "Celyse Ishimwe",
      role: "Communication Lead"
    },
    {
      image: "https://i.ibb.co/YF8pcWjb/matt.jpg",
      caption: "Christian drafting the Prototype",
      name: "Mathew Avhiokhode",
      role: "Research Lead"
    },
    {
      image: "https://i.ibb.co/YFm5z0Rp/ERIOLUWA-1.png",
      caption: "Taps the team's mastermind 😊",
      name: "Erioluwa Olowoyo",
      role: "Design Lead"
    }
  ];

  return (
    <section id="team" className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-12 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Gallery
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Memorable experiences. From milestones to everyday 
            interactions and fun moments.
          </p>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-end gap-2 mb-6 px-4 md:px-8">
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
        
        {/* Horizontally scrolling gallery */}
        <div 
          ref={galleryRef}
          className={`
            flex gap-6 overflow-x-auto pb-8 px-4 md:px-8 snap-x snap-mandatory
            scrollbar-hide scroll-smooth
            ${isVisible ? 'animate-fade-in' : 'opacity-0'} 
          `}
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {galleryItems.map((item, i) => (
            <div 
              key={i} 
              className={`
                group flex-shrink-0 snap-center transform transition-all duration-500 hover:scale-[1.02]
                w-[300px] md:w-[400px] animation-delay-${(i+1)*100}
              `}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-2">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="text-lg font-medium">{item.caption}</p>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                <p className="text-primary font-medium">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Auto-scrolling indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {galleryItems.map((_, i) => (
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
