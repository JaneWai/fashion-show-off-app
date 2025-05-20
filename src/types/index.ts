export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface Post {
  id: string;
  userId: string;
  user?: User;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  tags: string[];
  createdAt: string;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  user?: User;
  content: string;
  createdAt: string;
}
