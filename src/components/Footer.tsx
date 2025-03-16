
import { ChevronRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-50 pt-16 pb-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-200/20 rounded-full blur-3xl" />
        <div className="diamond-grid absolute inset-0 opacity-[0.02]" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link to="/" className="text-2xl font-bold flex items-center mb-6">
              <Leaf size={24} className="text-green-600 mr-2" />
              <span className="text-green-700 font-display tracking-tight">FarmGrowth Solutions</span>
            </Link>
            
            <p className="text-muted-foreground mb-6">
              Empowering farmers with sustainable practices, innovative technologies, and market access for improved yields and livelihoods.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Initiatives', 'Solutions', 'Gallery'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-green-700 flex items-center group">
                    <ChevronRight size={16} className="mr-2 text-green-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span className="link-underline">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Focus Areas</h4>
            <ul className="space-y-3">
              {['Sustainable Farming', 'Water Management', 'Soil Health', 'Market Access'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-green-700 flex items-center group">
                    <ChevronRight size={16} className="mr-2 text-green-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span className="link-underline">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for updates on agricultural innovations, events, and farmer resources.
            </p>
            
            <div className="flex">
              <input
                type="email" 
                placeholder="Your email address" 
                className="bg-white/70 px-3 py-2 rounded-l-lg border border-green-100 focus:outline-none focus:border-green-300"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} FarmGrowth Solutions. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm text-muted-foreground hover:text-green-700 link-underline"
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
