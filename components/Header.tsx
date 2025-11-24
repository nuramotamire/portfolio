import React, { useState, useEffect } from 'react';
import {  GitHubIcon, WhatsAppIcon, TelegramIcon, MenuIcon, CloseIcon } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#experience', label: 'Experience' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    // { href: 'https://www.linkedin.com/', icon: <LinkedInIcon className="w-5 h-5" />, label: 'LinkedIn' },
    { href: 'https://github.com/nuramotamire', icon: <GitHubIcon className="w-5 h-5" />, label: 'GitHub' },
    { href: 'https://wa.me/251933724009', icon: <WhatsAppIcon className="w-5 h-5" />, label: 'WhatsApp' }, // Placeholder number
    { href: 'https://t.me/nuramo', icon: <TelegramIcon className="w-5 h-5" />, label: 'Telegram' },
  ];

  const linkClasses = "text-slate-300 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-px";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#hero" className="inline-block text-xl font-bold text-white hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">N.T</a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`font-medium ${linkClasses}`}>{link.label}</a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
               <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label === 'GitHub' ? 'GitHub Profile (Code available upon request)' : social.label} className={linkClasses}>{social.icon}</a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white focus:outline-none">
              {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-900/95 backdrop-blur-sm`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">{link.label}</a>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-slate-700">
           <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label === 'GitHub' ? 'GitHub Profile (Code available upon request)' : social.label} className={linkClasses}>{social.icon}</a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;