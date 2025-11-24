import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogsData } from '../data/blogsData';

const CategoriesPage = () => {
  const navigate = useNavigate();

  const getCategoryCount = (categoryName) => {
    return blogsData.filter(blog => blog.category === categoryName).length;
  };

  const handleCategoryClick = (categoryName) => {
    navigate('/', { state: { category: categoryName } });
  };

  const categories = [
    {
      name: 'Technology',
      description: 'Explore the latest in tech trends, gadgets, and innovations.',
      icon: '💻',
      color: 'from-blue-500 to-blue-700',
      posts: getCategoryCount('Technology')
    },
    {
      name: 'Health',
      description: 'Your guide to wellness, fitness, and healthy living.',
      icon: '🏥',
      color: 'from-green-500 to-green-700',
      posts: getCategoryCount('Health')
    },
    {
      name: 'Travel',
      description: 'Discover destinations, travel tips, and adventure stories.',
      icon: '✈️',
      color: 'from-purple-500 to-purple-700',
      posts: getCategoryCount('Travel')
    },
    {
      name: 'Education',
      description: 'Learning resources, study tips, and educational insights.',
      icon: '📚',
      color: 'from-orange-500 to-orange-700',
      posts: getCategoryCount('Education')
    },
    {
      name: 'Business',
      description: 'Business strategies, entrepreneurship, and market insights.',
      icon: '💼',
      color: 'from-red-500 to-red-700',
      posts: getCategoryCount('Business')
    },
    {
      name: 'Lifestyle',
      description: 'Tips for living your best life, from fashion to home décor.',
      icon: '🌟',
      color: 'from-pink-500 to-pink-700',
      posts: getCategoryCount('Lifestyle')
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section with Gradient */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">Explore Categories</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto animate-slideInLeft">
            Discover a wide range of topics and find content that interests you the most.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden`}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 z-10">
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                      {category.name}
                    </h2>
                    <span className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                      {category.posts} articles available
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                  {category.description}
                </p>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategoryClick(category.name);
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold group-hover:bg-white group-hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Explore {category.name} →
                </button>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 rounded-2xl shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
            Use our powerful search feature to find specific topics or explore all our articles on the home page.
          </p>
          <Link to="/">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              🔍 Search All Articles
            </button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoriesPage;