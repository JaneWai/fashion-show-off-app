import React from 'react';
import PostCard from '../components/PostCard';
import TrendingSection from '../components/TrendingSection';
import SuggestedUsers from '../components/SuggestedUsers';
import { getPostsWithUsers } from '../data/mockData';

const HomePage: React.FC = () => {
  const posts = getPostsWithUsers();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Fashion Feed</h1>
          <div>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <TrendingSection />
            <SuggestedUsers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
