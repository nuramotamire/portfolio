import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';

const experienceData: Experience[] = [
  {
    role: 'Software Engineer & Security Researcher',
    company: 'NISS',
    period: 'Current',
    description: 'Developing and maintaining secure software solutions. Conducting research on telecommunications vulnerabilities and implementing defensive measures. Also responsible for GSM, LTE, and software testing.',
  },
  {
    role: 'Full-Stack Development Instructor',
    company: 'Code Coach',
    period: 'Part-time',
    description: 'Mentored aspiring developers in modern web technologies, including React, Node.js, and database management. Developed curriculum and led coding bootcamps.',
  },
  {
    role: 'Junior Software Engineer',
    company: 'HER IT Solution',
    period: 'Previous',
    description: 'Contributed to various client projects, focusing on frontend development with JavaScript frameworks and building RESTful APIs with Node.js.',
  },
];

const ExperienceItem: React.FC<{ experience: Experience; isLast: boolean }> = ({ experience, isLast }) => (
  <motion.div 
    className="relative pl-8 sm:pl-32 py-6 group"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-700 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-cyan-500 after:border-4 after:box-content after:border-slate-800 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-cyan-400 bg-cyan-900/50 rounded-full">{experience.period}</time>
      <div className="text-xl font-bold text-white">{experience.role} @ {experience.company}</div>
    </div>
    <div className="text-slate-400">{experience.description}</div>
  </motion.div>
);


const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Professional Experience</h2>
          <p className="mt-4 text-lg text-slate-400">My journey in the tech industry.</p>
          <div className="mt-4 w-24 h-1 bg-cyan-400 mx-auto rounded"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} isLast={index === experienceData.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;