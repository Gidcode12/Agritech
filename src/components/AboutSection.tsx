
import { useState, useEffect } from 'react';
import { GraduationCap, Globe, LineChart, Network } from 'lucide-react';

const AboutSection = () => {
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
    
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className={`opacity-0 ${isVisible ? 'animate-fade-right' : ''}`}>
              <div className="glass-panel px-4 py-2 rounded-full w-fit mb-4">
                <span className="text-sm font-medium text-primary/90">Our Mission</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Empowering Africa's <span className="gradient-text">Next Generation</span> of Innovators
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                The ThinkTank Project was established in 2021 as a collaborative space where African Leadership University students could apply their knowledge to real-world challenges facing the continent. Our multidisciplinary approach combines expertise from various fields to create sustainable, scalable solutions.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                By focusing on innovative methodologies and practical implementation, we're building a new model for how academic institutions can drive meaningful change across Africa and beyond.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '40+', label: 'Active Projects' },
                  { value: '200+', label: 'Students Involved' },
                  { value: '15', label: 'Partner Organizations' },
                  { value: '8', label: 'Countries Impacted' }
                ].map((stat, i) => (
                  <div key={i} className={`opacity-0 ${isVisible ? `animate-fade-up animation-delay-${(i+1)*100}` : ''}`}>
                    <div className="subtle-panel rounded-xl p-4 text-center hover:bg-white/70 transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`grid grid-cols-2 gap-4 md:gap-6 opacity-0 ${isVisible ? 'animate-fade-left animation-delay-200' : ''}`}>
            {[
              {
                icon: <GraduationCap size={28} />,
                title: "Research Excellence",
                description: "Rigorous academic methodologies inform all our projects and initiatives."
              },
              {
                icon: <Globe size={28} />,
                title: "Global Perspective",
                description: "African solutions with relevance to worldwide challenges."
              },
              {
                icon: <Network size={28} />,
                title: "Collaborative Approach",
                description: "Partnerships across institutions, industries, and communities."
              },
              {
                icon: <LineChart size={28} />,
                title: "Data-Driven",
                description: "Evidence-based decision making and impact measurement."
              }
            ].map((pillar, i) => (
              <div 
                key={i} 
                className={`glass-panel rounded-2xl p-6 flex flex-col h-full transform transition-all duration-500 hover:translate-y-[-5px] opacity-0 ${isVisible ? `animate-fade-up animation-delay-${(i+3)*100}` : ''}`}
              >
                <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4 text-primary">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
