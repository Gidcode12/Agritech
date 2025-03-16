
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
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      caption: "Wildlife conservation near farmland"
    },
    {
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      caption: "Sunrise over the wheat fields"
    },
    {
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      caption: "Farmers planning crop rotation"
    },
    {
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      caption: "Livestock integration in agriculture"
    },
    {
      image: "https://images.unsplash.com/photo-1464093515883-ec948246accb",
      caption: "Sustainable farming techniques"
    },
    {
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      caption: "Community harvest celebration"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      caption: "Agricultural training workshop"
    },
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      caption: "Water conservation measures"
    },
    {
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
      caption: "Rural community engagement"
    },
    {
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      caption: "Agroforestry implementation"
    },
    {
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      caption: "Organic certification preparation"
    },
    {
      image: "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1",
      caption: "Technology transfer to smallholder farmers"
    }
  ];

  return (
    <section id="team" className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-green-50 to-green-100/30">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 right-20 w-[500px] h-[500px] bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute -top-20 left-20 w-[400px] h-[400px] bg-yellow-100/30 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className={`text-center max-w-3xl mx-auto mb-3 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Our Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            Capturing our work in sustainable agriculture and the communities we serve.
          </p>
        </div>
        
        {/* Horizontal scrolling two-layer masonry gallery */}
        <div 
          className={`w-full overflow-x-auto pb-4 scrollbar-hide
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div 
            ref={galleryRef}
            className="min-w-max px-1" 
            style={{ paddingBottom: '10px' }}
          >
            {/* Two-row masonry layout */}
            <div className="flex flex-col gap-2.5">
              {/* Top row */}
              <div className="flex gap-2.5">
                {galleryItems.slice(0, galleryItems.length / 2).map((item, i) => (
                  <div 
                    key={`top-${i}`} 
                    className="shrink-0 h-[180px] w-[280px] group"
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
                ))}
              </div>
              
              {/* Bottom row */}
              <div className="flex gap-2.5">
                {galleryItems.slice(galleryItems.length / 2).map((item, i) => (
                  <div 
                    key={`bottom-${i}`} 
                    className="shrink-0 h-[220px] w-[280px] group"
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
