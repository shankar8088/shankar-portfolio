// src/App.js
import React, { useEffect, useState, useRef } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Remove any existing blur classes since we're not using them anymore
    document.body.classList.remove('page-blur');
  }, []);

  // Handle scroll to update active section and apply blur effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            // Add/remove blur effect based on active section
            if (section !== 'home') {
              document.body.classList.add('page-blur');
            } else {
              document.body.classList.remove('page-blur');
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section function for navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Global overlay with gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 z-10" />
      
      {/* Blur overlay that shows on non-home sections */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-5 opacity-0 transition-opacity duration-300 pointer-events-none" 
           style={{
             opacity: activeSection !== 'home' ? 1 : 0,
             transition: 'opacity 0.3s ease-in-out'
           }} 
      />

      {/* Content wrapper */}
      <div className="relative z-20">
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
        
        <main>
          <section id="home" className="min-h-screen flex items-center justify-center">
            <Home />
          </section>
          
          <section id="about" className="min-h-screen py-20 relative">
            <div className="absolute inset-0 -z-10 bg-black/30 backdrop-blur-sm" />
            <About />
          </section>
          
          <section id="projects" className="min-h-screen py-20 relative">
            <div className="absolute inset-0 -z-10 bg-black/30 backdrop-blur-sm" />
            <Projects />
          </section>
          
          <section id="skills" className="min-h-screen py-20 relative">
            <div className="absolute inset-0 -z-10 bg-black/30 backdrop-blur-sm" />
            <Skills />
          </section>
          
          <section id="contact" className="min-h-screen py-20 relative">
            <div className="absolute inset-0 -z-10 bg-black/30 backdrop-blur-sm" />
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;



