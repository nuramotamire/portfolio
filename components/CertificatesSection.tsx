import React from 'react';
import { motion } from 'framer-motion';
import { Certificate } from '../types';

const certificatesData: Certificate[] = [
  {
    title: 'Code Coach Certificate',
    issuer: 'CodeJika',
    date: '2023',
    verifyUrl: '#',
    imageUrl: 'assets/images/codejika.jpg',
  },
  {
    title: 'AI and Career Empowerment Course',
    issuer: 'Robert H. Smith University School of Business',
    date: '2024',
    verifyUrl: '#',
    imageUrl: 'assets/images/career.jpg',
  },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
      }
    },
};

const CertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => (
  <motion.div 
    className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300"
    variants={cardVariants}
  >
    <img src={certificate.imageUrl} alt={`Image for ${certificate.title}`} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <div>
        <p className="text-sm font-semibold text-cyan-400 mb-1">{certificate.issuer}</p>
        <h3 className="text-xl font-bold text-white mb-2">{certificate.title}</h3>
        <p className="text-slate-400 mb-6">Issued: {certificate.date}</p>
      </div>
      <a
        href={certificate.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto block text-center bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-all duration-300 transform hover:scale-105"
      >
        Verify Credential
      </a>
    </div>
  </motion.div>
);

const CertificatesSection: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section id="certificates" className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Certificates & Credentials</h2>
          <p className="mt-4 text-lg text-slate-400">Commitment to continuous learning and professional development.</p>
          <div className="mt-4 w-24 h-1 bg-cyan-400 mx-auto rounded"></div>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {certificatesData.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;