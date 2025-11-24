import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20 md:py-32 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-yellow-300">BlogHub</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-4 max-w-3xl mx-auto leading-relaxed">
            Discover insightful articles, expert opinions, and inspiring stories
          </p>
          <p className="text-base md:text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            Join thousands of readers exploring content on Technology, Health, Travel, Education, Business, and Lifestyle
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-slideInLeft">
          <Link to="/categories">
            <button className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-3xl hover:bg-yellow-300 hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              🚀 Explore Categories
            </button>
          </Link>
          <Link to="/about">
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 shadow-lg">
              📖 Learn More
            </button>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slideInRight">
          {[
            { number: '12+', label: 'Articles' },
            { number: '6', label: 'Categories' },
            { number: '1K+', label: 'Readers' },
            { number: '50+', label: 'Authors' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-700 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f3f4f6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;