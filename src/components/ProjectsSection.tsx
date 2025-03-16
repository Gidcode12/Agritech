
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
      title: "Soil Regeneration",
      category: "Initiative 1",
      description: "Implementing comprehensive soil health assessments and restoration programs to enhance fertility, microbial activity, and carbon sequestration in depleted farmlands across rural communities.",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      status: "Ongoing",
      link: "https://google.com"
    },
    {
      title: "Water Conservation",
      category: "Initiative 2",
      description: "Developing innovative irrigation solutions and water management techniques to improve efficiency and reduce waste in agricultural water usage, especially in drought-prone regions.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      status: "Completed",
      link: "https://google.com"
    },
    {
      title: "Agroforestry Systems",
      category: "Initiative 3",
      description: "Promoting integrated land-use systems that combine trees with crop production, enhancing biodiversity, improving soil structure, and providing multiple income streams for rural farmers.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      status: "Ongoing",
      link: "https://google.com"
    },
    {
      title: "Organic Certification",
      category: "Initiative 4",
      description: "Supporting small-scale farmers through the organic certification process, connecting them with premium markets, and establishing transparent supply chains for their chemical-free produce.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      status: "Completed",
      link: "https://google.com"
    },
    {
      title: "Farmer Training",
      category: "Initiative 5",
      description: "Conducting hands-on workshops and training programs on sustainable farming practices, pest management, and climate-adaptive techniques to empower local agricultural communities.",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      status: "Ongoing",
      link: "https://google.com"
    },
    {
      title: "Technology Access",
      category: "Initiative 6",
      description: "Bridging the digital divide by providing farmers with access to agricultural technology, mobile applications for crop monitoring, and market information systems to maximize productivity and profits.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      status: "Planning",
      link: "https://google.com"
    }
  ];

  const handleLearnMoreClick = (link: string) => {
    window.open(link, '_blank'); // Opens the link in a new tab
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-green-50">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-yellow-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-green-100 rounded-full blur-3xl" />
        <div className="diamond-grid absolute inset-0 opacity-[0.03]" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div className={`max-w-xl mb-6 md:mb-0 opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}>
            <div className="glass-panel px-4 py-2 rounded-full w-fit mb-4 bg-green-50">
              <span className="text-sm font-medium text-green-600">Agricultural Initiatives</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">Farming Initiatives</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              We're implementing sustainable agricultural practices that benefit farmers, communities, and the environment.
            </p>
          </div>
          
          <Button variant="outline" className={`button-hover group opacity-0 border-green-200 text-green-700 hover:bg-green-50 ${isVisible ? 'animate-fade-left animation-delay-200' : ''}`}>
            View All Initiatives 
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
                      <Tag size={14} className="text-green-600" />
                      <span>{project.category}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-sm">
                      <Clock size={14} className="text-green-600" />
                      <span>{project.status}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full button-hover border-green-200 text-green-700 hover:bg-green-50"
                    onClick={() => handleLearnMoreClick(project.link)}
                  >
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
