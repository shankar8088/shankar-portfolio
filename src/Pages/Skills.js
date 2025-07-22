import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: "💻" },
        { name: "JavaScript/ES6+", level: 85, icon: "⚡" },
        { name: "HTML5/CSS3", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 88, icon: "🎯" },
        { name: "TypeScript", level: 75, icon: "📘" },
      ]
    },
    backend: {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 70, icon: "🚀" },
        { name: "Git/GitHub", level: 85, icon: "📚" },
        { name: "REST APIs", level: 80, icon: "🔌" },
        { name: "Firebase", level: 75, icon: "🔥" },
      ]
    },
    design: {
      title: "Design & Others",
      skills: [
        { name: "Figma", level: 85, icon: "🎯" },
        { name: "Responsive Design", level: 90, icon: "📱" },
        { name: "UI/UX Principles", level: 80, icon: "🎨" },
        { name: "Accessibility", level: 85, icon: "♿" },
      ]
    }
  };

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My technical skills and proficiency levels across different areas of web development.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 flex-wrap">
          {Object.keys(skillCategories).map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer hover-glow ${activeCategory === category ? 'bg-white/10 backdrop-blur-sm' : 'bg-white/5 hover:bg-white/[0.08]'}`}
            >
              {skillCategories[category].title}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              style={{
                color: '#000 !important',
                '--text-color': '#000',
                '--text-opacity': '1'
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                  <span className="text-2xl text-[#000] !text-[#000]" style={{ color: '#000 !important' }}>{skill.icon}</span>
                  <h3 className="font-semibold text-[#000] !text-[#000]" style={{ color: '#000 !important' }}>{skill.name}</h3>
                </div>
                <span className="text-sm !text-blue-700 font-mono font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <div className="text-center pt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Redux", "Next.js", "Webpack", "Jest", "GraphQL", "Sass"].map(skill => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
