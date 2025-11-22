import React from 'react';
import { PROFILE_DATA } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
            <div className="text-left">
                <h2 className="text-3xl font-serif font-bold text-ink mb-2">01.</h2>
                <h3 className="text-xl font-mono-code text-subtle">Abstract</h3>
            </div>
            
            <div className="prose prose-invert max-w-none">
                <p className="text-lg text-subtle font-serif leading-8 text-justify">
                    {PROFILE_DATA.about}
                </p>
                <p className="mt-6 text-lg text-subtle font-serif leading-8 text-justify">
                    My approach combines theoretical computer science with practical software engineering. I believe that understanding the underlying mathematical principles—Linear Algebra, Calculus, and Probability Theory—is crucial for building robust AI systems, not just implementing API calls.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 border-t border-neutral-800 pt-8">
                    <div>
                        <span className="block font-mono-code text-2xl text-white mb-1">
                            {PROFILE_DATA.experience.length}+
                        </span>
                        <span className="text-xs uppercase tracking-widest text-neutral-500">Years Exp.</span>
                    </div>
                    <div>
                        <span className="block font-mono-code text-2xl text-white mb-1">
                            {PROFILE_DATA.projects.length}+
                        </span>
                        <span className="text-xs uppercase tracking-widest text-neutral-500">Projects</span>
                    </div>
                    <div>
                        <span className="block font-mono-code text-2xl text-white mb-1">
                            ∞
                        </span>
                        <span className="text-xs uppercase tracking-widest text-neutral-500">Learning</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};