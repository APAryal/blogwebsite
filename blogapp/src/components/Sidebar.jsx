import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaTags, FaEnvelope, FaInfoCircle } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="p-2 bg-gray-800 text-white fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-300 dark:border-gray-700 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
        <nav>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaTags className="text-blue-600 dark:text-blue-400" />
              <Link to="/categories" className="text-blue-600 dark:text-blue-400 hover:underline">
                Categories
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaHome className="text-blue-600 dark:text-blue-400" />
              <Link to="/recent-posts" className="text-blue-600 dark:text-blue-400 hover:underline">
                Recent Posts
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaInfoCircle className="text-blue-600 dark:text-blue-400" />
              <Link to="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
                About Us
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-600 dark:text-blue-400" />
              <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;