import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 border-t border-neutral-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-4xl font-serif font-bold text-white mb-6">Let's Collaborate</h2>
         <p className="text-xl text-subtle font-serif mb-12">
            I am always open to discussing new research opportunities, engineering challenges, or mathematical puzzles.
         </p>
         
         <div className="flex justify-center gap-8 mb-12">
             <div className="flex items-center gap-2 text-subtle font-mono-code text-sm">
                <Mail size={16} />
                <a href={`mailto:${PROFILE_DATA.email}`} className="hover:text-white underline decoration-neutral-700 underline-offset-4">{PROFILE_DATA.email}</a>
             </div>
             <div className="flex items-center gap-2 text-subtle font-mono-code text-sm">
                <MapPin size={16} />
                <span>{PROFILE_DATA.location}</span>
             </div>
         </div>
         
         <a 
              href={`mailto:${PROFILE_DATA.email}`}
              className="inline-block px-8 py-4 bg-white text-black font-mono-code font-bold hover:bg-neutral-200 transition-colors"
            >
              Initialize_Contact()
         </a>
      </div>
    </section>
  );
};