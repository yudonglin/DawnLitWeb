export interface DatabaseRecord {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends DatabaseRecord {
  name: string;
  email: string;
  github: string;
  group: number;
  loginIp: string;
  friends: Array<User>;
  requests: Array<Request>;
  chats: Array<Chat>;
  posts: Array<Post>;
  likedPosts: Array<Post>;
  postComments: Array<PostComment>;
  likedPostComments: Array<PostComment>;
  blogs: Array<Blog>;
  blogComments: Array<BlogComment>;
  likedBlogComments: Array<BlogComment>;
  coins: number;
  experience: number;
  signature: string;
  about: string;
}

export function UserDummy(user: User | null): User {
  return (user == null ? {} : {id: user.id}) as User;
}

export interface Request extends DatabaseRecord {
  sender: User;
  type: string;
}

export interface Chat extends DatabaseRecord {
  owner: User;
  target: User;
  messages: Array<Message>;
}

export function ChatDummy(chat: Chat): Chat {
  return {id: chat.id, owner: UserDummy(chat.owner), target: UserDummy(chat.target)} as Chat;
}

export interface Message extends DatabaseRecord {
  chat: Chat;
  sender: User;
  content: string;
}

export interface Discussion extends DatabaseRecord {
  author: User;
  content: string;
  likedBy: Array<User>;
}

export function DiscussionDummy(content: Discussion): Discussion {
  return {id: content.id} as Discussion;
}

export interface Post extends Discussion {
  comments: Array<PostComment>;
}

export interface PostComment extends Discussion {
  post: Post;
}

export interface Blog extends Discussion {
  title: string;
  comments: Array<BlogComment>;
}

export function BlogDummy(blog: Blog): Blog {
  return {id: blog.id} as Blog;
}

export interface BlogComment extends Discussion {
  blog: Blog;
}
