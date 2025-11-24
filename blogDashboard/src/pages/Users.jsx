import React from 'react';
import { FaUsers, FaFileAlt, FaChartLine, FaClock } from 'react-icons/fa';
import useThemeStore from '../store/useThemeStore';

const Users = () => {
  const { isDark } = useThemeStore();

  const users = [
    {
      id: 1,
      name: 'ram paudel',
      email: 'ram@example.com',
      role: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      posts: 24,
      joined: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'gita Smith',
      email: 'gita@example.com',
      role: 'Editor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      posts: 18,
      joined: '2024-03-20',
      status: 'active'
    },
    {
      id: 3,
      name: 'hari tharu',
      email: 'hari@example.com',
      role: 'Writer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      posts: 12,
      joined: '2024-06-10',
      status: 'active'
    },
    {
      id: 4,
      name: 'sunita Williams',
      email: 'sunita@example.com',
      role: 'Writer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      posts: 15,
      joined: '2024-08-05',
      status: 'inactive'
    }
  ];

  const stats = [
    { icon: <FaUsers />, label: 'Total Users', value: users.length, color: 'bg-blue-500' },
    { icon: <FaFileAlt />, label: 'Active Users', value: users.filter(u => u.status === 'active').length, color: 'bg-green-500' },
    { icon: <FaChartLine />, label: 'Total Posts', value: users.reduce((sum, u) => sum + u.posts, 0), color: 'bg-purple-500' },
    { icon: <FaClock />, label: 'New This Month', value: 2, color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Users Management
        </h1>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Manage all registered users and their activities
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 card-hover`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
                  {stat.label}
                </p>
                <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className={`rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} overflow-hidden`}>
        <div className="p-6">
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>
            All Users
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <tr>
                  <th className={`text-left py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                    User
                  </th>
                  <th className={`text-left py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                    Role
                  </th>
                  <th className={`text-left py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                    Posts
                  </th>
                  <th className={`text-left py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                    Joined
                  </th>
                  <th className={`text-left py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className={`border-t ${isDark ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-100 hover:bg-gray-50'} transition-colors`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-12 h-12 rounded-full border-2 border-blue-500"
                        />
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                            {user.name}
                          </p>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className={`py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.role === 'Admin' ? 'bg-purple-100 text-purple-700' :
                        user.role === 'Editor' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className={`py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {user.posts}
                    </td>
                    <td className={`py-4 px-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {new Date(user.joined).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
