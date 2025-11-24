import React from 'react';
import { FaClock, FaUser, FaCalendar } from 'react-icons/fa';

const BlogCard = ({ title, image, description, author, date, category, readTime }) => {
  const categoryColors = {
    'Technology': 'bg-blue-500',
    'Health': 'bg-green-500',
    'Travel': 'bg-purple-500',
    'Education': 'bg-orange-500',
    'Business': 'bg-red-500',
    'Lifestyle': 'bg-pink-500'
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col transform hover:-translate-y-3 hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {category && (
          <span className={`absolute top-4 right-4 ${categoryColors[category] || 'bg-blue-600'} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
            {category}
          </span>
        )}
        {readTime && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
            <FaClock className="text-blue-500" />
            {readTime}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-auto">
          <div className="flex items-center gap-2 text-gray-600 text-xs">
            <FaUser className="text-blue-500" size={12} />
            <span className="font-medium">{author}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <FaCalendar className="text-gray-400" size={12} />
            <span>{date}</span>
          </div>
        </div>
      </div>
      
      {/* Animated Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

export default BlogCard;