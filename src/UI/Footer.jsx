import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t-1 border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Avinash Kamadri</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://github.com/5mokshith" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} strokeWidth={1.5} />
            </a>
            <a 
              href="www.linkedin.com/in/mokshith-rao-50a385290" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <p className="mt-2">
            Built with ❤️ by Mokshith Rao in collab with Avinash
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 