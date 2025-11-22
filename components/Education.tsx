import React from 'react';
import { PROFILE_DATA } from '../constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-48 flex-shrink-0">
                <h2 className="text-3xl font-serif font-bold text-ink mb-2">03.</h2>
                <h3 className="text-xl font-mono-code text-subtle">Education</h3>
            </div>
            
            <div className="flex-1 space-y-8">
              {PROFILE_DATA.education.map((edu) => (
                <div key={edu.id} className="block border border-neutral-800 p-8 hover:bg-neutral-900/30 transition-colors">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-white">{edu.school}</h3>
                        <p className="text-accent font-mono-code text-sm mt-1">{edu.degree}</p>
                      </div>
                      <span className="font-mono-code text-xs text-neutral-500 mt-2 md:mt-0 border border-neutral-800 px-2 py-1">
                        {edu.period}
                      </span>
                  </div>
                  
                  {edu.description && (
                    <p className="text-subtle font-serif mt-4 border-t border-neutral-800 pt-4 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
         </div>
      </div>
    </section>
  );
};