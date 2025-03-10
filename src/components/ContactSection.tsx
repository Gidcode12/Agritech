
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
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
    
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-3xl" />
        <div className="diamond-grid absolute inset-0 opacity-[0.03]" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className={`opacity-0 ${isVisible ? 'animate-fade-right' : ''}`}>
            <div className="glass-panel px-4 py-2 rounded-full w-fit mb-4">
              <span className="text-sm font-medium text-primary/90">Get In Touch</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Collaborate</span> With Us?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're interested in partnering on a project, joining our team, or learning more about our work, we'd love to hear from you.
            </p>
            
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: <Mail size={24} />,
                  title: "Email Us",
                  description: "thinktank@alu.edu",
                  link: "mailto:thinktank@alu.edu"
                },
                {
                  icon: <Phone size={24} />,
                  title: "Call Us",
                  description: "+250 788 123 456",
                  link: "tel:+250788123456"
                },
                {
                  icon: <MapPin size={24} />,
                  title: "Visit Us",
                  description: "African Leadership University, Kigali, Rwanda",
                  link: "#"
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-start space-x-4 opacity-0 ${isVisible ? `animate-fade-up animation-delay-${(i+3)*100}` : ''}`}
                >
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <a 
                      href={item.link} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.description}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`opacity-0 ${isVisible ? 'animate-fade-left animation-delay-200' : ''}`}>
            <div className="glass-panel rounded-2xl p-8 md:p-10 shadow-neo">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="bg-white/50 border-white/20 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-white/50 border-white/20 focus:border-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="bg-white/50 border-white/20 focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your inquiry..." 
                    className="bg-white/50 border-white/20 focus:border-primary min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full button-hover py-6">
                  Send Message <ArrowRight size={16} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
