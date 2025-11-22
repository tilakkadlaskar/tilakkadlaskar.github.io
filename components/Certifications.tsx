import React from 'react';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 border-t border-neutral-900 bg-neutral-900/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-48 flex-shrink-0">
                <h2 className="text-3xl font-serif font-bold text-ink mb-2">06.</h2>
                <h3 className="text-xl font-mono-code text-subtle">Credentials</h3>
            </div>
        
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROFILE_DATA.certifications.map((cert) => (
                <div key={cert.id} className="border border-neutral-800 p-5 flex flex-col justify-between hover:border-neutral-600 transition-colors bg-paper">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                             <BadgeCheck size={20} className="text-neutral-500" />
                             {cert.url && (
                                <a href={cert.url} className="text-neutral-600 hover:text-white">
                                    <ExternalLink size={14} />
                                </a>
                             )}
                        </div>
                        <h3 className="text-lg font-serif font-bold text-white mb-1">
                            {cert.title}
                        </h3>
                        <p className="text-neutral-500 text-sm font-mono-code">{cert.issuer}</p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-neutral-900 text-xs font-mono-code text-neutral-600 text-right">
                        {cert.date}
                    </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};