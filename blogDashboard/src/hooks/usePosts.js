import { useState } from 'react';
import usePostStore from '../store/usePostStore';
import toast from 'react-hot-toast';

const usePosts = () => {
  const { posts, addPost, updatePost, deletePost } = usePostStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setLoading(false);
      return posts;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error('Failed to fetch posts');
      return [];
    }
  };

  const createPost = async (postData) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      addPost(postData);
      setLoading(false);
      toast.success('Post created successfully!');
      return true;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error('Failed to create post');
      return false;
    }
  };

  const editPost = async (id, postData) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      updatePost(id, postData);
      setLoading(false);
      toast.success('Post updated successfully!');
      return true;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error('Failed to update post');
      return false;
    }
  };

  const removePost = async (id) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      deletePost(id);
      setLoading(false);
      toast.success('Post deleted successfully!');
      return true;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error('Failed to delete post');
      return false;
    }
  };

  return {
    posts,
    loading,
    error,
    fetchPosts,
    createPost,
    editPost,
    removePost
  };
};

export default usePosts;
