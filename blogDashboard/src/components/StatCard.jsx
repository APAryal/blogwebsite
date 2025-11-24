import React from 'react';
import useThemeStore from '../store/useThemeStore';

const StatCard = ({ icon, title, value, change, bgColor }) => {
  const { isDark } = useThemeStore();

  return (
    <div
      className={`rounded-xl shadow-lg p-6 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } transform hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
            {title}
          </p>
          <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {value}
          </h3>
          {change && (
            <p className={`text-sm mt-2 ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {change > 0 ? '+' : ''}{change}% from last month
            </p>
          )}
        </div>
        <div
          className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
