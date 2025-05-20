import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import { getTrendingTags } from '../data/mockData';

const TrendingSection: React.FC = () => {
  const trendingTags = getTrendingTags();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <Flame className="h-5 w-5 text-orange-500 mr-2" />
        <h3 className="font-bold text-gray-800">Trending Tags</h3>
      </div>
      <div className="space-y-3">
        {trendingTags.map(({ tag, count }) => (
          <Link 
            key={tag} 
            to={`/explore/tags/${tag}`}
            className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md transition-colors"
          >
            <span className="text-blue-500">#{tag}</span>
            <span className="text-gray-500 text-sm">{count} posts</span>
          </Link>
        ))}
      </div>
      <Link 
        to="/explore"
        className="block text-center text-pink-600 font-medium mt-4 hover:text-pink-700"
      >
        See all trends
      </Link>
    </div>
  );
};

export default TrendingSection;
