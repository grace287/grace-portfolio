'use client';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">
            Grace
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-black transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-black transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors">
              Contact
            </a>
            <a href="/resume.pdf" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Resume
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-black">
                About
              </a>
              <a href="#projects" className="text-gray-700 hover:text-black">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-black">
                Contact
              </a>
              <a href="/resume.pdf" className="text-center px-4 py-2 bg-black text-white rounded-lg">
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};