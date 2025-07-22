import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaFacebook, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '', email: '', message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  const socialLinks = [
    { icon: <FaGithub className="w-6 h-6" />, url: "https://github.com/shankar" },
    { icon: <FaLinkedin className="w-6 h-6" />, url: "https://linkedin.com/in/shankar" },
    { icon: <FaInstagram className="w-6 h-6" />, url: "https://instagram.com/shankar" },
    { icon: <FaFacebook className="w-6 h-6" />, url: "https://facebook.com/shankar" },
    { icon: <FaTwitter className="w-6 h-6" />, url: "https://twitter.com/shankar" },
    { icon: <FaEnvelope className="w-6 h-6" />, url: "mailto:shankar@example.com" },
  ];

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-400">Get in Touch</h2>
            <p className="text-gray-300 text-lg">
              Have a project in mind? Let's work together to create something amazing.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-blue-900/50 text-blue-400 rounded-full hover:bg-blue-800/50 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Get in Touch</h3>
              <p className="text-gray-300">Feel free to reach out through any of these platforms.</p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-400" />
                  <span>shankar@example.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8 text-white"
              >
                <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-2xl font-bold">Thank you!</h3>
                <p className="text-gray-300">I'll get back to you soon.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="mt-4 text-blue-400 hover:text-blue-300 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full p-3 bg-white/10 border border-gray-600 rounded-lg 
                             text-white placeholder-gray-400
                             focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full p-3 bg-white/10 border border-gray-600 rounded-lg 
                             text-white placeholder-gray-400
                             focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows="5"
                    className="w-full p-3 bg-white/10 border border-gray-600 rounded-lg 
                             text-white placeholder-gray-400
                             focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg text-white font-semibold ${
                    loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors relative`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
