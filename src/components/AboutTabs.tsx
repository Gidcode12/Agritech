
import { useState } from "react";
import { Users, Heart, AlertCircle, Rocket, Leaf, Sprout, Globe, Linkedin, Mail, Instagram, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("who");
  
  const tabs = [
    {
      id: "who",
      label: "Our Team",
      icon: <Users className="w-4 h-4" />
    },
    {
      id: "values",
      label: "Our Values",
      icon: <Heart className="w-4 h-4" />
    },
    {
      id: "problem",
      label: "Challenges",
      icon: <AlertCircle className="w-4 h-4" />
    },
    {
      id: "mission",
      label: "Mission",
      icon: <Rocket className="w-4 h-4" />
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
        { type: "linkedin", url: "https://linkedin.com/" },
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
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainability",
      description: "We're committed to agricultural practices that preserve resources for future generations while meeting present needs."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Focus",
      description: "Farmers are at the heart of our work. We build solutions that directly address their challenges and aspirations."
    },
    {
      icon: <Sprout className="w-6 h-6" />,
      title: "Innovation",
      description: "We embrace new technologies and approaches that can revolutionize farming while respecting traditional knowledge."
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "who":
        return (
          <div className="mt-12">
            <div className="text-center mb-10">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our diverse team of agricultural specialists is dedicated to empowering farmers with sustainable practices and innovative technologies that improve yields while preserving the environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="card-highlight group">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-4 flex justify-center gap-4">
                    {member.socials.map((social, sIndex) => (
                      <a 
                        key={sIndex} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {social.type === "linkedin" && <Linkedin className="w-5 h-5" />}
                        {social.type === "mail" && <Mail className="w-5 h-5" />}
                        {social.type === "instagram" && <Instagram className="w-5 h-5" />}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
              {teamMembers.slice(3, 5).map((member, index) => (
                <div key={index} className="card-highlight group">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-4 flex justify-center gap-4">
                    {member.socials.map((social, sIndex) => (
                      <a 
                        key={sIndex} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
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
        );
      case "values":
        return (
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card-highlight p-8 flex flex-col items-center text-center">
                  <div className="feature-icon mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "problem":
        return (
          <div className="mt-12 grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-2xl font-semibold">Agricultural Challenges We Address</h3>
              <p className="text-muted-foreground">
                Small-scale farmers face significant challenges including limited access to modern agricultural technologies, vulnerability to climate change, and restricted market opportunities. These issues lead to lower crop yields, reduced income, and food insecurity in rural communities.
              </p>
              <p className="text-muted-foreground">
                Additionally, unsustainable farming practices contribute to soil degradation, water pollution, and biodiversity loss, creating a cycle of environmental decline and reduced agricultural productivity.
              </p>
              <div className="pt-4">
                <Button variant="outline">
                  Learn more about our solutions
                </Button>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-lg overflow-hidden shadow-custom">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3" 
                  alt="Farming challenges in rural communities" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        );
      case "mission":
        return (
          <div className="mt-12 grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2 order-last md:order-first">
              <div className="rounded-lg overflow-hidden shadow-custom">
                <img 
                  src="https://images.unsplash.com/photo-1625757870084-a560237c1d89" 
                  alt="Our agricultural mission" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                Our mission is to empower farmers through sustainable agricultural practices, innovative technologies, and market connections, enabling improved yields, increased incomes, and environmental stewardship for a resilient food system.
              </p>
              <div className="pt-4">
                <Button>
                  Join our mission
                </Button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24" id="about">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <div className="highlight-badge mb-4">
            <GraduationCap className="h-3 w-3 mr-1" />
            <span>About Us</span>
          </div>
          <h2 className="section-title">Get to Know Our Approach</h2>
          <p className="section-subtitle mb-10">
            Learn about our team, values, and the agricultural challenges we're committed to solving.
          </p>
        </div>

        <div className="bg-muted rounded-xl p-1.5 flex flex-wrap justify-center mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-lg transition-all text-sm font-medium",
                activeTab === tab.id
                  ? "bg-white shadow-sm text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default AboutTabs;
