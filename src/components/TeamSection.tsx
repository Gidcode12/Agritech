
import { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const TeamSection = () => {
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
    
    const element = document.getElementById('team');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const team = [
    {
      name: "Amara Okafor",
      role: "Project Lead",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
      bio: "Ph.D. in Computer Science with a focus on AI applications in healthcare.",
    },
    {
      name: "Kwame Mensah",
      role: "Research Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Environmental scientist specializing in sustainable development solutions.",
    },
    {
      name: "Zara Ahmed",
      role: "Innovation Strategist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      bio: "MBA with extensive experience in technology startups across East Africa.",
    },
    {
      name: "David Ndung'u",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Software engineer focused on creating accessible technology solutions.",
    }
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 opacity-0 ${isVisible ? 'animate-fade-up' : ''}`}>
          <div className="glass-panel px-4 py-2 rounded-full mx-auto w-fit mb-4">
            <span className="text-sm font-medium text-primary/90">Our People</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="gradient-text">Brilliant Minds</span> Behind ThinkTank
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our diverse team brings together expertise from various disciplines to drive innovation and create impactful solutions for Africa's challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div 
              key={i} 
              className={`group opacity-0 ${isVisible ? `animate-fade-up animation-delay-${(i+2)*100}` : ''}`}
            >
              <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[3/4]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-apple group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition-colors">
                      <Linkedin size={20} className="text-white" />
                    </a>
                    <a href="#" className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition-colors">
                      <Github size={20} className="text-white" />
                    </a>
                    <a href="#" className="bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition-colors">
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <div className="text-primary font-medium mb-2">{member.role}</div>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
