import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Only trigger once when the element comes into view
    threshold: 0.2,     // Trigger when 20% of the component is in view
  });

  return (
    <motion.div
      ref={ref} 
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }} 
      transition={{ duration: 2 }}
      className="max-w-xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 mb-16 border border-gray-700"
    >
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-white">James Lin</h1>

        <p className="text-lg text-gray-300">Founder of BinaryRuns, CS Student@Union</p>

        <div className="border-t border-gray-700 w-1/2 mx-auto"></div>

        <p className="text-gray-400">
          <span className="font-medium text-white">Website: </span>
          <a href="#" className="text-blue-400 hover:underline">
            comming soon
          </a>
        </p>

        <p className="text-gray-400">
          <span className="font-medium text-white">Email: </span>
          <a href="mailto:linj3@union.edu" className="text-blue-400 hover:underline">
            linj3@union.edu
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default AnimatedComponent;
