import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSave, FaTimes, FaImage, FaVideo, FaMusic } from 'react-icons/fa';
import usePosts from '../hooks/usePosts';
import useThemeStore from '../store/useThemeStore';
import useAuthStore from '../store/useAuthStore';

const CreatePost = () => {
  const navigate = useNavigate();
  const { createPost, loading } = usePosts();
  const { isDark } = useThemeStore();
  const { user } = useAuthStore();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    image: '',
    category: 'Technology',
    tags: '',
    status: 'draft',
    audio: '',
    video: ''
  });

  const [mediaPreview, setMediaPreview] = useState({
    image: '',
    audio: '',
    video: ''
  });

  const categories = ['Technology', 'Health', 'Travel', 'Education', 'Business', 'Lifestyle'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMediaUpload = (type, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaPreview({ ...mediaPreview, [type]: reader.result });
        setFormData({ ...formData, [type]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const postData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      author: user?.name || 'Admin User',
      views: 0
    };

    const success = await createPost(postData);
    if (success) {
      navigate('/dashboard/posts');
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Create New Post
          </h1>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
            Add a new blog post to your website
          </p>
        </div>
        <button
          onClick={() => navigate('/dashboard/posts')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          } transition-colors`}
        >
          <FaTimes />
          <span>Cancel</span>
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Content */}
        <div className={`rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-6`}>
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>
            Post Details
          </h2>

          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
                }`}
                placeholder="Enter post title..."
              />
            </div>

            {/* Description */}
            <div>
              <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
                }`}
                placeholder="Brief description of your post..."
              ></textarea>
            </div>

            {/* Content */}
            <div>
              <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Content *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows="10"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
                }`}
                placeholder="Write your post content here..."
              ></textarea>
            </div>

            {/* Category & Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
                  }`}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Status *
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
                  }`}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Tags
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
                }`}
                placeholder="Separate tags with commas (e.g., React, JavaScript, Web)"
              />
            </div>
          </div>
        </div>

        {/* Media Upload */}
        <div className={`rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-6`}>
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>
            Media Files
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image Upload */}
            <div>
              <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <FaImage className="inline mr-2" />
                Featured Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleMediaUpload('image', e)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
                }`}
              />
              {mediaPreview.image && (
                <img src={mediaPreview.image} alt="Preview" className="mt-4 w-full h-32 object-cover rounded-lg" />
              )}
            </div>

            {/* Audio Upload */}
            <div>
              <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <FaMusic className="inline mr-2" />
                Audio File
              </label>
              <input
                type="file"
                accept="audio/*"
                onChange={(e) => handleMediaUpload('audio', e)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
                }`}
              />
              {mediaPreview.audio && (
                <audio src={mediaPreview.audio} controls className="mt-4 w-full" />
              )}
            </div>

            {/* Video Upload */}
            <div>
              <label className={`block font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <FaVideo className="inline mr-2" />
                Video File
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleMediaUpload('video', e)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
                }`}
              />
              {mediaPreview.video && (
                <video src={mediaPreview.video} controls className="mt-4 w-full h-32 object-cover rounded-lg" />
              )}
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/dashboard/posts')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            <FaSave />
            <span>{loading ? 'Creating...' : 'Create Post'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
