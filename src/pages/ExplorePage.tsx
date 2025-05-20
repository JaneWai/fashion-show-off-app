import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { getPostsWithUsers, getTrendingTags } from '../data/mockData';
import { Post } from '../types';

const ExplorePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const allPosts = getPostsWithUsers();
  const trendingTags = getTrendingTags();

  // Filter posts based on search query and active filter
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeFilter === 'all') return matchesSearch;
    return matchesSearch && post.tags.includes(activeFilter);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Explore Fashion</h1>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          placeholder="Search for styles, tags, or users"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Trending Tags */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <Filter className="h-5 w-5 text-gray-500 mr-2" />
          <h2 className="text-lg font-medium text-gray-800">Filter by Trend</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'all' 
                ? 'bg-pink-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          {trendingTags.map(({ tag }) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === tag 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveFilter(tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
      
      {/* Grid of Posts */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPosts.map((post) => (
            <ExplorePostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No posts found matching your search.</p>
        </div>
      )}
    </div>
  );
};

interface ExplorePostCardProps {
  post: Post;
}

const ExplorePostCard: React.FC<ExplorePostCardProps> = ({ post }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg aspect-square">
      <img 
        src={post.imageUrl} 
        alt={post.caption} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center space-x-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
