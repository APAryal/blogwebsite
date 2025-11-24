import React, { useState } from 'react';
import { FaImage, FaVideo, FaMusic, FaUpload, FaTrash, FaSearch } from 'react-icons/fa';
import useThemeStore from '../store/useThemeStore';
import toast from 'react-hot-toast';

const Media = () => {
  const { isDark } = useThemeStore();
  const [mediaFiles, setMediaFiles] = useState([
    {
      id: 1,
      name: 'hero-image.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
      size: '245 KB',
      uploadedAt: '2025-11-20'
    },
    {
      id: 2,
      name: 'intro-video.mp4',
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      size: '5.2 MB',
      uploadedAt: '2025-11-19'
    },
    {
      id: 3,
      name: 'podcast-episode.mp3',
      type: 'audio',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      size: '3.8 MB',
      uploadedAt: '2025-11-18'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const handleFileUpload = (type, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newMedia = {
          id: Date.now(),
          name: file.name,
          type: type,
          url: reader.result,
          size: (file.size / 1024).toFixed(2) + ' KB',
          uploadedAt: new Date().toISOString().split('T')[0]
        };
        setMediaFiles([newMedia, ...mediaFiles]);
        toast.success(`${file.name} uploaded successfully!`);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      setMediaFiles(mediaFiles.filter(f => f.id !== id));
      toast.success('Media deleted successfully');
    }
  };

  const filteredMedia = mediaFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || file.type === filterType;
    return matchesSearch && matchesType;
  });

  const getIcon = (type) => {
    switch (type) {
      case 'image':
        return <FaImage className="text-blue-500" />;
      case 'video':
        return <FaVideo className="text-purple-500" />;
      case 'audio':
        return <FaMusic className="text-green-500" />;
      default:
        return <FaImage />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Media Library
        </h1>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Manage your images, videos, and audio files
        </p>
      </div>

      {/* Upload Section */}
      <div className={`rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-6`}>
        <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4`}>
          Upload New Media
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Image Upload */}
          <label className="cursor-pointer">
            <div className={`border-2 border-dashed rounded-lg p-6 text-center hover:border-blue-500 transition-colors ${
              isDark ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-blue-50'
            }`}>
              <FaImage className="text-4xl text-blue-500 mx-auto mb-2" />
              <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Upload Image</p>
              <p className="text-sm text-gray-500">JPG, PNG, GIF</p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload('image', e)}
              className="hidden"
            />
          </label>

          {/* Video Upload */}
          <label className="cursor-pointer">
            <div className={`border-2 border-dashed rounded-lg p-6 text-center hover:border-purple-500 transition-colors ${
              isDark ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-purple-50'
            }`}>
              <FaVideo className="text-4xl text-purple-500 mx-auto mb-2" />
              <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Upload Video</p>
              <p className="text-sm text-gray-500">MP4, WebM, AVI</p>
            </div>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => handleFileUpload('video', e)}
              className="hidden"
            />
          </label>

          {/* Audio Upload */}
          <label className="cursor-pointer">
            <div className={`border-2 border-dashed rounded-lg p-6 text-center hover:border-green-500 transition-colors ${
              isDark ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-green-50'
            }`}>
              <FaMusic className="text-4xl text-green-500 mx-auto mb-2" />
              <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Upload Audio</p>
              <p className="text-sm text-gray-500">MP3, WAV, OGG</p>
            </div>
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => handleFileUpload('audio', e)}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Filters */}
      <div className={`rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-6`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Search media files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
              }`}
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className={`px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'
            }`}
          >
            <option value="all">All Media</option>
            <option value="image">Images</option>
            <option value="video">Videos</option>
            <option value="audio">Audio</option>
          </select>
        </div>
      </div>

      {/* Media Grid */}
      <div className={`rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-6`}>
        <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>
          Media Files ({filteredMedia.length})
        </h2>

        {filteredMedia.length === 0 ? (
          <div className="text-center py-12">
            <FaImage className={`text-6xl ${isDark ? 'text-gray-600' : 'text-gray-400'} mx-auto mb-4`} />
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No media files found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMedia.map((file) => (
              <div
                key={file.id}
                className={`rounded-lg overflow-hidden border-2 ${
                  isDark ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-white'
                } hover:shadow-lg transition-all`}
              >
                {/* Media Preview */}
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  {file.type === 'image' && (
                    <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                  )}
                  {file.type === 'video' && (
                    <video src={file.url} className="w-full h-full object-cover" />
                  )}
                  {file.type === 'audio' && (
                    <FaMusic className="text-6xl text-green-500" />
                  )}
                </div>

                {/* File Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2 flex-1">
                      {getIcon(file.type)}
                      <p className={`font-semibold text-sm line-clamp-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        {file.name}
                      </p>
                    </div>
                  </div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-3`}>
                    <p>{file.size}</p>
                    <p>{file.uploadedAt}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(file.id, file.name)}
                    className="w-full px-3 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <FaTrash />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;
