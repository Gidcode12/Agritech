
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
      title: "Elevator Pitch",
      category: "Challenge 1",
      description: "Here’s our elevator pitch introducing our names, country, interests, and a fun fact. We shared our passions, why we care about these issues, our goals for solving them, and the unique contributions each of us brings to the team.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      status: "Completed"
    },
    {
      title: "Discover Africa",
      category: "Challenge 2",
      description: "For this challenge, The Visionary Executors uncovered and shared the story of the Emptiest Country, Namibia, through our interview radio channel. We explored fascinating facts about Namibia, addressed common misconceptions, highlighted its uniqueness, and discussed the challenges facing this great country.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      status: "Completed"
    },
    {
      title: "Help Lab",
      category: "Challenge 3",
      description: "Creating impact in the community is an essential part of E-lab. For Challenge 3, Sorwazini engaged in Help-Lab. In this challenge, we made a significant impact on the students at St. Rita Primary School by educating them in digital literacy and conducting extracurricular activities.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      status: "Completed"
    },
    {
      title: "Hunt for Tressure",
      category: "Challenge 4",
      description: "Our quest for valuable resources led us to I.D.A. Technology, a company specializing in Information Development for Africa. We conducted a virtual interview with CTO Mr. Telesphore Tuganimana, exploring their solutions and alignment with our goals. Here, we highlight key moments from the interview and reflect on how our findings deepen our understanding of the challenges we aim to address",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      status: "Completed"
    },
    {
      title: "Mission Voyage",
      category: "Challenge 5",
      description: "In this challenge, we assumed a $10,000 grant was available, and we developed a compelling proposal and application to secure the funding for our project. The video briefly introduces us and describes the situation we're tackling, our mission and problem statement, a research analysis, our project idea, its impact, and why we deserve the grant.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      status: "Completed"
    },
    {
      title: "Our Digital Print",
      category: "Challenge 6",
      description: "The website highlights our E-Lab experience, featuring a clear mission statement and an articulate problem statement alongside our proposed solutions. It features think tank members' profiles and documents all six E-Lab challenges, capturing the essence of our collaborative journey and innovative solutions.",
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
              <span className="text-sm font-medium text-primary/90">E-Lab Challenges</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              E-Lab <span className="gradient-text"> Six Challenges</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              We tackled six challenges as a Think Tank group, exposing us to real-world contexts, complexity, and innovative thinking.
            </p>
          </div>
          
          <Button variant="outline" className={`button-hover group opacity-0 ${isVisible ? 'animate-fade-left animation-delay-200' : ''}`}>
            View All Challenges 
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
