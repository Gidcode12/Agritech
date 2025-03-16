
import { useEffect, useState } from 'react';
import { ArrowRight, Plant, Sprout, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
            <div className="highlight-badge">
              <Plant className="h-3 w-3 mr-1" />
              <span>Sustainable Agriculture</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              Cultivating <span className="text-gradient">Tomorrow's</span> Harvest Today
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Empowering farmers with sustainable practices, innovative technologies, and market connections for improved yields and environmental stewardship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="group" size="lg">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">1.2K+</p>
                <p className="text-sm text-muted-foreground">Farmers Supported</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">18</p>
                <p className="text-sm text-muted-foreground">Countries Reached</p>
              </div>
            </div>
          </div>
          
          <div className={`${isLoaded ? 'fade-in' : 'opacity-0'} relative`}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-custom-lg">
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2" 
                alt="Sustainable farming" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-primary rounded-full p-2">
                  <Sprout className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Eco-Friendly</p>
                  <p className="text-sm text-muted-foreground">Sustainable Practices</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-secondary rounded-full p-2">
                  <Sun className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Renewable Energy</p>
                  <p className="text-sm text-muted-foreground">Solar Powered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
