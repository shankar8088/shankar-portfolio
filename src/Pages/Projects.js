import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Indian Oil Website",
      desc: "A modern UI clone of the Indian Oil petrol bunk website, featuring responsive layouts and interactive elements.",
      link: "#",
      image: "/images/projects/indian-oil.jpg",
      category: "web",
      tech: ["React", "Tailwind CSS", "Firebase"],
      github: "https://github.com/shankar/indian-oil",
      live: "https://indian-oil-clone.vercel.app"
    },
    {
      title: "Yoga Website",
      desc: "A peaceful yoga web page with calming visuals and smooth animations, built with React and Tailwind.",
      link: "#",
      image: "/images/projects/yoga-website.jpg",
      category: "web",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/shankar/yoga-website",
      live: "https://yoga-website.vercel.app"
    },
    {
      title: "Portfolio Website",
      desc: "My own portfolio website showcasing my skills, projects, and contact information.",
      link: "#",
      image: "/images/projects/portfolio-website.jpg",
      category: "design",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/shankar/portfolio-website",
      live: "https://portfolio-website.vercel.app"
    },
    {
      title: "Weather App",
      desc: "A simple weather app using OpenWeatherMap API, React, and Tailwind CSS.",
      link: "#",
      image: "/images/projects/weather-app.jpg",
      category: "web",
      tech: ["React", "Tailwind CSS", "OpenWeatherMap API"],
      github: "https://github.com/shankar/weather-app",
      live: "https://weather-app.vercel.app"
    },
  ];

  const categories = ['all', 'web', 'mobile', 'design'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 p-6 rounded-xl shadow-lg hover-glow transition-all backdrop-blur-sm"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.desc}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                      </svg>
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
