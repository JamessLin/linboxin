import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  { category: "Languages", items: ['Python', 'Rust', 'C++', 'JavaScript', 'Java', 'C#', 'TypeScript', 'HTML/CSS', 'SQL'] },
  { category: "Frameworks", items: ['React', 'Angular JS', 'Spring Boot', 'Django', 'Flask', 'Express JS', 'React Native', 'Expo', 'NextJS', '.NET', 'gRPC'] },
  { category: "Databases", items: ['MongoDB', 'Redis', 'PostgresSQL', 'MySQL', 'Firebase'] },
  { category: "Tools/Others", items: ['Bazel', 'Jira', 'Git', 'Docker', 'Linux'] }
];

export const SkillTimeline: React.FC = () => {
  const { ref, controls } = useIntersectionObserver();

  return (
    <div id="skills" className="pt-8" ref={ref}>
      <div className="max-w-3xl mx-auto">
        {skills.map((skillCategory, index) => (
          <motion.div
            key={index}
            className="flex mb-8"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.7, delay: index * 0.6 }}
          >
            <div className="mr-4 relative">
              <div className="w-4 h-4 bg-blue-500 rounded-full" />
              {index !== skills.length - 1 && (
                <div className="w-0.5 bg-gray-300 h-full absolute top-4 left-2 -translate-x-1/2" />
              )}
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 flex-grow">
              <h3 className="text-xl font-bold mb-2">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, i) => (
                  <span key={i} className="px-3 py-2 bg-blue-500/20 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
