
import { useState, useEffect } from 'react';
import { ArrowRight, Sprout, Leaf, TreeDeciduous, Tractor, Check } from 'lucide-react';
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
      icon: <Leaf size={24} />,
      title: "Precision Farming",
      description: "Smart sensors and analytics to optimize water, fertilizer, and pest management for each crop's specific needs."
    },
    {
      icon: <TreeDeciduous size={24} />,
      title: "Farmer Network",
      description: "Connect with experienced agriculturists, agronomists, and fellow farmers for knowledge sharing."
    },
    {
      icon: <Sprout size={24} />,
      title: "Resource Efficiency",
      description: "AI-driven recommendations to reduce resource waste while improving crop quality and yields."
    },
    {
      icon: <Tractor size={24} />,
      title: "Market Access",
      description: "Direct connections to buyers, reducing intermediaries and improving farmer income."
    }
  ];

  return (
    <section id="prototype" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-100 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 mb-4">
            <Sprout size={16} className="mr-2" />
            <span className="text-sm font-medium">Our Innovative Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Introducing <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">FarmConnect</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            A comprehensive digital platform that empowers farmers with precision agriculture tools, weather analytics, and market access while promoting sustainable farming practices.
          </p>
        </div>
        
        {/* Main content area with prototype visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side with description */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            <p className="text-lg">
              FarmConnect combines cutting-edge technology with agricultural expertise, allowing farmers to make data-driven decisions for improved crop management and sustainable practices.
            </p>
            
            <p className="text-lg">
              This platform not only enhances farming efficiency but also creates a supportive community that helps farmers adapt to changing climate conditions and market demands.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4">Key Benefits:</h3>
              <ul className="space-y-3">
                {[
                  "Increased crop yields and quality through precision agriculture",
                  "Reduced water and fertilizer usage with targeted application",
                  "Higher income through direct market access and price insights",
                  "Adaptation to climate change through predictive analytics"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={20} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6">
              <Button className="button-hover group bg-green-600 hover:bg-green-700">
                Learn More About FarmConnect
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          {/* Right side with prototype visualization */}
          <div className={`${isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-green-100 p-1">
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
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                    alt="FarmConnect Platform Interface"
                    className="rounded-lg w-full object-cover shadow-sm"
                  />
                </div>
              </div>
              {/* Design elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200/50 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-200/50 rounded-full"></div>
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
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <div className="text-green-600">{feature.icon}</div>
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
