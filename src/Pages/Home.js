import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Auto scroll after typing if needed
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000); // adjust time to match animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particle Background - Now fully visible */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={async (engine) => {
            await loadFull(engine);
          }}
          options={{
            background: {
              color: {
                value: "",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 100,
                  duration: 0-1,
                },
              },
            },
            particles: {
              color: {
                value: "#3b82f6",
              },
              links: {
                color: "#3b82f6",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          <TypeAnimation
            sequence={[
              'Hi, I\'m Shankar',
              10000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
          />
        </motion.h1>
        <p className="text-xl md:text-2xl font-medium mb-8 text-gray-900">
          Frontend Developer | React | Tailwind CSS Enthusiast
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 
                     px-8 py-3 rounded-full text-lg font-semibold text-white transition shadow-lg"
        >
          Get In Touch
        </motion.a>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8"
        >
          <a href="#about" className="text-gray-800 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}