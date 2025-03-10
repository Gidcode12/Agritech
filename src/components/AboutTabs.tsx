
import { Users, Heart, AlertCircle, Rocket } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("who");
  
  const tabs = [
    {
      id: "who",
      label: "Who we are",
      icon: <Users className="w-5 h-5" />,
      content: "A passionate team of innovators dedicated to revolutionizing fashion design and creative expression in Africa."
    },
    {
      id: "values",
      label: "Values",
      icon: <Heart className="w-5 h-5" />,
      content: "Creativity, Empowerment, Community, and Innovation drive everything we do as we build bridges between designers and fashion enthusiasts."
    },
    {
      id: "problem",
      label: "Problem",
      icon: <AlertCircle className="w-5 h-5" />,
      content: "Limited platforms for creative expression in fashion design and insufficient opportunities for talented designers to showcase their work and earn a living."
    },
    {
      id: "mission",
      label: "Mission",
      icon: <Rocket className="w-5 h-5" />,
      content: "To empower individuals to express their unique style through a platform for designing dream outfits, while fostering job creation in the creative sector and building a vibrant designer community."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-blue-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get to know us
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={cn(
                "gap-2 px-6 py-6",
                activeTab === tab.id ? "shadow-lg" : "hover:bg-primary/5"
              )}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </Button>
          ))}
        </div>

        <div className="glass-panel max-w-3xl mx-auto p-8 text-center animate-fade-up">
          {tabs.map((tab) => (
            <p
              key={tab.id}
              className={cn(
                "text-lg transition-all duration-300",
                activeTab === tab.id ? "block" : "hidden"
              )}
            >
              {tab.content}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTabs;
