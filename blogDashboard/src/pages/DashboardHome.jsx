import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaUsers, FaEye, FaComments, FaEdit, FaTrash } from 'react-icons/fa';
import StatCard from '../components/StatCard';
import usePostStore from '../store/usePostStore';
import useThemeStore from '../store/useThemeStore';

const DashboardHome = () => {
  const { posts } = usePostStore();
  const { isDark } = useThemeStore();
  
  const totalPosts = posts.length;
  const totalViews = posts.reduce((sum, post) => sum + (post.views || 0), 0);
  const recentPosts = posts.slice(0, 5);

  const stats = [
    {
      icon: <FaFileAlt />,
      title: 'Total Posts',
      value: totalPosts,
      change: 12.5,
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      icon: <FaUsers />,
      title: 'Total Users',
      value: '1,234',
      change: 8.2,
      bgColor: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      icon: <FaEye />,
      title: 'Total Views',
      value: totalViews.toLocaleString(),
      change: 15.7,
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      icon: <FaComments />,
      title: 'Comments',
      value: '567',
      change: -2.4,
      bgColor: 'bg-gradient-to-br from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Dashboard Overview
        </h1>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Welcome back! Here's what's happening with your blog today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Posts */}
      <div className={`rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-6`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Recent Posts
          </h2>
          <Link
            to="/dashboard/posts"
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
          >
            View All →
          </Link>
        </div>

        {recentPosts.length === 0 ? (
          <div className="text-center py-12">
            <FaFileAlt className="text-6xl text-gray-400 mx-auto mb-4" />
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No posts yet. Create your first post!
            </p>
            <Link
              to="/dashboard/posts/new"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Post
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <th className={`text-left py-3 px-4 ${isDark ? 'text-gray-400' : 'text-gray-600'} font-semibold`}>
                    Title
                  </th>
                  <th className={`text-left py-3 px-4 ${isDark ? 'text-gray-400' : 'text-gray-600'} font-semibold`}>
                    Category
                  </th>
                  <th className={`text-left py-3 px-4 ${isDark ? 'text-gray-400' : 'text-gray-600'} font-semibold`}>
                    Views
                  </th>
                  <th className={`text-left py-3 px-4 ${isDark ? 'text-gray-400' : 'text-gray-600'} font-semibold`}>
                    Status
                  </th>
                  <th className={`text-right py-3 px-4 ${isDark ? 'text-gray-400' : 'text-gray-600'} font-semibold`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentPosts.map((post) => (
                  <tr
                    key={post.id}
                    className={`border-b ${isDark ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'} transition-colors`}
                  >
                    <td className={`py-4 px-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-semibold line-clamp-1">{post.title}</p>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {new Date(post.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className={`py-4 px-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {post.category}
                      </span>
                    </td>
                    <td className={`py-4 px-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {post.views || 0}
                    </td>
                    <td className={`py-4 px-4`}>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          post.status === 'published'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Link
                          to={`/dashboard/posts/edit/${post.id}`}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <FaEdit />
                        </Link>
                        <button
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <FaTrash />
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
    </div>
  );
};

export default DashboardHome;
