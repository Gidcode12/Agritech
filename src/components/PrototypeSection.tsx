
import { useState, useEffect } from 'react';
import { ArrowRight, BarChart3, Leaf, Sparkles, CloudRain, StoreIcon } from 'lucide-react';
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
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Precision Farming",
      description: "Smart sensors and analytics optimize water, fertilizer, and pest management."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Knowledge Network",
      description: "Connect with agronomists and fellow farmers for expertise sharing."
    },
    {
      icon: <CloudRain className="h-6 w-6" />,
      title: "Resource Efficiency",
      description: "AI-driven recommendations reduce waste while improving crop quality."
    },
    {
      icon: <StoreIcon className="h-6 w-6" />,
      title: "Market Access",
      description: "Direct connections to buyers, reducing intermediaries and improving income."
    }
  ];

  return (
    <section id="prototype" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%2322c55e\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3Ccircle cx=\"13\" cy=\"13\" r=\"3\"/%3E%3C/g%3E%3C/svg%3E')] opacity-80"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="accent-badge mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            <span>Our Innovation</span>
          </div>
          
          <h2 className="section-title">
            Introducing <span className="text-gradient">FarmConnect</span>
          </h2>
          
          <p className="section-subtitle">
            A comprehensive digital platform empowering farmers with precision agriculture tools, weather analytics, and market access.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`${isVisible ? 'slide-up' : 'opacity-0'}`}>
            <div className="card-highlight overflow-hidden">
              <div className="relative aspect-[4/3] bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-39b12ea37ee7" 
                  alt="FarmConnect Platform Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-3">
                <div className="text-xs font-semibold">Platform Analytics</div>
                <div className="text-sm text-muted-foreground">Active users: 2,438</div>
              </div>
            </div>
          </div>
          
          <div className={`space-y-6 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-semibold">The Future of Farming Is Digital</h3>
            
            <p className="text-muted-foreground">
              FarmConnect combines cutting-edge technology with agricultural expertise, allowing farmers to make data-driven decisions for improved crop management and sustainable practices.
            </p>
            
            <div className="border-l-4 border-primary pl-4 my-6">
              <p className="text-muted-foreground italic">
                "This platform not only enhances farming efficiency but also creates a supportive community that helps farmers adapt to changing climate conditions and market demands."
              </p>
            </div>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p>Increased crop yields through precision agriculture</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p>Reduced water and fertilizer usage with targeted application</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p>Higher income through direct market access and price insights</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className={`card-highlight p-6 ${isVisible ? 'slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(i+5)*100}ms` }}
            >
              <div className="feature-icon mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
