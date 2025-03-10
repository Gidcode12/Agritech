
import { Users, Heart, AlertCircle, Rocket, Lightbulb, Users2, Globe } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creativity",
      description: "Our innovative spirit drives us to revolutionize fashion design and expression in Africa through unique digital solutions."
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Empowerment",
      description: "We achieve our goals through strong collaboration, empowering designers and fashion enthusiasts to reach their full potential."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Community",
      description: "We thrive and draw strength from our diverse community of designers, creating a vibrant ecosystem of creative talent."
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "who":
        return (
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl text-gray-700">
              A passionate team of innovators dedicated to revolutionizing fashion design and creative expression in Africa.
            </p>
          </div>
        );
      case "values":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 text-primary">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        );
      case "problem":
        return (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Limited platforms for creative expression in fashion design and insufficient opportunities for talented designers to showcase their work and earn a living.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              {/* Placeholder for potential problem illustration/image */}
            </div>
          </div>
        );
      case "mission":
        return (
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl text-gray-700">
              To empower individuals to express their unique style through a platform for designing dream outfits, while fostering job creation in the creative sector and building a vibrant designer community.
            </p>
          </div>
        );
    }
  };

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

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100/80 backdrop-blur-sm rounded-full p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-2 rounded-full transition-all",
                  activeTab === tab.id
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
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
