import { create } from 'zustand';

const usePostStore = create((set) => ({
  posts: [
    {
      id: 1,
      title: 'Getting Started with React',
      description: 'Learn the basics of React development',
      content: 'React is a powerful JavaScript library for building user interfaces...',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      author: 'Admin User',
      category: 'Technology',
      tags: ['React', 'JavaScript', 'Web Development'],
      status: 'published',
      createdAt: new Date().toISOString(),
      views: 245
    },
    {
      id: 2,
      title: 'Healthy Living Tips',
      description: 'Essential tips for a healthier lifestyle',
      content: 'Maintaining a healthy lifestyle requires dedication and proper habits...',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
      author: 'Admin User',
      category: 'Health',
      tags: ['Health', 'Wellness', 'Lifestyle'],
      status: 'published',
      createdAt: new Date().toISOString(),
      views: 189
    }
  ],
  
  addPost: (post) => set((state) => ({
    posts: [...state.posts, { ...post, id: Date.now(), createdAt: new Date().toISOString() }]
  })),
  
  updatePost: (id, updatedPost) => set((state) => ({
    posts: state.posts.map(post => post.id === id ? { ...post, ...updatedPost } : post)
  })),
  
  deletePost: (id) => set((state) => ({
    posts: state.posts.filter(post => post.id !== id)
  })),
  
  getPostById: (id) => (state) => state.posts.find(post => post.id === id)
}));

export default usePostStore;
