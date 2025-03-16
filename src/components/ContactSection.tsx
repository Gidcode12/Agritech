
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
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
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className={`lg:col-span-2 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
            <div className="accent-badge mb-4">
              <Send className="h-3 w-3 mr-1" />
              <span>Get In Touch</span>
            </div>
            
            <h2 className="section-title">
              Ready to <span className="text-gradient">Transform</span> Your Farm?
            </h2>
            
            <p className="section-subtitle mb-10">
              Whether you're interested in our sustainable farming solutions or community programs, we'd love to hear from you.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Email Us",
                  description: "hello@harvesthub.org",
                  link: "mailto:hello@harvesthub.org"
                },
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: "Call Us",
                  description: "+1 (234) 567-8901",
                  link: "tel:+12345678901"
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: "Visit Us",
                  description: "123 Farmland Way, Rural County",
                  link: "#"
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-start ${isVisible ? 'slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(i+3)*100}ms` }}
                >
                  <div className="feature-icon mr-4">
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
          
          <div className={`lg:col-span-3 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="card-highlight p-8">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="border-border/50 focus-visible:ring-primary"
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
                      className="border-border/50 focus-visible:ring-primary"
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
                    placeholder="How can we help your farm?" 
                    className="border-border/50 focus-visible:ring-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your agricultural needs..." 
                    className="min-h-[120px] border-border/50 focus-visible:ring-primary"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full group">
                  Send Message 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
