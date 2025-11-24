import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20 md:py-32 bg-slate-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            About Me
          </h2>
          <div className="mt-4 w-24 h-1 bg-cyan-400 mx-auto rounded"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center text-lg text-slate-400 leading-relaxed space-y-6">
          <p>
            I am a multifaceted Software Engineer with a deep-seated passion for the intersections of technology, security, and artificial intelligence. My professional journey has equipped me with a robust skill set in full-stack development while specializing in the critical domains of telecommunications security and the innovative field of Large Language Models (LLMs).
          </p>
          <p>
            My work involves not just building resilient and scalable software but also safeguarding digital communication channels and exploring the frontiers of AI-driven solutions. I thrive in environments that challenge me to solve complex problems and continuously learn.
          </p>
          <p>
            I hold a Bachelor of Science in Software Engineering from <span className="text-cyan-400 font-semibold">Debre Birhan University</span>, where I graduated with a CGPA of <span className="text-cyan-400 font-semibold">3.52</span>. This academic foundation has been instrumental in my ability to tackle diverse technical challenges with analytical rigor and creativity.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;