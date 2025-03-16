
import { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Clock, Calendar } from 'lucide-react';
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
      title: "Soil Regeneration",
      category: "Ecosystem Health",
      description: "Implementing comprehensive soil health assessments and restoration programs to enhance fertility, microbial activity, and carbon sequestration in depleted farmlands.",
      image: "https://images.unsplash.com/photo-1589928307747-651ed83be6bd",
      status: "Ongoing",
      link: "#"
    },
    {
      title: "Water Conservation",
      category: "Resource Management",
      description: "Developing innovative irrigation solutions and water management techniques to improve efficiency and reduce waste in agricultural water usage.",
      image: "https://images.unsplash.com/photo-1505530316473-bbcee87fa974",
      status: "Completed",
      link: "#"
    },
    {
      title: "Agroforestry Systems",
      category: "Integrated Farming",
      description: "Promoting integrated land-use systems that combine trees with crop production, enhancing biodiversity and improving soil structure.",
      image: "https://images.unsplash.com/photo-1551649778-a3ef9dd2a850",
      status: "Ongoing",
      link: "#"
    }
  ];

  const handleLearnMoreClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className={`max-w-xl mb-10 md:mb-0 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="highlight-badge mb-4">
              <Leaf className="h-3 w-3 mr-1" />
              <span>Our Initiatives</span>
            </div>
            
            <h2 className="section-title">
              Sustainable <span className="text-gradient">Agricultural</span> Projects
            </h2>
            
            <p className="section-subtitle">
              We're implementing innovative farming solutions that benefit both rural communities and the environment.
            </p>
          </div>
          
          <Button variant="outline" className={`${isVisible ? 'slide-up' : 'opacity-0'} group`}>
            View All Projects 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`card-highlight group ${isVisible ? 'slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative h-60 overflow-hidden rounded-t-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="tag-badge bg-black/30 text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center space-x-2 bg-black/30 text-white text-xs py-1 px-2 rounded-full backdrop-blur-sm">
                    <Clock className="h-3 w-3" />
                    <span>{project.status}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group"
                  onClick={() => handleLearnMoreClick(project.link)}
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Farmer Training",
              image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae",
              date: "Monthly",
              description: "Hands-on workshops on sustainable farming practices and climate-adaptive techniques."
            },
            {
              title: "Technology Access",
              image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
              date: "Ongoing",
              description: "Providing farmers with agricultural technology and mobile applications for crop monitoring."
            },
            {
              title: "Organic Certification",
              image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea",
              date: "Quarterly",
              description: "Supporting small-scale farmers through the organic certification process."
            }
          ].map((event, i) => (
            <div 
              key={i}
              className={`flex gap-4 p-4 card-highlight ${isVisible ? 'slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(i + 4) * 100}ms` }}
            >
              <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-primary mr-2" />
                  <span className="text-xs text-muted-foreground">{event.date}</span>
                </div>
                <h3 className="text-base font-medium mb-1">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
