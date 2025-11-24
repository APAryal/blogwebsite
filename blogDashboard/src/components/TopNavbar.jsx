import React, { useState } from 'react';
import { FaBars, FaBell, FaUserCircle, FaMoon, FaSun, FaSignOutAlt, FaSearch, FaCog, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useThemeStore from '../store/useThemeStore';
import useAuthStore from '../store/useAuthStore';
import useAuth from '../hooks/useAuth';

const TopNavbar = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useThemeStore();
  const { user } = useAuthStore();
  const { logoutUser } = useAuth();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className={`sticky top-0 z-30 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'} border-b shadow-lg backdrop-blur-sm`}>
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Side - Menu Button & Search */}
        <div className="flex items-center space-x-4 flex-1">
          <button
            onClick={onMenuClick}
            className={`lg:hidden p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors transform hover:scale-110`}
          >
            <FaBars className={`text-xl ${isDark ? 'text-white' : 'text-gray-700'}`} />
          </button>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search posts, users, media..."
                className={`w-full pl-10 pr-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-200 placeholder-gray-500'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-all transform hover:scale-110`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <FaSun className="text-yellow-400 text-xl animate-pulse" />
            ) : (
              <FaMoon className="text-gray-700 text-xl" />
            )}
          </button>

          {/* Notifications */}
          <button
            className={`relative p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-all transform hover:scale-110`}
            title="Notifications"
          >
            <FaBell className={`text-xl ${isDark ? 'text-white' : 'text-gray-700'}`} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              3
            </span>
          </button>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className={`hidden md:block text-right ${isDark ? 'text-white' : 'text-gray-800'}`}>
                <p className="text-sm font-semibold">{user?.name || 'Admin User'}</p>
                <p className="text-xs text-gray-500">{user?.role || 'Administrator'}</p>
              </div>
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-blue-500 hover:border-purple-500 transition-colors"
                />
              ) : (
                <FaUserCircle className="text-3xl text-blue-500 hover:text-purple-500 transition-colors" />
              )}
            </button>

            {/* Dropdown Menu */}
            {showProfile && (
              <div className={`absolute right-0 mt-2 w-56 rounded-xl shadow-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'} py-2 z-50 animate-fadeIn`}>
                <div className={`px-4 py-3 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {user?.name || 'Admin User'}
                  </p>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {user?.email || 'admin@blog.com'}
                  </p>
                </div>
                
                <button
                  onClick={() => {
                    setShowProfile(false);
                    navigate('/dashboard/settings');
                  }}
                  className={`w-full px-4 py-2 text-left flex items-center space-x-3 ${isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} transition-colors`}
                >
                  <FaUser />
                  <span>Profile</span>
                </button>
                
                <button
                  onClick={() => {
                    setShowProfile(false);
                    navigate('/dashboard/settings');
                  }}
                  className={`w-full px-4 py-2 text-left flex items-center space-x-3 ${isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} transition-colors`}
                >
                  <FaCog />
                  <span>Settings</span>
                </button>
                
                <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} mt-2`}></div>
                
                <button
                  onClick={() => {
                    setShowProfile(false);
                    logoutUser();
                  }}
                  className="w-full px-4 py-2 text-left flex items-center space-x-3 text-red-500 hover:bg-red-50 transition-colors"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Logout */}
          <button
            onClick={logoutUser}
            className="md:hidden p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
            title="Logout"
          >
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
