import React from 'react';
import { PROFILE_DATA } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-neutral-900 bg-neutral-900/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-48 flex-shrink-0">
                <h2 className="text-3xl font-serif font-bold text-ink mb-2">02.</h2>
                <h3 className="text-xl font-mono-code text-subtle">Experience</h3>
            </div>
            <div className="flex-1 space-y-12">
                {PROFILE_DATA.experience.map((exp) => (
                    <div key={exp.id} className="group relative pl-8 border-l border-neutral-800 hover:border-white transition-colors">
                        <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-neutral-800 group-hover:bg-white transition-colors rotate-45"></div>
                        
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                            <h4 className="text-2xl font-serif text-white">{exp.role}</h4>
                            <span className="font-mono-code text-sm text-neutral-500">{exp.period}</span>
                        </div>
                        
                        <div className="text-accent font-mono-code text-sm mb-4">
                             @ {exp.company}
                        </div>
                        
                        <ul className="list-none space-y-3 mb-6">
                            {exp.description.map((desc, i) => (
                                <li key={i} className="text-subtle font-serif leading-relaxed flex items-start">
                                    <span className="mr-3 mt-1.5 w-1 h-1 bg-neutral-600 rounded-full flex-shrink-0"></span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {exp.technologies.map((tech) => (
                                <span key={tech} className="text-xs font-mono-code text-neutral-500 border border-neutral-800 px-2 py-1">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};