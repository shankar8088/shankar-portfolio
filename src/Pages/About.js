import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [showFullImage, setShowFullImage] = useState(false);

  const experiences = [
    { year: "2023", title: "Frontend Developer", company: "Tech Corp" },
    { year: "2022", title: "Web Developer Intern", company: "StartUp Inc" },
    { year: "2021", title: "Freelance Developer", company: "Self-employed" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-start"
      >
        {/* Profile Image Section */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative group hover-glow cursor-pointer"
          onClick={() => setShowFullImage(true)}
        >
          <img
            src="/images/profile.jpg"
            alt="Shankar"
            className="w-full max-h-[500px] object-contain rounded-lg shadow-xl 
                     transition duration-300 group-hover:shadow-2xl bg-white p-2"
            style={{ objectFit: 'contain' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                        opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-semibold">Shankar</p>
              <p className="text-sm">Click to view full size</p>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-700">About Me</h2>
          
          {/* Paragraph 1: Introduction */}
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              👋 I'm Shankar, a final-year diploma student at Karnataka Government Polytechnic and a passionate Frontend Developer. I specialize in crafting beautiful and functional web experiences using modern technologies like React.
            </p>
            
            {/* Paragraph 2: Education */}
            <p className="text-gray-700 text-lg leading-relaxed">
              My academic journey at KPT has provided me with a strong foundation in both theoretical concepts and practical implementation. Through hands-on mini-projects, lab work, and collaborative assignments, I've developed a comprehensive understanding of software development.
            </p>
            
            {/* Paragraph 3: Technical Skills */}
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm proficient in programming languages like C, C++, Python, and Java, with extensive experience in web technologies including HTML, CSS, JavaScript, and basic SQL. My focus has been on creating responsive, user-friendly interfaces that deliver exceptional experiences.
            </p>
            
            {/* Paragraph 4: Current Project */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Currently, I'm immersed in my final-year project which serves as the capstone to my diploma studies. This project is helping me refine my problem-solving abilities, enhance team collaboration skills, and deepen my understanding of building real-world software solutions.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-4 mt-8">
            <h3 className="text-2xl font-semibold text-blue-600">Professional Experience</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-4 items-start"
              >
                <div className="text-blue-500 font-mono whitespace-nowrap">{exp.year}</div>
                <div className="border-l-2 border-blue-200 pl-4 pb-4">
                  <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {showFullImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowFullImage(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/images/profile.jpg"
                alt="Full Profile"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setShowFullImage(false)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full
                         backdrop-blur-md transition duration-300"
                aria-label="Close fullscreen view"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}