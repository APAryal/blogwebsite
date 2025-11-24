import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { blogsData } from '../data/blogsData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const recentPosts = blogsData.slice(0, 3);
  const categories = ['Technology', 'Health', 'Travel', 'Education', 'Business', 'Lifestyle'];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">Blog</span>
              <span className="text-purple-400">Hub</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your destination for insightful articles, expert opinions, and inspiring stories across technology, health, travel, and more.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-400" />
                <span>contact@bloghub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span> Home
              </Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span> About Us
              </Link></li>
              <li><Link to="/categories" className="hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span> Categories
              </Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <span className="mr-2 group-hover:mr-3 transition-all duration-300">→</span> Contact
              </Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link 
                    to="/" 
                    state={{ category }}
                    className="hover:text-blue-400 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">•</span> {category}
                    <span className="ml-auto text-xs text-gray-500">
                      ({blogsData.filter(blog => blog.category === category).length})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">Recent Posts</h3>
            <ul className="space-y-3">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="group block"
                  >
                    <h4 className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h4>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; 2025 <span className="text-blue-400 font-semibold">BlogHub</span>. All rights reserved.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: FaFacebook, color: 'hover:text-blue-500', link: 'https://facebook.com' },
                { icon: FaTwitter, color: 'hover:text-blue-400', link: 'https://twitter.com' },
                { icon: FaInstagram, color: 'hover:text-pink-500', link: 'https://instagram.com' },
                { icon: FaLinkedin, color: 'hover:text-blue-600', link: 'https://linkedin.com' },
                { icon: FaGithub, color: 'hover:text-gray-400', link: 'https://github.com' },
                { icon: FaYoutube, color: 'hover:text-red-500', link: 'https://youtube.com' }
              ].map(({ icon: Icon, color, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800 rounded-full transition-all duration-300 ${color} hover:scale-110 hover:-translate-y-1`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;