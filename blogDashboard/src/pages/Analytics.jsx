import React from 'react';
import { FaChartLine, FaEye, FaUsers, FaMousePointer, FaClock, FaGlobe } from 'react-icons/fa';
import useThemeStore from '../store/useThemeStore';
import usePostStore from '../store/usePostStore';

const Analytics = () => {
  const { isDark } = useThemeStore();
  const { posts } = usePostStore();

  const totalViews = posts.reduce((sum, post) => sum + (post.views || 0), 0);
  
  const analytics = {
    pageViews: totalViews,
    uniqueVisitors: Math.floor(totalViews * 0.7),
    avgTimeOnSite: '3:45',
    bounceRate: '42%',
    topPosts: posts.sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5),
    viewsByCategory: [
      { name: 'Technology', views: 1250, color: 'bg-blue-500' },
      { name: 'Health', views: 980, color: 'bg-green-500' },
      { name: 'Travel', views: 750, color: 'bg-purple-500' },
      { name: 'Education', views: 620, color: 'bg-orange-500' },
      { name: 'Business', views: 540, color: 'bg-red-500' }
    ],
    trafficSources: [
      { name: 'Direct', percentage: 45, color: 'bg-blue-500' },
      { name: 'Social Media', percentage: 30, color: 'bg-purple-500' },
      { name: 'Search Engines', percentage: 20, color: 'bg-green-500' },
      { name: 'Referral', percentage: 5, color: 'bg-orange-500' }
    ]
  };

  const stats = [
    {
      icon: <FaEye />,
      label: 'Total Page Views',
      value: analytics.pageViews.toLocaleString(),
      change: '+12.5%',
      color: 'bg-blue-500'
    },
    {
      icon: <FaUsers />,
      label: 'Unique Visitors',
      value: analytics.uniqueVisitors.toLocaleString(),
      change: '+8.2%',
      color: 'bg-green-500'
    },
    {
      icon: <FaClock />,
      label: 'Avg. Time on Site',
      value: analytics.avgTimeOnSite,
      change: '+5.3%',
      color: 'bg-purple-500'
    },
    {
      icon: <FaMousePointer />,
      label: 'Bounce Rate',
      value: analytics.bounceRate,
      change: '-3.1%',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Analytics Dashboard
        </h1>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Track your blog's performance and insights
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 card-hover`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl shadow-lg`}>
                {stat.icon}
              </div>
              <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
              {stat.label}
            </p>
            <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Views by Category */}
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>
            Views by Category
          </h2>
          <div className="space-y-4">
            {analytics.viewsByCategory.map((category, index) => {
              const maxViews = Math.max(...analytics.viewsByCategory.map(c => c.views));
              const widthPercent = (category.views / maxViews) * 100;
              
              return (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {category.name}
                    </span>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {category.views}
                    </span>
                  </div>
                  <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3`}>
                    <div
                      className={`${category.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${widthPercent}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>
            Traffic Sources
          </h2>
          <div className="space-y-4">
            {analytics.trafficSources.map((source, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {source.name}
                  </span>
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {source.percentage}%
                  </span>
                </div>
                <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3`}>
                  <div
                    className={`${source.color} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing Posts */}
      <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
        <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>
          Top Performing Posts
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <tr>
                <th className={`text-left py-3 px-4 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                  Rank
                </th>
                <th className={`text-left py-3 px-4 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                  Post Title
                </th>
                <th className={`text-left py-3 px-4 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                  Category
                </th>
                <th className={`text-left py-3 px-4 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                  Views
                </th>
              </tr>
            </thead>
            <tbody>
              {analytics.topPosts.map((post, index) => (
                <tr
                  key={post.id}
                  className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-100'}`}
                >
                  <td className={`py-3 px-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className={`font-bold text-lg ${
                      index === 0 ? 'text-yellow-500' :
                      index === 1 ? 'text-gray-400' :
                      index === 2 ? 'text-orange-600' :
                      isDark ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      #{index + 1}
                    </span>
                  </td>
                  <td className={`py-3 px-4 ${isDark ? 'text-white' : 'text-gray-800'} font-medium`}>
                    {post.title}
                  </td>
                  <td className={`py-3 px-4`}>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {post.category}
                    </span>
                  </td>
                  <td className={`py-3 px-4 ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold`}>
                    {post.views || 0}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
