import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { WorkTree } from './components/WorkTree';
import { SkillTimeline } from './components/SkillSection';
import { ProjectSection } from './components/ProjectSection';
import BusinessCard from './components/BusinessCard';
import StatsSection from "./components/StatsSection";

function App() {
  const experiences = [
    {
      title: "Founder & Developer",
      company: "",
      period: "Nov. 2024 - Present",
      description: "Currently building an online platform for a game, handling all aspects of development from design to implementation."
    },
    {
      title: "Research Assistant",
      company: "Union College",
      period: "Nov. 2024 - Present",
      description: "Conducting research on Machine Learning and OpenCV for mental health applications."
    },
    {
      title: "Technical Intern",
      company: "Aivres System",
      period: "Jun. 2024 - Aug. 2024",
      description: "Developed APIs and optimized data processing with Python."
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Sticky Header - Hidden on mobile */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:flex fixed top-8 left-0 right-0 z-50 justify-center"
      >
        <nav className="flex gap-6 px-10 py-5 bg-white/5 backdrop-blur-sm rounded-full w-auto max-w-4xl justify-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            Experience
          </button>
        </nav>
      </motion.header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div id="home" className="text-center mb-16 pt-10">
          <h1 className="text-6xl font-bold mb-4">James Lin</h1>
          <p className="text-xl text-gray-300">Software Engineer & CS Student</p>
          <div className="flex justify-center gap-4 mt-6">
            <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/JamessLin" target="_blank" className="p-2 hover:text-gray-300">
              <Github size={24} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/jameslinurl/" target="_blank" className="p-2 hover:text-gray-300">
              <Linkedin size={24} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="mailto:linj3@union.edu" className="p-2 hover:text-gray-300">
              <Mail size={24} />
            </motion.a>
            
          </div>
        </div>

        {/* About Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 mb-16 border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
          Driven Computer Science student at Union College with a history of developing innovative software solutions. I combine academic rigor with hands-on experience to deliver impactful digital products from backend to enterprise systems.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 mb-16 border border-gray-700"
        >
        <h2 className="text-3xl font-bold">Acquired Skills</h2>
        <SkillTimeline />
        </motion.div>
        <StatsSection />
        {/* Work Experience Tree */}
        <ProjectSection />
        <WorkTree experiences={experiences} />
        <BusinessCard />
      </div>
    </div>
  );
}

export default App;
