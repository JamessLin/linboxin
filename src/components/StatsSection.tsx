import React from "react";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";


function StatsSection() {
    const [statss, setStats] = useState<any>(null);

    useEffect(() => {
    const fetchLeetcodeStats = async () => {
        try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/linboxin');
        const data = await response.json();
        if (data.status === 'success') {
            setStats(data);
        } else {
            console.error('Failed to fetch Leetcode stats');
        }
        } catch (error) {
        console.error('Error fetching Leetcode stats:', error);
        }
    };

    fetchLeetcodeStats();
    }, []);


    const stats = [
        { value: "4", label: "Years of Experience" },
        { value: "2", label: "Projects WOP" },
        { value: statss?.totalSolved || 0, label: "LeetCode Solved" },
        { value: "166", label: "Code Commits" },
      ];

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-16 text-center">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration: 1, delay: index * 0.4 }}
          className="flex flex-col items-center bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700"
        >
          <h3 className="text-5xl font-bold " style={{ color: '#00BFFF ' }}>{stat.value}</h3>
          <p className="text-md text-gray-300 mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsSection;
