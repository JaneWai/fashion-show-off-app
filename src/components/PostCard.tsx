import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { Post } from '../types';
import { formatDistanceToNow } from '../utils/dateUtils';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      {/* Post Header */}
      <div className="flex items-center p-4">
        <Link to={`/profile/${post.userId}`}>
          <img 
            src={post.user?.avatar} 
            alt={post.user?.name} 
            className="h-10 w-10 rounded-full object-cover"
          />
        </Link>
        <div className="ml-3">
          <Link to={`/profile/${post.userId}`} className="font-medium text-gray-900 hover:underline">
            {post.user?.name}
          </Link>
          <p className="text-sm text-gray-500">@{post.user?.username}</p>
        </div>
        <div className="ml-auto text-sm text-gray-500">
          {formatDistanceToNow(new Date(post.createdAt))}
        </div>
      </div>

      {/* Post Image */}
      <Link to={`/post/${post.id}`}>
        <div className="relative pb-[100%]">
          <img 
            src={post.imageUrl} 
            alt={post.caption} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* Post Actions */}
      <div className="flex items-center p-4">
        <button 
          onClick={handleLike}
          className={`flex items-center mr-4 ${liked ? 'text-red-500' : 'text-gray-500'}`}
        >
          <Heart className={`h-6 w-6 ${liked ? 'fill-current' : ''}`} />
          <span className="ml-1">{likesCount}</span>
        </button>
        <Link to={`/post/${post.id}`} className="flex items-center mr-4 text-gray-500">
          <MessageCircle className="h-6 w-6" />
          <span className="ml-1">{post.comments}</span>
        </Link>
        <button className="flex items-center mr-4 text-gray-500">
          <Share2 className="h-6 w-6" />
        </button>
        <button 
          onClick={handleSave}
          className={`ml-auto ${saved ? 'text-yellow-500' : 'text-gray-500'}`}
        >
          <Bookmark className={`h-6 w-6 ${saved ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Post Caption */}
      <div className="px-4 pb-4">
        <p className="text-gray-800">
          <Link to={`/profile/${post.userId}`} className="font-medium text-gray-900 hover:underline mr-1">
            {post.user?.username}
          </Link>
          {post.caption}
        </p>
        <div className="mt-2 flex flex-wrap">
          {post.tags.map((tag) => (
            <Link 
              key={tag} 
              to={`/explore/tags/${tag}`}
              className="text-blue-500 hover:underline mr-2 text-sm"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
