import React from 'react';
import { Linkedin, Github, Twitter, Instagram, Facebook, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    switch(iconName) {
        case 'Linkedin': return <Linkedin size={20} />;
        case 'Github': return <Github size={20} />;
        case 'Twitter': return <Twitter size={20} />;
        case 'Instagram': return <Instagram size={20} />;
        case 'Facebook': return <Facebook size={20} />;
        case 'Mail': return <Mail size={20} />;
        default: return null;
    }
  };

  return (
    <footer className="bg-paper py-16 border-t border-neutral-800 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
            <p className="text-white font-serif font-bold text-lg mb-1">{PROFILE_DATA.name}</p>
            <p className="text-subtle font-mono-code text-xs">
            © {currentYear} All rights reserved.
            </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6">
           {PROFILE_DATA.socials.map(social => (
              <a 
                key={social.platform}
                href={social.url} 
                className="text-subtle hover:text-white transition-all transform hover:scale-110 p-2 border border-transparent hover:border-neutral-800 rounded-sm"
                target="_blank"
                rel="noreferrer"
                aria-label={social.platform}
              >
                {getIcon(social.icon)}
              </a>
           ))}
        </div>
      </div>
    </footer>
  );
};