
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary/70 pt-16 pb-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="diamond-grid absolute inset-0 opacity-[0.02]" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link to="/" className="text-2xl font-bold flex items-center mb-6">
              <span className="gradient-text font-display tracking-tight">Visionary Executors</span>
            </Link>
            
            <p className="text-muted-foreground mb-6">
              Empowering style expression through outfit design, fostering creative jobs, and building a designer community.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'E-Lab Challenges', 'Prototype', 'Gallery'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground flex items-center group">
                    <ChevronRight size={16} className="mr-2 text-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span className="link-underline">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Focus Areas</h4>
            <ul className="space-y-3">
              {['Artisans', 'Fashion Designers', 'Shoe Makers', 'Designers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground flex items-center group">
                    <ChevronRight size={16} className="mr-2 text-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span className="link-underline">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for updates on this project updates, events, and opportunities.
            </p>
            
            <div className="flex">
              <input
                type="email" 
                placeholder="Your email address" 
                className="bg-white/70 px-1 py-2 rounded-l-lg border border-white/30 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-1 py-2 rounded-r-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Visionary Executors, African Leadership University. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground link-underline"
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
