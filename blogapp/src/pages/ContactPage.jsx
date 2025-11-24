import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email Us',
      info: 'contact@bloghub.com',
      subInfo: 'We reply within 24 hours',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      subInfo: 'Mon-Fri, 9AM-6PM EST',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Visit Us',
      info: '123 Blog Street',
      subInfo: 'San Francisco, CA 94102',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', color: 'hover:text-blue-600' },
    { icon: <FaTwitter />, name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <FaLinkedin />, name: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: <FaInstagram />, name: 'Instagram', color: 'hover:text-pink-600' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">Get In Touch</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Let's start a conversation!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 -mt-20">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:-translate-y-2 transition-all duration-300">
              <div className={`bg-gradient-to-r ${item.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-800 font-semibold mb-1">{item.info}</p>
              <p className="text-gray-500 text-sm">{item.subInfo}</p>
            </div>
          ))}\n        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            {submitted && (
              <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-lg mb-6 shadow-lg animate-fadeIn">
                <p className="font-semibold">✓ Success! Your message has been sent.</p>
                <p className="text-sm text-green-50 mt-1">We'll get back to you soon.</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us what's on your mind..."
                  rows="6"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message 📤
              </button>
            </form>
          </div>

          {/* Additional Info & Map */}
          <div className="space-y-6">
            {/* Office Hours */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">⏰ Office Hours</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-red-500">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Connect With Us</h3>
              <p className="text-gray-600 mb-6">Follow us on social media for the latest updates and articles</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <button key={index} className={`text-2xl text-gray-600 ${social.color} transition-colors duration-300 p-3 bg-gray-100 rounded-full hover:shadow-lg transform hover:-translate-y-1`}>
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-6xl text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">123 Blog Street</p>
                  <p className="text-gray-600">San Francisco, CA 94102</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h4 className="font-bold text-gray-800 mb-2">How quickly will you respond?</h4>
              <p className="text-gray-600">We typically respond within 24 hours during business days.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h4 className="font-bold text-gray-800 mb-2">Can I contribute articles?</h4>
              <p className="text-gray-600">Yes! We welcome guest contributors. Contact us with your ideas.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h4 className="font-bold text-gray-800 mb-2">Do you offer advertising opportunities?</h4>
              <p className="text-gray-600">Absolutely. Reach out to discuss partnership opportunities.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};


export default ContactPage;