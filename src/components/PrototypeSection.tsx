
import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Scissors, Users, Palette, Globe, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrototypeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
    
    const element = document.getElementById('prototype');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const features = [
    {
      icon: <Palette size={24} />,
      title: "Custom Design Interface",
      description: "Intuitive drag-and-drop tools for creating unique fashion pieces that reflect personal style."
    },
    {
      icon: <Users size={24} />,
      title: "Skilled Professional Network",
      description: "Connect with talented designers, tailors, and artisans who bring designs to life."
    },
    {
      icon: <Scissors size={24} />,
      title: "Production Matching",
      description: "Smart algorithms pair designs with the perfect craftspeople based on skills and specialization."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Impact",
      description: "Creating economic opportunities while enabling sustainable, on-demand fashion production."
    }
  ];

  return (
    <section id="prototype" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles size={16} className="mr-2" />
            <span className="text-sm font-medium">Our Innovative Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Introducing <span className="gradient-text">DreamWear</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            An innovative online platform that empowers users to design their own outfits while creating job opportunities for fashion designers, tailors, and artisans.
          </p>
        </div>
        
        {/* Main content area with prototype visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side with description */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            <p className="text-lg">
              DreamWear merges cutting-edge technology with the artistry of fashion design, allowing users to bring their unique style visions to life through an intuitive drag-and-drop interface.
            </p>
            
            <p className="text-lg">
              This platform not only enhances user creativity but also fosters a community of skilled professionals who can turn these designs into reality.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4">Key Benefits:</h3>
              <ul className="space-y-3">
                {[
                  "Democratizes fashion design for everyone",
                  "Creates sustainable income for skilled artisans",
                  "Reduces fashion waste through on-demand production",
                  "Builds global communities around shared creativity"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6">
              <Button className="button-hover group">
                Learn More About DreamWear
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          {/* Right side with prototype visualization */}
          <div className={`${isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/20 p-1">
              <div className="rounded-xl overflow-hidden bg-white shadow-xl">
                <div className="h-10 bg-gray-100 flex items-center px-4 border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1558191053-8edcb01e1da3?w=800&auto=format&fit=crop" 
                    alt="DreamWear Platform Interface"
                    className="rounded-lg w-full object-cover shadow-sm"
                  />
                </div>
              </div>
              {/* Design elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400/20 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className={`glass-panel p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 ${
                isVisible ? `animate-fade-up animation-delay-${(i+5)*100}` : ''
              }`}
            >
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
