
import { useState, useEffect } from 'react';
import { Menu, X, Wheat, ChevronDown } from 'lucide-react';
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

  const navLinks = [
    {
      label: 'Home',
      href: '#hero'
    }, 
    {
      label: 'About',
      href: '#about'
    }, 
    {
      label: 'Initiatives',
      href: '#projects'
    }, 
    {
      label: 'Solutions',
      href: '#prototype'
    }, 
    {
      label: 'Gallery',
      href: '#team'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3 bg-background/90 backdrop-blur-sm shadow-md' : 'py-5 bg-transparent'
    }`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-2xl text-primary">
          <Wheat className="h-8 w-8 text-primary" />
          <span>Harvest<span className="text-accent">Hub</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <Button asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden rounded-md p-2 text-foreground hover:bg-primary/10 hover:text-primary transition-colors" 
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-background pt-20">
            <div className="container-custom flex flex-col h-full">
              <nav className="flex flex-col space-y-6 py-8">
                {navLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-xl font-medium p-2 border-b border-border hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button onClick={toggleMenu} className="mt-4" asChild>
                  <a href="#contact">Contact Us</a>
                </Button>
              </nav>
              <button 
                onClick={toggleMenu} 
                className="absolute top-6 right-6 p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors" 
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
