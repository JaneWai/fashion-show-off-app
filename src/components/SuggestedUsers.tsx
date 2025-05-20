import React from 'react';
import { Link } from 'react-router-dom';
import { users } from '../data/mockData';

const SuggestedUsers: React.FC = () => {
  // Get a subset of users for suggestions
  const suggestedUsers = users.slice(0, 3);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-4">
      <h3 className="font-bold text-gray-800 mb-4">Suggested Fashion Enthusiasts</h3>
      <div className="space-y-4">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex items-center">
            <Link to={`/profile/${user.id}`}>
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="h-10 w-10 rounded-full object-cover"
              />
            </Link>
            <div className="ml-3 flex-grow">
              <Link to={`/profile/${user.id}`} className="font-medium text-gray-900 hover:underline block">
                {user.name}
              </Link>
              <p className="text-sm text-gray-500">@{user.username}</p>
            </div>
            <button className="text-sm font-medium text-pink-600 hover:text-pink-700">
              Follow
            </button>
          </div>
        ))}
      </div>
      <Link 
        to="/explore/people"
        className="block text-center text-pink-600 font-medium mt-4 hover:text-pink-700"
      >
        See more
      </Link>
    </div>
  );
};

export default SuggestedUsers;
