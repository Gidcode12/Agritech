
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [{
    label: 'Home',
    href: '#hero'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Challenges',
    href: '#projects'
  }, {
    label: 'Prototype',
    href: '#prototype'
  }, {
    label: 'Gallery',
    href: '#team'
  }];

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple ${scrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="section-container flex items-center justify-between py-0">
        <Link to="/" className="text-xl md:text-2xl font-bold flex items-center opacity-90 hover:opacity-100 transition-opacity">
          <span className="gradient-text font-display tracking-tight">Visionary Executors</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground link-underline transition-colors">
              {link.label}
            </a>)}
          <Button className="button-hover" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-foreground p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden fixed inset-0 z-50 bg-white/80 backdrop-blur-xl">
            <div className="flex flex-col h-full pt-24 pb-8 px-6">
              <nav className="flex flex-col space-y-6">
                {navLinks.map(link => <a key={link.label} href={link.href} onClick={toggleMenu} className="text-xl font-medium py-2 hover:text-primary transition-colors">
                    {link.label}
                  </a>)}
                <Button className="mt-4 button-hover" asChild onClick={toggleMenu}>
                  <a href="#contact">Contact Us</a>
                </Button>
              </nav>
              <button onClick={toggleMenu} className="absolute top-6 right-6 text-foreground p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
          </div>}
      </div>
    </header>;
};

export default Navbar;
