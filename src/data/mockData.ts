import { Post, User, Comment } from '../types';

export const users: User[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    username: 'alexstyle',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
  },
  {
    id: '2',
    name: 'Jordan Lee',
    username: 'jlee_fashion',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
  },
  {
    id: '3',
    name: 'Taylor Swift',
    username: 'tswift_style',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
  },
  {
    id: '4',
    name: 'Jamie Chen',
    username: 'j_chen',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
  },
  {
    id: '5',
    name: 'Riley Johnson',
    username: 'riley_fashionista',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80'
  }
];

export const posts: Post[] = [
  {
    id: '1',
    userId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    caption: 'Summer vibes with this new outfit! #summerstyle #fashion',
    likes: 342,
    comments: 42,
    tags: ['summerstyle', 'fashion', 'ootd'],
    createdAt: '2023-06-15T14:30:00Z'
  },
  {
    id: '2',
    userId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    caption: 'Business casual done right. What do you think? #workwear #professional',
    likes: 256,
    comments: 28,
    tags: ['workwear', 'professional', 'mensfashion'],
    createdAt: '2023-06-14T09:15:00Z'
  },
  {
    id: '3',
    userId: '3',
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    caption: 'Festival ready! Can\'t wait for the weekend. #festivalfashion #boho',
    likes: 512,
    comments: 76,
    tags: ['festivalfashion', 'boho', 'summer'],
    createdAt: '2023-06-13T18:45:00Z'
  },
  {
    id: '4',
    userId: '4',
    imageUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    caption: 'Streetwear is my passion. Urban vibes all day. #streetstyle #urban',
    likes: 423,
    comments: 51,
    tags: ['streetstyle', 'urban', 'hypebeast'],
    createdAt: '2023-06-12T12:20:00Z'
  },
  {
    id: '5',
    userId: '5',
    imageUrl: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    caption: 'Vintage shopping finds! This dress is from the 70s. #vintage #retro',
    likes: 387,
    comments: 45,
    tags: ['vintage', 'retro', 'sustainable'],
    createdAt: '2023-06-11T15:10:00Z'
  },
  {
    id: '6',
    userId: '1',
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    caption: 'Casual Sunday brunch outfit. Keeping it simple but stylish. #brunch #casual',
    likes: 298,
    comments: 32,
    tags: ['brunch', 'casual', 'weekend'],
    createdAt: '2023-06-10T11:05:00Z'
  },
  {
    id: '7',
    userId: '2',
    imageUrl: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    caption: 'Accessories make the outfit. Loving this new watch! #accessories #details',
    likes: 276,
    comments: 24,
    tags: ['accessories', 'details', 'watch'],
    createdAt: '2023-06-09T16:30:00Z'
  },
  {
    id: '8',
    userId: '3',
    imageUrl: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    caption: 'Date night outfit. Simple but elegant. #datenight #elegant',
    likes: 432,
    comments: 56,
    tags: ['datenight', 'elegant', 'dress'],
    createdAt: '2023-06-08T19:45:00Z'
  }
];

export const comments: Comment[] = [
  {
    id: '1',
    postId: '1',
    userId: '2',
    content: 'Love this look! Where did you get that top?',
    createdAt: '2023-06-15T15:00:00Z'
  },
  {
    id: '2',
    postId: '1',
    userId: '3',
    content: 'Summer vibes for sure! 🔥',
    createdAt: '2023-06-15T15:15:00Z'
  },
  {
    id: '3',
    postId: '2',
    userId: '1',
    content: 'Very professional! Great color combination.',
    createdAt: '2023-06-14T10:00:00Z'
  },
  {
    id: '4',
    postId: '3',
    userId: '4',
    content: 'I need this outfit for the upcoming festival!',
    createdAt: '2023-06-13T19:30:00Z'
  },
  {
    id: '5',
    postId: '4',
    userId: '5',
    content: 'Streetwear king! 👑',
    createdAt: '2023-06-12T13:00:00Z'
  }
];

// Helper function to get posts with user data
export const getPostsWithUsers = (): Post[] => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId)
  }));
};

// Helper function to get comments with user data
export const getCommentsWithUsers = (postId: string): Comment[] => {
  return comments
    .filter(comment => comment.postId === postId)
    .map(comment => ({
      ...comment,
      user: users.find(user => user.id === comment.userId)
    }));
};

// Helper function to get a user by ID
export const getUserById = (userId: string): User | undefined => {
  return users.find(user => user.id === userId);
};

// Helper function to get a post by ID
export const getPostById = (postId: string): Post | undefined => {
  const post = posts.find(post => post.id === postId);
  if (post) {
    return {
      ...post,
      user: users.find(user => user.id === post.userId)
    };
  }
  return undefined;
};

// Helper function to get trending tags
export const getTrendingTags = (): { tag: string; count: number }[] => {
  const tagCounts: Record<string, number> = {};
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (tagCounts[tag]) {
        tagCounts[tag]++;
      } else {
        tagCounts[tag] = 1;
      }
    });
  });
  
  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
};
