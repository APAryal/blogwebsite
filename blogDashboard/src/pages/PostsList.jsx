import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash, FaEye, FaSearch } from 'react-icons/fa';
import usePosts from '../hooks/usePosts';
import useThemeStore from '../store/useThemeStore';
import toast from 'react-hot-toast';

const PostsList = () => {
  const { posts, removePost, loading } = usePosts();
  const { isDark } = useThemeStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Technology', 'Health', 'Travel', 'Education', 'Business', 'Lifestyle'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || post.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      await removePost(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Posts Management
          </h1>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
            Manage all your blog posts
          </p>
        </div>
        <Link
          to="/dashboard/posts/new"
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <FaPlus />
          <span>Create New Post</span>
        </Link>
      </div>

      {/* Filters */}
      <div className={`rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-6`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
              }`}
            />
          </div>

          {/* Category Filter */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className={`px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
            }`}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Posts Table */}
      <div className={`rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} overflow-hidden`}>
        {loading ? (
          <div className="p-12 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
            <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Loading posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="p-12 text-center">
            <FaSearch className={`text-6xl ${isDark ? 'text-gray-600' : 'text-gray-400'} mx-auto mb-4`} />
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {searchTerm || filterCategory !== 'All' ? 'No posts found matching your filters.' : 'No posts yet.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <tr>
                  <th className={`text-left py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                    Post
                  </th>
                  <th className={`text-left py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                    Category
                  </th>
                  <th className={`text-left py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                    Author
                  </th>
                  <th className={`text-left py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                    Views
                  </th>
                  <th className={`text-left py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                    Status
                  </th>
                  <th className={`text-right py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr
                    key={post.id}
                    className={`border-t ${isDark ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'} transition-colors`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <p className={`font-semibold line-clamp-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                            {post.title}
                          </p>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {new Date(post.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className={`py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </td>
                    <td className={`py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {post.author}
                    </td>
                    <td className={`py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="flex items-center space-x-1">
                        <FaEye className="text-gray-400" />
                        <span>{post.views || 0}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          post.status === 'published'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end space-x-2">
                        <Link
                          to={`/dashboard/posts/edit/${post.id}`}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                          title="Edit Post"
                        >
                          <FaEdit size={18} />
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                          title="Delete Post"
                        >
                          <FaTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Showing {filteredPosts.length} of {posts.length} posts
      </div>
    </div>
  );
};

export default PostsList;
