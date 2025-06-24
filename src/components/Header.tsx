import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
    ) => {
    e.preventDefault();
    const section = document.getElementById(targetId.replace('#', ''));
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Wait for the scroll to start before closing the menu
        setTimeout(() => setIsOpen(false), 400); // 400ms = smooth scroll time
    } else {
        setIsOpen(false);
    }
    };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">GabDev</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <nav className="flex flex-col items-start px-4 pb-4 space-y-2">
              <a href="#home" onClick={(e) => handleMobileNavClick(e, '#home')} className="block text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#about" onClick={(e) => handleMobileNavClick(e, '#about')} className="block text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#projects" onClick={(e) => handleMobileNavClick(e, '#projects')} className="block text-gray-700 hover:text-blue-600 font-medium">Projects</a>
              <a href="#contact" onClick={(e) => handleMobileNavClick(e, '#contact')} className="block text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;