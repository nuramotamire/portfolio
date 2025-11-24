import React, { useState } from 'react';
import { GitHubIcon, WhatsAppIcon, TelegramIcon, DownloadIcon } from '../constants';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const socialLinks = [
    // { href: 'https://www.linkedin.com/', icon: <LinkedInIcon className="w-6 h-6" />, label: 'LinkedIn' },
    { href: 'https://github.com/', icon: <GitHubIcon className="w-6 h-6" />, label: 'GitHub' },
    { href: 'https://wa.me/251900000000', icon: <WhatsAppIcon className="w-6 h-6" />, label: 'WhatsApp' }, // Placeholder number
    { href: 'https://t.me/yourusername', icon: <TelegramIcon className="w-6 h-6" />, label: 'Telegram' },
  ];

  const linkClasses = "text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-px";
  
  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    if (!email.trim() || !validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    if (!message.trim()) {
        setError('Please enter a message.');
        return;
    }

    // On successful validation
    setSuccess(true);
    console.log('Form submitted:', { email, message });

    // Reset form after a delay
    setTimeout(() => {
        setEmail('');
        setMessage('');
        setSuccess(false);
    }, 3000);
  };

  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Get In Touch</h2>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          I'm currently available for freelance work and new opportunities. Have a question or want to work together?
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-10 space-y-4" noValidate>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Your Email"
              required
            />
          </div>
          <textarea
              placeholder="Your Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Your Message"
              required
            ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-2">Thank you! Your message has been sent.</p>}
        </form>
        
        <div className="flex justify-center items-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label === 'GitHub' ? 'GitHub Profile (Code available upon request)' : social.label} className={linkClasses}>
              {social.icon}
            </a>
          ))}
           <a href="#" aria-label="Download Resume" className={`${linkClasses} flex items-center`}>
            <DownloadIcon className="w-6 h-6 mr-2" /> Resume
          </a>
        </div>
        
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Nuramo Tamire All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;