
import { useState, useEffect } from 'react';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
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
    
    const element = document.getElementById('projects');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: "Healthcare Access Initiative",
      category: "Healthcare",
      description: "A mobile-based telemedicine platform connecting rural communities with urban medical professionals.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      status: "Ongoing"
    },
    {
      title: "Sustainable Agriculture Network",
      category: "AgriTech",
      description: "Implementing IoT solutions for small-scale farmers to optimize water usage and increase crop yields.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      status: "Completed"
    },
    {
      title: "Urban Mobility Solutions",
      category: "Transportation",
      description: "Developing affordable electric vehicle prototypes adapted to African urban environments.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      status: "Ongoing"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
        <div className="diamond-grid absolute inset-0 opacity-[0.03]" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div className={`max-w-xl mb-6 md:mb-0 opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}>
            <div className="glass-panel px-4 py-2 rounded-full w-fit mb-4">
              <span className="text-sm font-medium text-primary/90">Our Work</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Innovative Projects with <span className="gradient-text">Real-World Impact</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Explore our diverse portfolio of projects addressing critical challenges across health, agriculture, technology, and more.
            </p>
          </div>
          
          <Button variant="outline" className={`button-hover group opacity-0 ${isVisible ? 'animate-fade-left animation-delay-200' : ''}`}>
            View All Projects 
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`group relative h-[500px] rounded-2xl overflow-hidden opacity-0 ${isVisible ? `animate-fade-up animation-delay-${(i+3)*100}` : ''}`}
            >
              {/* Image with overlay */}
              <div className="absolute inset-0 bg-gray-900/20 z-10 transition-all duration-700 ease-apple group-hover:bg-gray-900/40" />
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-apple group-hover:scale-[1.03]"
              />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="glass-panel rounded-xl p-6 backdrop-blur-lg transform transition-all duration-500 ease-apple translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1.5 text-sm font-medium">
                      <Tag size={14} className="text-primary" />
                      <span>{project.category}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-sm">
                      <Clock size={14} className="text-primary" />
                      <span>{project.status}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <Button variant="outline" size="sm" className="w-full button-hover">
                    Learn More <ArrowRight size={14} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
