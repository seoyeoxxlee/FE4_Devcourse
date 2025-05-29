interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio: string;
  organization?: string;
  followers: number;
  githubUrl?: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: User;
  publishedAt: string;
  tags: string[];
  readingTime: string;
}

interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  replies?: Comment[];
  likes: number;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}
