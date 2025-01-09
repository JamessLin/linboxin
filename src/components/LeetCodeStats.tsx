import React, { useEffect, useState } from 'react';

const LeetcodeStats: React.FC = () => {
  const [stats, setStats] = useState<any>(null);

  // Fetching the stats from Leetcode API
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

  // Render the stats if they are available
  if (!stats) {
    return <div>...</div>;
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 mb-16 border border-gray-700 text-center">
      <h3 className="text-xl font-bold mb-4">Leetcode Stats</h3>
      <p className="text-lg text-gray-300">
        Total Solved: <span className="font-semibold">{stats.totalSolved}</span> problems
      </p>
      <p className="text-lg text-gray-300">
        Acceptance Rate: <span className="font-semibold">{stats.acceptanceRate}%</span>
      </p>
    </div>
  );
};

export default LeetcodeStats;
