import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "",
    description: "",
    technologies: ["", "", ""]
  }
];

export const ProjectSection: React.FC = () => {
  const showProjects = false; 

  return (
    <div id="projects" className="mb-16 pt-16 relative">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
      
      
      {!showProjects && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center">
          <span className="text-2xl text-white font-semibold">Will Display Soon</span>
        </div>
      )}
      
      
      {showProjects && (
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const { ref, controls } = useIntersectionObserver();
            return (
              <motion.div 
                key={index}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 }
                }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};
