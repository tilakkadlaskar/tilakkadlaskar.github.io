import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-ink mb-2">05. Selected Work</h2>
            <p className="font-mono-code text-subtle text-sm">Implementation of concepts & system architecture.</p>
         </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE_DATA.projects.map((project) => (
            <div key={project.id} className="group border border-neutral-800 bg-paper hover:border-neutral-600 transition-colors flex flex-col">
              {/* Image grayscale by default */}
              <div className="relative h-48 overflow-hidden border-b border-neutral-800">
                <div className="absolute inset-0 bg-neutral-900/50 group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-white mb-3">{project.title}</h3>
                <p className="text-subtle text-sm mb-6 leading-relaxed flex-grow font-serif">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs font-mono-code px-1.5 py-0.5 border border-neutral-800 text-neutral-400">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-start gap-6 pt-4 border-t border-neutral-900">
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="flex items-center text-subtle hover:text-white text-sm transition-colors font-mono-code">
                      <Github size={14} className="mr-2" />
                      Repo
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="flex items-center text-subtle hover:text-white text-sm transition-colors font-mono-code">
                      <ExternalLink size={14} className="mr-2" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};