import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface WorkTreeProps {
  experiences: WorkExperience[];
}

const WorkTreeItem: React.FC<WorkExperience & { index: number }> = ({ title, company, period, description, index }) => {
  const { ref, controls } = useIntersectionObserver();
  const isLeft = index % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: isLeft ? -50 : 50 }
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex items-center mb-8 ${isLeft ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`w-5 h-5 bg-blue-500 rounded-full absolute left-1/2 -translate-x-1/2 z-10`} />
      <div className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 w-[calc(50%-20px)] ${isLeft ? 'ml-8' : 'mr-8'}`}>
        <Briefcase className="mb-2 text-blue-400" />
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-400 mb-2">{company}</p>
        <p className="text-gray-400 mb-2">{period}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export const WorkTree: React.FC<WorkTreeProps> = ({ experiences }) => {
  const { ref: trunkRef, controls: trunkControls } = useIntersectionObserver();

  return (
    <div id="experience" className="mb-16 pt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl mx-auto">
          <motion.div 
            ref={trunkRef}
            initial={{ height: 0 }}
            animate={trunkControls}
            variants={{
              visible: { height: '100%' },
              hidden: { height: 0 }
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-1 bg-gradient-to-b from-white to-white absolute left-1/2 -translate-x-1/2 top-0 bottom-0"
          />
          
         
          {experiences.map((exp, index) => (
            <WorkTreeItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
