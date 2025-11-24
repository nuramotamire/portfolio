import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            className="md:w-3/5 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Nuramo Tamire
              <span className="block text-cyan-400 mt-2">Software Engineer & AI/Cybersecurity Specialist</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto md:mx-0">
              Expert in full-stack development, telecommunications security, and pioneering Large Language Model applications.
            </p>
            <div className="mt-10">
              <a
                href="#projects"
                className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-2xl animate-pulse"></div>
                <img
                src="assets/images/nuramo.jpg"
                alt="Nuramo Tamire Headshot"
                className="relative w-full h-full rounded-full object-cover border-4 border-slate-700 shadow-2xl"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;