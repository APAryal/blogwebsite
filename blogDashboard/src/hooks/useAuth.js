import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import toast from 'react-hot-toast';

const useAuth = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, login, logout } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginUser = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation (in real app, validate against backend)
      if (credentials.email === 'admin@blog.com' && credentials.password === 'admin123') {
        const userData = {
          id: 1,
          name: 'Admin User',
          email: credentials.email,
          role: 'admin',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
        };
        login(userData);
        toast.success('Login successful!');
        navigate('/dashboard');
        setLoading(false);
        return true;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast.error('Login failed. Use admin@blog.com / admin123');
      return false;
    }
  };

  const logoutUser = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    loginUser,
    logoutUser
  };
};

export default useAuth;
