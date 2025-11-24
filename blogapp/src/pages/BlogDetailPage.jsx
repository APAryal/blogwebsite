import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { blogsData } from '../data/blogsData';
import { FaFacebook, FaTwitter, FaLinkedin, FaShare } from 'react-icons/fa';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { author: 'John Smith', date: 'Nov 22, 2025', text: 'Great article! Very informative.' },
    { author: 'Jane Doe', date: 'Nov 21, 2025', text: 'Thanks for sharing these insights.' }
  ]);

  const blog = blogsData.find(b => b.id === parseInt(id));
  const relatedPosts = blogsData
    .filter(b => b.category === blog?.category && b.id !== blog?.id)
    .slice(0, 3);

  if (!blog) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Blog Post Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, { author: 'Anonymous', date: 'Just now', text: comment }]);
      setComment('');
    }
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <article className="container mx-auto py-10 px-4 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/categories" className="hover:text-blue-600">Categories</Link>
          <span className="mx-2">/</span>
          <span>{blog.category}</span>
        </div>

        {/* Category Badge */}
        <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
          {blog.category}
        </span>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 text-gray-800 leading-tight">{blog.title}</h1>

        {/* Meta Info */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-4 text-gray-600">
            <span className="font-medium">By {blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
          <div className="flex gap-3">
            <button className="text-blue-600 hover:text-blue-700 transition">
              <FaFacebook size={20} />
            </button>
            <button className="text-blue-400 hover:text-blue-500 transition">
              <FaTwitter size={20} />
            </button>
            <button className="text-blue-700 hover:text-blue-800 transition">
              <FaLinkedin size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-700 transition">
              <FaShare size={20} />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover mb-8 rounded-lg shadow-lg" />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {blog.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-6 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-8 pt-8 border-t border-gray-200">
          <span className="text-gray-600 font-semibold mr-2">Tags:</span>
          {blog.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-300 cursor-pointer transition">
              {tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-md my-8 border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-3 text-gray-800">About the Author</h3>
          <p className="text-gray-600 leading-relaxed">
            <strong className="text-blue-600">{blog.author}</strong> is a passionate writer and expert in {blog.category.toLowerCase()}. 
            With years of experience, they bring valuable insights to readers around the world.
          </p>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <BlogCard {...post} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default BlogDetailPage;