
import { useState, useEffect } from 'react';
import { ArrowRight, Sprout, Leaf, TreeDeciduous } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-3xl opacity-30" />
        <div className="diamond-grid absolute inset-0 opacity-[0.03]" />
      </div>

      <div className="section-container relative z-10 my-0 py-0">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className={`glass-panel px-4 py-2 rounded-full mb-6 opacity-0 ${isLoaded ? 'animate-fade-down' : ''}`}>
            <span className="text-sm font-medium text-green-600">Sustainable Agriculture Initiative</span>
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold max-w-3xl mb-6 opacity-0 ${isLoaded ? 'animate-fade-up' : ''}`}>
            Growing the Future, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">One Seed</span> at a time
          </h1>
          
          <p className={`text-lg md:text-ml text-muted-foreground max-w-2xl mb-8 opacity-0 ${isLoaded ? 'animate-fade-up animation-delay-200' : ''}`}>
            Empowering farmers with sustainable methods, innovative technologies, and access to resources for improved yields and environmental stewardship.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center gap-4 opacity-0 ${isLoaded ? 'animate-fade-up animation-delay-300' : ''}`}>
            <Button size="lg" className="button-hover px-6 py-6 bg-green-600 hover:bg-green-700">
              Explore Solutions <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-16">
          {[{
          icon: <Sprout size={24} />,
          title: "Sustainable Farming",
          description: "Promoting eco-friendly agricultural practices for long-term soil health and biodiversity.",
          delay: "animation-delay-400"
        }, {
          icon: <Leaf size={24} />,
          title: "Knowledge Sharing",
          description: "Creating platforms for farmers to exchange techniques and agricultural expertise.",
          delay: "animation-delay-500"
        }, {
          icon: <TreeDeciduous size={24} />,
          title: "Impact Focused",
          description: "Committed to measurable improvements in crop yields and farmer livelihoods.",
          delay: "animation-delay-700"
        }].map((feature, i) => <div key={i} className={`glass-panel rounded-2xl p-8 transform transition-all duration-500 hover:translate-y-[-8px] opacity-0 ${isLoaded ? `animate-fade-up ${feature.delay}` : ''}`}>
              <div className="bg-green-500/10 p-3 rounded-xl w-fit mb-4 text-green-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};

export default HeroSection;
