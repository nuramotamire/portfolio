import React from 'react';
import { motion } from 'framer-motion';
import { PythonIcon, NodeJsIcon, ReactIcon, JavaScriptIcon, PostgresIcon, MongoDbIcon, OdooIcon } from '../constants';

interface SkillCardProps {
  title: string;
  skills: (string | { name: string; icon: React.ReactNode })[];
  icon: React.ReactNode;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon }) => (
  <motion.div
    className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-400 hover:scale-105 transition-all duration-300 h-full"
    variants={cardVariants}
  >
    <div className="flex items-center mb-6">
      <div className="text-cyan-400 mr-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <ul className="space-y-4 text-slate-400">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          {typeof skill === 'string' ? (
            <>
              <svg className="w-4 h-4 mr-3 mt-1 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>{skill}</span>
            </>
          ) : (
            <>
              <div className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0 flex items-center justify-center">{skill.icon}</div>
              <span>{skill.name}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ExpertiseSection: React.FC = () => {
  const expertiseData = [
    {
      title: 'Cybersecurity / Telco',
      skills: ['IMSI Catcher', 'SMS/Voice Interception', 'LTE Redirect Attack', 'GSM/LTE Vulnerability Testing'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="10" width="20" height="12" rx="2" /><path d="M7 10V7a5 5 0 0 1 10 0v3" /></svg>
      ),
    },
    {
      title: 'AI / LLM',
      skills: ['LLM Speech Recognition', 'Real-time Transcription', 'Multilingual Translation', 'Model Fine-tuning'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect x="4" y="12" width="8" height="8" rx="2" /><path d="M8 12v-2a2 2 0 1 1 4 0v2" /><path d="M12 12h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" /><path d="M16 12h4" /><path d="M18 10v4" /><path d="M16 16h4" /></svg>
      ),
    },
    {
      title: 'Core Development',
      skills: [
        { name: 'Python (Django)', icon: <PythonIcon className="w-full h-full" /> },
        { name: 'Node.js', icon: <NodeJsIcon className="w-full h-full" /> },
        { name: 'React & React Native', icon: <ReactIcon className="w-full h-full" /> },
        { name: 'JavaScript/TypeScript', icon: <JavaScriptIcon className="w-full h-full" /> },
        { name: 'PostgreSQL', icon: <PostgresIcon className="w-full h-full" /> },
        { name: 'MongoDB', icon: <MongoDbIcon className="w-full h-full" /> },
        { name: 'Odoo (ERP)', icon: <OdooIcon className="w-full h-full" /> },
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="expertise" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Core Expertise</h2>
          <p className="mt-4 text-lg text-slate-400">A blend of offensive security, AI innovation, and robust software engineering.</p>
          <div className="mt-4 w-24 h-1 bg-cyan-400 mx-auto rounded"></div>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {expertiseData.map((item) => (
            <SkillCard key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;