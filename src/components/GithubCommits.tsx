import React, { useState, useEffect } from 'react';

const GitHubCommits: React.FC = () => {
  const [totalCommits, setTotalCommits] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGitHubCommits = async () => {
      try {
        const username = '<JamessLin>'; // Replace with your GitHub username
        const response = await fetch(`https://api.github.com/users/${username}/events/private`);
        const data = await response.json();

        // Filter out commit events from the response
        const commitEvents = data.filter((event: any) => event.type === 'PushEvent');
        
        // Get the total count of commits
        setTotalCommits(commitEvents.length);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub commits:', error);
        setLoading(false);
      }
    };

    fetchGitHubCommits();
  }, []);

  if (loading) {
    return <div>Loading commit count...</div>;
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 mb-16 border border-gray-700 text-center">
      <h3 className="text-xl font-bold mb-4">Total GitHub Commits</h3>
      <p className="text-lg text-gray-300">{totalCommits} Commits</p>
    </div>
  );
};

export default GitHubCommits;
