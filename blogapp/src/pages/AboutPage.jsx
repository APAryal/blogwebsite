import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaUsers, FaRocket, FaHeart, FaAward } from 'react-icons/fa';

const AboutPage = () => {
  const stats = [
    { icon: <FaUsers className="text-4xl" />, number: '10K+', label: 'Active Readers' },
    { icon: <FaRocket className="text-4xl" />, number: '500+', label: 'Articles Published' },
    { icon: <FaHeart className="text-4xl" />, number: '50+', label: 'Expert Writers' },
    { icon: <FaAward className="text-4xl" />, number: '15+', label: 'Awards Won' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      description: 'Visionary leader with 10+ years in digital publishing'
    },
    {
      name: 'Michael Chen',
      role: 'Editor-in-Chief',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      description: 'Award-winning journalist and content strategist'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      description: 'Full-stack developer passionate about user experience'
    }
  ];

  const values = [
    {
      title: 'Quality Content',
      description: 'We prioritize high-quality, well-researched articles that provide real value to our readers.',
      icon: '📝'
    },
    {
      title: 'Community First',
      description: 'Building a supportive community where readers and writers can connect and grow together.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'Constantly evolving and adopting new technologies to enhance the reading experience.',
      icon: '💡'
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication and honest relationships with our community.',
      icon: '🔍'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">About BlogHub</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Empowering readers worldwide with insightful articles, expert opinions, and inspiring stories across diverse topics.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-blue-600 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To deliver high-quality, accessible content that educates, inspires, and entertains readers across the globe. We strive to create a platform where knowledge meets creativity, and every article adds value to our readers' lives.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl mb-4">🌟</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the world's most trusted and beloved content platform, fostering a community where diverse voices are heard, ideas are shared, and knowledge flows freely. We envision a future where quality content is accessible to everyone.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Passionate professionals dedicated to bringing you the best content experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community Today!</h2>
          <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
            Be part of our growing community of readers and writers. Subscribe to get the latest articles delivered to your inbox.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl">
            Subscribe Now 🚀
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;