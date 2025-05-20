import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUserById, posts } from '../data/mockData';
import { Grid, List, Settings, MapPin, Calendar, Link as LinkIcon } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const user = getUserById(id || '1'); // Default to user 1 if no ID provided
  const userPosts = posts.filter(post => post.userId === (id || '1'));
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 text-center">
        <p className="text-gray-500">User not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="md:flex items-center">
          <div className="md:flex-shrink-0 flex justify-center mb-4 md:mb-0">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="h-32 w-32 rounded-full object-cover border-4 border-pink-100"
            />
          </div>
          <div className="md:ml-6 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600">@{user.username}</p>
            
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <div className="text-center">
                <span className="block font-bold text-gray-900">{userPosts.length}</span>
                <span className="text-gray-600 text-sm">Posts</span>
              </div>
              <div className="text-center">
                <span className="block font-bold text-gray-900">1.2K</span>
                <span className="text-gray-600 text-sm">Followers</span>
              </div>
              <div className="text-center">
                <span className="block font-bold text-gray-900">348</span>
                <span className="text-gray-600 text-sm">Following</span>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center md:justify-start space-x-3">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
                Follow
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
                Message
              </button>
              <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition-colors">
                <Settings className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 border-t pt-6">
          <div className="text-gray-700 mb-4">
            Fashion enthusiast and style blogger. Sharing my daily outfits and fashion inspiration.
          </div>
          
          <div className="flex flex-wrap gap-y-2">
            <div className="flex items-center text-gray-600 text-sm mr-6">
              <MapPin className="h-4 w-4 mr-1" />
              New York, NY
            </div>
            <div className="flex items-center text-gray-600 text-sm mr-6">
              <LinkIcon className="h-4 w-4 mr-1" />
              <a href="#" className="text-blue-500 hover:underline">fashionblog.com</a>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              Joined June 2022
            </div>
          </div>
        </div>
      </div>
      
      {/* Posts Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* View Toggle */}
        <div className="flex border-b">
          <button 
            className={`flex-1 py-3 flex justify-center items-center ${viewMode === 'grid' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-500'}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid className="h-5 w-5 mr-2" />
            Grid
          </button>
          <button 
            className={`flex-1 py-3 flex justify-center items-center ${viewMode === 'list' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-500'}`}
            onClick={() => setViewMode('list')}
          >
            <List className="h-5 w-5 mr-2" />
            List
          </button>
        </div>
        
        {/* Posts Display */}
        {userPosts.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-3 gap-1">
              {userPosts.map((post) => (
                <Link key={post.id} to={`/post/${post.id}`} className="relative aspect-square group">
                  <img 
                    src={post.imageUrl} 
                    alt={post.caption} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center space-x-4">
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 mr-1" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-5 w-5 mr-1" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="divide-y">
              {userPosts.map((post) => (
                <Link key={post.id} to={`/post/${post.id}`} className="block p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <img 
                        src={post.imageUrl} 
                        alt={post.caption} 
                        className="h-20 w-20 object-cover rounded"
                      />
                    </div>
                    <div>
                      <p className="text-gray-800 line-clamp-2">{post.caption}</p>
                      <div className="mt-2 flex items-center text-gray-500 text-sm">
                        <div className="flex items-center mr-4">
                          <Heart className="h-4 w-4 mr-1" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center mr-4">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex flex-wrap">
                          {post.tags.map((tag) => (
                            <span key={tag} className="mr-2">#{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No posts yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
