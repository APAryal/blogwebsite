import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaFileAlt, FaUsers, FaImages, FaChartBar, FaCog, FaTimes, FaChevronRight } from 'react-icons/fa';
import useThemeStore from '../store/useThemeStore';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { isDark } = useThemeStore();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <FaHome />, color: 'text-blue-500' },
    { name: 'Posts', path: '/dashboard/posts', icon: <FaFileAlt />, color: 'text-green-500' },
    { name: 'Users', path: '/dashboard/users', icon: <FaUsers />, color: 'text-purple-500' },
    { name: 'Media', path: '/dashboard/media', icon: <FaImages />, color: 'text-pink-500' },
    { name: 'Analytics', path: '/dashboard/analytics', icon: <FaChartBar />, color: 'text-orange-500' },
    { name: 'Settings', path: '/dashboard/settings', icon: <FaCog />, color: 'text-red-500' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-600 to-purple-600'} text-white shadow-2xl`}
      >
        {/* Logo & Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <Link to="/dashboard" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div className="text-2xl font-bold">
              <span>Blog</span>
              <span className="text-yellow-300">Admin</span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden text-white hover:text-yellow-300 transition-colors p-2 hover:bg-white/10 rounded-lg"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 px-4 flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => window.innerWidth < 1024 && onClose()}
                  className={`group flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-white text-blue-600 shadow-lg font-semibold'
                      : 'hover:bg-white/10 hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`text-xl ${isActive(item.path) ? item.color : ''}`}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  {isActive(item.path) && (
                    <FaChevronRight className="text-sm" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Quick Stats in Sidebar */}
          <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-white/80 mb-3">Quick Stats</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-white/70">
                <span>Total Posts</span>
                <span className="font-bold text-white">12</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Total Users</span>
                <span className="font-bold text-white">4</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Total Views</span>
                <span className="font-bold text-white">1.2K</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/20">
          <div className="text-center text-sm text-white/70">
            <p className="font-semibold text-white">BlogAdmin Dashboard</p>
            <p className="text-xs mt-1">© 2025 • Version 1.0.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
