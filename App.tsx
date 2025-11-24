
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExpertiseSection from './components/ExpertiseSection';
import ExperienceSection from './components/ExperienceSection';
import CertificatesSection from './components/CertificatesSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ExperienceSection />
        <CertificatesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
