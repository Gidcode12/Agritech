
import { ChevronRight, Wheat, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 font-display font-bold text-2xl text-primary mb-4">
              <Wheat className="h-8 w-8 text-primary" />
              <span>Harvest<span className="text-accent">Hub</span></span>
            </Link>
            
            <p className="text-muted-foreground mb-6">
              Empowering farmers with sustainable practices, innovative technologies, and market connections for improved yields and environmental stewardship.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-muted-foreground mr-3" />
                <a href="mailto:hello@harvesthub.org" className="text-muted-foreground hover:text-foreground transition-colors">hello@harvesthub.org</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-muted-foreground mr-3" />
                <a href="tel:+12345678901" className="text-muted-foreground hover:text-foreground transition-colors">+1 (234) 567-8901</a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-muted-foreground mr-3" />
                <span className="text-muted-foreground">123 Farmland Way, Rural County</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Initiatives', 'Solutions', 'Gallery'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Focus Areas</h4>
            <ul className="space-y-2">
              {['Sustainable Farming', 'Water Management', 'Soil Health', 'Market Access'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates on agricultural innovations and farmer resources.
            </p>
            
            <div className="flex">
              <input
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-background border border-border/50 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
              <Button className="rounded-l-none group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} HarvestHub. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
