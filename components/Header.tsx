import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Research & About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Handle scroll to top if href is # or /
    if (href === '#' || href === '/') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       try {
         window.history.pushState(null, '', '/');
       } catch (err) {
         // Fallback for environments where pushState might fail
       }
       return;
    }

    const targetId = href.startsWith('#') ? href.substring(1) : href;
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Safer history update
      try {
        window.history.pushState(null, '', href);
      } catch (err) {
        console.warn('Navigation history update failed:', err);
      }
    } else {
        console.warn(`Target element with id "${targetId}" not found.`);
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 bg-paper border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
             <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm">
                <span className="font-serif font-bold text-xl">T.</span>
             </div>
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, '#')}
              className="text-xl font-serif font-bold text-ink tracking-tight hover:underline decoration-1 underline-offset-4"
            >
              {PROFILE_DATA.name}
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-mono-code text-subtle hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-sm font-mono-code text-white border border-neutral-700 px-4 py-1.5 hover:bg-white hover:text-black transition-all"
            >
                Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-subtle hover:text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-paper border-b border-neutral-800 absolute w-full shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-base font-serif text-subtle hover:text-white border-b border-neutral-900"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
             <a
                href="#contact"
                className="block py-3 text-base font-serif text-white mt-4"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Contact
              </a>
          </div>
        </div>
      )}
    </header>
  );
};