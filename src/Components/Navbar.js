import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar({ activeSection, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
  ];
  
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Shankar.dev
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <motion.button
                key={link.id}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`${activeSection === link.id 
                  ? 'text-blue-500' 
                  : 'text-gray-700 hover:text-blue-500'
                } transition-colors relative py-2`}
                whileHover={{ y: -2 }}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                    layoutId="nav-underline"
                  />
                )}
              </motion.button>
            ))}

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full 
                       transition-colors shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map(link => (
                <motion.button
                  key={link.id}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.id 
                      ? 'text-blue-500' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 
                         rounded-lg transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}