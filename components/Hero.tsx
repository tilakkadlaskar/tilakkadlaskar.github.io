import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

export const Hero: React.FC = () => {
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      try {
          window.history.pushState(null, '', `#${id}`);
      } catch (e) {}
    }
  };

  return (
    <section id="hero" className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative">
      
      <div className="flex-1 order-2 md:order-1">
        <div className="font-mono-code text-accent mb-6 text-sm tracking-wider">
          &gt; INITIALIZING_SYSTEM...
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-ink mb-6 leading-[1.1]">
          {PROFILE_DATA.name}
        </h1>
        
        <h2 className="text-xl md:text-2xl font-mono-code text-subtle mb-8 border-l-2 border-neutral-800 pl-6">
          {PROFILE_DATA.title} <br/>
          <span className="text-neutral-500 text-lg">Focus: Machine Learning & Scalable Systems</span>
        </h2>
        
        <p className="text-lg text-subtle mb-10 max-w-xl leading-relaxed font-serif">
          {PROFILE_DATA.tagline} Approaches problems with mathematical rigor and engineering precision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a 
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="group inline-flex items-center justify-center px-6 py-3 border border-white text-base font-mono-code text-black bg-white hover:bg-transparent hover:text-white transition-all"
          >
            View Research
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-mono-code text-subtle hover:text-white transition-colors"
          >
            <span className="mr-2">&gt;</span> Contact_Me
          </a>
        </div>
      </div>
      
      <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Minimal border frame */}
            <div className="absolute inset-0 border border-neutral-800 translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 border border-white/20"></div>
            
            <img 
              src={PROFILE_DATA.avatarUrl} 
              alt={PROFILE_DATA.name}
              className="w-full h-full object-cover"
            />
        </div>
      </div>
    </section>
  );
};