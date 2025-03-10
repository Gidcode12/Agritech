import { useState, useEffect } from 'react';
import { ArrowRight, Brain, Lightbulb, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-3xl opacity-30" />
        <div className="diamond-grid absolute inset-0 opacity-[0.03]" />
      </div>

      <div className="section-container relative z-10 my-0 py-0">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className={`glass-panel px-4 py-2 rounded-full mb-6 opacity-0 ${isLoaded ? 'animate-fade-down' : ''}`}>
            <span className="text-sm font-medium text-primary/90">V_Ex Innovation Initiative</span>
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold max-w-3xl mb-6 opacity-0 ${isLoaded ? 'animate-fade-up' : ''}`}>
            Creating the Future, <span className="gradient-text">One Solution</span> at a time
          </h1>
          
          <p className={`text-lg md:text-ml text-muted-foreground max-w-2xl mb-8 opacity-0 ${isLoaded ? 'animate-fade-up animation-delay-200' : ''}`}>
           Empowering style expression through outfit design, fostering creative jobs, and building a designer community.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center gap-4 opacity-0 ${isLoaded ? 'animate-fade-up animation-delay-300' : ''}`}>
            <Button size="lg" className="button-hover px-6 py-6">
              Explore Projects <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="button-hover px-6 py-6">
              Our Methodology
            </Button>
          </div>
        </div>

        {/* Feature cards
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-16">
          {[{
          icon: <Brain size={24} />,
          title: "Innovative Thinking",
          description: "Fostering creative approaches to Africa's most pressing challenges.",
          delay: "animation-delay-400"
        }, {
          icon: <Lightbulb size={24} />,
          title: "Knowledge Exchange",
          description: "Creating platforms for cross-disciplinary collaboration and learning.",
          delay: "animation-delay-500"
        }, {
          icon: <BarChart3 size={24} />,
          title: "Impact Focused",
          description: "Committed to scalable solutions with measurable results.",
          delay: "animation-delay-700"
        }].map((feature, i) => <div key={i} className={`glass-panel rounded-2xl p-8 transform transition-all duration-500 hover:translate-y-[-8px] opacity-0 ${isLoaded ? `animate-fade-up ${feature.delay}` : ''}`}>
              <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>)}
        </div> */}
      </div>
    </section>;
};
export default HeroSection;