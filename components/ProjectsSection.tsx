import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const projectsData: Project[] = [
  // {
  //   title: 'Project Alpha: Secure Messenger',
  //   description: 'A proof-of-concept secure communication platform leveraging end-to-end encryption and metadata protection.',
  //   caseStudyUrl: '#',
  //   imageUrl: 'https://github.com/nuramotamire/enawra-chat/blob/main/images/enawra-signUp.png',
  // },
  // {
  //   title: 'Project Beta: LLM Voice Assistant',
  //   description: 'An AI-powered voice assistant capable of real-time transcription and contextual command execution for smart home devices.',
  //   caseStudyUrl: '#',
  //   imageUrl: 'https://images.unsplash.com/photo-1620712943543-2858200f7456?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // },
  // {
  //   title: 'Project Gamma: Telco Network Scanner',
  //   description: 'A vulnerability scanner designed to identify common security misconfigurations in GSM and LTE networks.',
  //   caseStudyUrl: '#',
  //   imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // },
  // {
  //   title: 'Node.js REST API with JWT Auth',
  //   description: 'A secure and scalable RESTful API built with Node.js & Express, featuring user authentication and authorization using JSON Web Tokens (JWT).',
  //   caseStudyUrl: '#',
  //   imageUrl: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // },
  // {
  //   title: 'Enawra Chat',
  //   description: 'A real-time chat application built for secure and instant communication, featuring a modern user interface and scalable backend architecture.',
  //   caseStudyUrl: '#',
  //   imageUrl: 'https://images.unsplash.com/photo-1554646324-9545f720f4c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // },
  // {
  //   title: 'Food Recipe React App',
  //   description: 'A dynamic web application for discovering and sharing recipes, built with React. Features include search, filtering, and a user-friendly interface.',
  //   caseStudyUrl: '#',
  //   imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // },
  // {
  //   title: 'Treasure Hunter (React Native)',
  //   description: 'A mobile game for iOS and Android where players solve puzzles to find virtual treasures in real-world locations using geolocation.',
  //   caseStudyUrl: '#',
  //   imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // },

  {
    title: 'Enawra Chat (React Native)',
    description: 'A real-time chat application built for secure and instant communication using React Native, Appwrite (auth + DB), and Expo.',
    caseStudyUrl: 'https://github.com/nuramotamire/enawra-chat',
    imageUrl: 'images/enawra-login.png', // ✅ static local image
  },
  {
    title: 'Grocery App (React Native)',
    description: 'A food ordering app with cart, search, filtering, and loyalty program powered by Appwrite and Expo.',
    caseStudyUrl: 'https://github.com/nuramotamire/blue-injera-ordering',
    imageUrl: 'images/grocery.jpg', // ✅ static local image
  },
  {
    title: 'Portfolio App (React)',
    description: 'This portfolio website — built with React 19, TypeScript, Framer Motion, and Tailwind CSS — showcasing my projects and skills.',
    caseStudyUrl: 'https://github.com/nuramotamire/portfolio/tree/main',
    imageUrl: 'images/portf.jpg', // ✅ static local image
  },
];

// --- rest of the code remains unchanged: cardVariants, ProjectCard, ProjectsSection ---
// (no changes needed below)

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
    }
  },
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <motion.div 
        className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
        variants={cardVariants}
    >
        <img 
          src={project.imageUrl} 
          alt={`Screenshot of ${project.title}`} 
          className="w-full h-48 object-cover" 
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder.png'; // fallback if image missing
          }}
        />
        <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-slate-400 text-base">{project.description}</p>
        </div>
        <div className="p-6 bg-slate-800/50 mt-auto">
             <a 
                href={project.caseStudyUrl} 
                className="text-cyan-400 hover:text-white transition-colors duration-300 font-semibold inline-flex items-center group"
            >
                View git
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4-4-4H3"></path></svg>
            </a>
        </div>
    </motion.div>
);

const ProjectsSection: React.FC = () => {
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
    <section id="projects" className="py-20 md:py-32 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Featured Projects</h2>
          <p className="mt-4 text-lg text-slate-400">A selection of projects that showcase my skills and interests.</p>
          <div className="mt-4 w-24 h-1 bg-cyan-400 mx-auto rounded"></div>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;