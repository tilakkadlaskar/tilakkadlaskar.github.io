import React from 'react';
import { PROFILE_DATA } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-t border-neutral-900 bg-neutral-900/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
             <div className="md:w-48 flex-shrink-0">
                <h2 className="text-3xl font-serif font-bold text-ink mb-2">04.</h2>
                <h3 className="text-xl font-mono-code text-subtle">Technical<br/>Stack</h3>
            </div>
            
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROFILE_DATA.skills.map((skillGroup) => (
                <div key={skillGroup.category} className="">
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-subtle font-serif text-lg hover:text-white transition-colors cursor-default">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};