
import { Users, Heart, AlertCircle, Rocket, Leaf, Sprout, Globe, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("who");
  
  const tabs = [
    {
      id: "who",
      label: "Who we are",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: "values",
      label: "Values",
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: "problem",
      label: "Problem",
      icon: <AlertCircle className="w-5 h-5" />
    },
    {
      id: "mission",
      label: "Mission",
      icon: <Rocket className="w-5 h-5" />
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Agricultural Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
      socials: [
        { type: "instagram", url: "https://www.instagram.com/" },
        { type: "linkedin", url: "https://linkedin.com/" },
        { type: "mail", url: "mailto:contact@example.com" }
      ]
    },
    {
      name: "Michael Torres",
      role: "Sustainability Expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
      socials: [
        { type: "instagram", url: "https://www.instagram.com/" },
        { type: "linkedin", url: "https://linkedin.com/" },
        { type: "mail", url: "mailto:contact@example.com" }
      ]
    },
    {
      name: "Amara Okafor",
      role: "Community Liaison",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
      socials: [
        { type: "instagram", url: "https://www.instagram.com/" },
        { type: "linkedin", url: "https://linkedin.com/" },
        { type: "mail", url: "mailto:contact@example.com" }
      ]
    },
    {
      name: "David Chen",
      role: "Technology Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      socials: [
        { type: "instagram", url: "https://www.instagram.com/" },
        { type: "github", url: "https://github.com/" },
        { type: "mail", url: "mailto:contact@example.com" }
      ]
    },
    {
      name: "Maria Rodriguez",
      role: "Agricultural Scientist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
      socials: [
        { type: "instagram", url: "https://www.instagram.com/" },
        { type: "linkedin", url: "https://linkedin.com/" },
        { type: "mail", url: "mailto:contact@example.com" }
      ]
    }
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "We're committed to agricultural practices that preserve resources for future generations while meeting present needs."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focus",
      description: "Farmers are at the heart of our work. We build solutions that directly address their challenges and aspirations."
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace new technologies and approaches that can revolutionize farming while respecting traditional knowledge."
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "who":
        return (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-xl text-gray-700">
                We are agricultural specialists dedicated to empowering farmers with sustainable practices and innovative technologies that improve yields while preserving the environment.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              {/* First row with 3 team members */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 w-full max-w-5xl">
                {teamMembers.slice(0, 3).map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                    <div className="flex justify-center mb-4">
                      <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-green-100">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-500 mb-4">{member.role}</p>
                    <div className="flex justify-center gap-3">
                      {member.socials.map((social, sIndex) => (
                        <a 
                          key={sIndex} 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-400 hover:text-green-600 transition-colors"
                        >
                          {social.type === "github" && <Github className="w-5 h-5" />}
                          {social.type === "linkedin" && <Linkedin className="w-5 h-5" />}
                          {social.type === "mail" && <Mail className="w-5 h-5" />}
                          {social.type === "instagram" && <Instagram className="w-5 h-5" />}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Second row with 2 team members (centered) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
                {teamMembers.slice(3, 5).map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                    <div className="flex justify-center mb-4">
                      <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-green-100">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                          />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-500 mb-4">{member.role}</p>
                    <div className="flex justify-center gap-3">
                      {member.socials.map((social, sIndex) => (
                        <a 
                        key={sIndex} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-green-600 transition-colors"
                        >
                          {social.type === "github" && <Github className="w-5 h-5" />}
                          {social.type === "linkedin" && <Linkedin className="w-5 h-5" />}
                          {social.type === "mail" && <Mail className="w-5 h-5" />}
                          {social.type === "instagram" && <Instagram className="w-5 h-5" />}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "values":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-5 text-green-600">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        );
      case "problem":
        return (
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Small-scale farmers face significant challenges including limited access to modern agricultural technologies, vulnerability to climate change, and restricted market opportunities. These issues lead to lower crop yields, reduced income, and food insecurity in rural communities. Additionally, unsustainable farming practices contribute to soil degradation, water pollution, and biodiversity loss, creating a cycle of environmental decline and reduced agricultural productivity.
              </p>
              <div className="mt-6">
                <Button variant="outline" className="mt-4 border-green-200 text-green-700 hover:bg-green-50">
                  Learn more about our solutions
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3" 
                alt="Farming challenges in rural communities" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        );
      case "mission":
        return (
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to empower farmers through sustainable agricultural practices, innovative technologies, and market connections, enabling improved yields, increased incomes, and environmental stewardship for a resilient food system.
              </p>
              <div className="mt-6">
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  Join our mission
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1464093515883-ec948246accb" 
                alt="Our agricultural mission" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50 relative overflow-hidden" id="about">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-green-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-yellow-100 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get to know us
        </h2>

        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-green-100/80 backdrop-blur-sm rounded-full p-1.5 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full transition-all",
                  activeTab === tab.id
                    ? "bg-white text-green-700 shadow-sm font-medium"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default AboutTabs;
