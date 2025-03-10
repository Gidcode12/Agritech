
import { Users, Heart, AlertCircle, Rocket, Lightbulb, Users2, Globe, Github, Linkedin, Mail } from "lucide-react";
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
      name: "Ogoochukwu Jonnwakalo",
      role: "Team Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      socials: [
        { type: "github", url: "https://github.com/" },
        { type: "linkedin", url: "https://linkedin.com/" }
      ]
    },
    {
      name: "Alima Umwiza",
      role: "Reporter/Presenter",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      socials: [
        { type: "github", url: "https://github.com/" },
        { type: "linkedin", url: "https://linkedin.com/" }
      ]
    },
    {
      name: "Celyse Ishimwe",
      role: "Communication Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      socials: [
        { type: "github", url: "https://github.com/" },
        { type: "linkedin", url: "https://linkedin.com/" }
      ]
    },
    {
      name: "Mathew Avhiokhode",
      role: "Research Lead",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      socials: [
        { type: "github", url: "https://github.com/" },
        { type: "linkedin", url: "https://linkedin.com/" },
        { type: "mail", url: "mailto:example@example.com" }
      ]
    },
    {
      name: "Erioluwa Olowoyo",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      socials: [
        { type: "github", url: "https://github.com/" },
        { type: "linkedin", url: "https://linkedin.com/" },
        { type: "mail", url: "mailto:sarah@example.com" }
      ]
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creativity",
      description: "Our spirit for innovation fuels us to find unique solutions for the challenges in the transport system."
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Teamwork",
      description: "We achieve our goals through strong collaboration and mutual support."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Pan-Africanism",
      description: "We thrive and draw strength from our diverse backgrounds, skills and experiences."
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "who":
        return (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-xl text-gray-700">
                Pan-African Techpreneurs united by a shared mission to transform Rwanda's public transport system.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              {/* First row with 3 team members */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 w-full max-w-5xl">
                {teamMembers.slice(0, 3).map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                    <div className="flex justify-center mb-4">
                      <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-primary/10">
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
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          {social.type === "github" && <Github className="w-5 h-5" />}
                          {social.type === "linkedin" && <Linkedin className="w-5 h-5" />}
                          {social.type === "mail" && <Mail className="w-5 h-5" />}
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
                      <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-primary/10">
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
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          {social.type === "github" && <Github className="w-5 h-5" />}
                          {social.type === "linkedin" && <Linkedin className="w-5 h-5" />}
                          {social.type === "mail" && <Mail className="w-5 h-5" />}
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
                <div className="mb-5 text-gray-600">{value.icon}</div>
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
                In Rwanda, public transport is a lifeline for many, with over 40% of people depending on buses to get around. 
                Unfortunately, the current ticketing system leads to long waits and crowded bus stations, making daily journeys 
                stressful and time-consuming. To make things easier we need a fresh, tech-driven approach to streamline the system 
                and ensure a smoother, more efficient ride for everyone.
              </p>
              <div className="mt-6">
                <Button variant="outline" className="mt-4">
                  Learn more about our solution
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="public/lovable-uploads/518929ae-196b-490b-be1f-9901c482ea72.png" 
                alt="Public transport challenges in Rwanda" 
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
                Our Mission is to transform public transportation in Rwanda through innovative software solutions, enhancing 
                accessibility and creating a seamless, efficient transport network.
              </p>
              <div className="mt-6">
                <Button className="mt-4">
                  Join our mission
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md order-1 md:order-2">
              <img 
                src="public/lovable-uploads/a78f5b9e-30e6-46a2-96ca-3f337518e170.png" 
                alt="Our mission" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="about">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-blue-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get to know us
        </h2>

        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-100/80 backdrop-blur-sm rounded-full p-1.5 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full transition-all",
                  activeTab === tab.id
                    ? "bg-white text-primary shadow-sm font-medium"
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
