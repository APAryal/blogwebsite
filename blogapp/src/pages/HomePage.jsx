import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import { blogsData } from '../data/blogsData';

const HomePage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Handle category selection from CategoriesPage navigation
  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
      // Clear the state after using it
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const categories = ['All', 'Technology', 'Health', 'Travel', 'Education', 'Business', 'Lifestyle'];

  const filteredBlogs = blogsData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      {/* Search and Filter Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-8 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="🔍 Search articles by title or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-2 border-blue-200 rounded-full px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => {
              const categoryIcons = {
                'All': '🌐',
                'Technology': '💻',
                'Health': '🏥',
                'Travel': '✈️',
                'Education': '📚',
                'Business': '💼',
                'Lifestyle': '🌟'
              };
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  <span className="mr-1">{categoryIcons[category]}</span>
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b-2 border-gray-200">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              {selectedCategory === 'All' ? '📰 Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-gray-600">Discover insightful content from our expert writers</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
              {filteredBlogs.length} Articles
            </span>
          </div>
        </div>
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <BlogCard {...blog} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No articles found. Try adjusting your search or filters.</p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8">Get the latest articles delivered straight to your inbox</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full w-full md:w-96 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;