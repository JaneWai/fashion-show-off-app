import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2, Bookmark, Send } from 'lucide-react';
import { getPostById, getCommentsWithUsers, getUserById } from '../data/mockData';
import { formatDistanceToNow } from '../utils/dateUtils';

const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = getPostById(id || '');
  const comments = getCommentsWithUsers(id || '');
  const currentUser = getUserById('1'); // Assuming user 1 is logged in
  
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(post?.likes || 0);
  const [commentText, setCommentText] = useState('');
  const [allComments, setAllComments] = useState(comments);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 text-center">
        <p className="text-gray-500">Post not found.</p>
      </div>
    );
  }

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

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      id: `temp-${Date.now()}`,
      postId: post.id,
      userId: currentUser?.id || '',
      user: currentUser,
      content: commentText,
      createdAt: new Date().toISOString()
    };

    setAllComments([...allComments, newComment]);
    setCommentText('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left side - Image */}
          <div className="md:w-2/3 bg-gray-100">
            <div className="relative pb-[100%] md:pb-0 md:h-full">
              <img 
                src={post.imageUrl} 
                alt={post.caption} 
                className="absolute inset-0 w-full h-full object-contain md:object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Details and Comments */}
          <div className="md:w-1/3 flex flex-col">
            {/* Post Header */}
            <div className="flex items-center p-4 border-b">
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
            </div>
            
            {/* Comments Section */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {/* Caption */}
              <div className="flex">
                <Link to={`/profile/${post.userId}`}>
                  <img 
                    src={post.user?.avatar} 
                    alt={post.user?.name} 
                    className="h-8 w-8 rounded-full object-cover mr-3"
                  />
                </Link>
                <div>
                  <p className="text-gray-800">
                    <Link to={`/profile/${post.userId}`} className="font-medium text-gray-900 hover:underline mr-1">
                      {post.user?.username}
                    </Link>
                    {post.caption}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDistanceToNow(new Date(post.createdAt))}
                  </p>
                </div>
              </div>
              
              {/* Comments */}
              {allComments.map((comment) => (
                <div key={comment.id} className="flex">
                  <Link to={`/profile/${comment.userId}`}>
                    <img 
                      src={comment.user?.avatar} 
                      alt={comment.user?.name} 
                      className="h-8 w-8 rounded-full object-cover mr-3"
                    />
                  </Link>
                  <div>
                    <p className="text-gray-800">
                      <Link to={`/profile/${comment.userId}`} className="font-medium text-gray-900 hover:underline mr-1">
                        {comment.user?.username}
                      </Link>
                      {comment.content}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDistanceToNow(new Date(comment.createdAt))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Post Actions */}
            <div className="p-4 border-t">
              <div className="flex items-center mb-4">
                <button 
                  onClick={handleLike}
                  className={`flex items-center mr-4 ${liked ? 'text-red-500' : 'text-gray-500'}`}
                >
                  <Heart className={`h-6 w-6 ${liked ? 'fill-current' : ''}`} />
                </button>
                <button className="flex items-center mr-4 text-gray-500">
                  <MessageCircle className="h-6 w-6" />
                </button>
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
              
              <p className="font-medium text-gray-900 mb-2">{likesCount} likes</p>
              
              <p className="text-xs text-gray-500 mb-4">
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              
              {/* Tags */}
              <div className="mb-4 flex flex-wrap">
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
              
              {/* Add Comment */}
              <form onSubmit={handleSubmitComment} className="flex items-center">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-pink-500"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={!commentText.trim()}
                  className={`px-3 py-2 rounded-r-md ${
                    !commentText.trim() 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-pink-500 text-white hover:bg-pink-600'
                  }`}
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
