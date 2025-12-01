'use client';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 하이드레이션 에러 방지 - 비동기로 처리
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    if (mounted) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mounted]);

  // 메뉴 클릭 시 스크롤 이동 및 메뉴 닫기
  const handleMenuClick = (targetId: string) => {
    setIsMenuOpen(false);
    
    if (mounted) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  if (!mounted) {
    return (
      <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-grace-wine/10">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-grace-rose to-grace-lavender rounded-full flex items-center justify-center shadow-grace">
                <span className="text-grace-wine font-pretendard font-bold text-lg">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-pretendard font-bold text-grace-text">Grace</span>
                <span className="text-xs font-inter text-grace-secondary tracking-wider">DEVELOPER</span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg border-grace-wine/20 shadow-grace' 
        : 'bg-white/80 backdrop-blur-md border-grace-wine/10'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Grace Logo - 클릭 시 맨 위로 */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-grace-rose to-grace-lavender rounded-full flex items-center justify-center shadow-grace hover:shadow-grace-lg transition-shadow">
              <span className="text-grace-wine font-pretendard font-bold text-lg">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-pretendard font-bold text-grace-text">Grace</span>
              <span className="text-xs font-inter text-grace-secondary tracking-wider">DEVELOPER</span>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleMenuClick('about')}
              className="text-grace-secondary hover:text-grace-wine transition-all duration-200 font-inter font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleMenuClick('projects')}
              className="text-grace-secondary hover:text-grace-wine transition-all duration-200 font-inter font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => handleMenuClick('contact')}
              className="text-grace-secondary hover:text-grace-wine transition-all duration-200 font-inter font-medium"
            >
              Contact
            </button>
            <a 
              href="/resume.pdf" 
              className="px-6 py-2 bg-grace-wine text-white rounded-lg hover:bg-grace-wine/90 transition-all duration-200 font-pretendard font-semibold shadow-grace hover:shadow-grace-lg"
            >
              Resume
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-lg hover:bg-grace-rose/20 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute h-0.5 w-6 bg-grace-wine transition-all duration-300 ${
                isMenuOpen 
                  ? 'rotate-45 top-3' 
                  : 'top-1'
              }`} />
              <span className={`absolute h-0.5 w-6 bg-grace-wine transition-all duration-300 top-3 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute h-0.5 w-6 bg-grace-wine transition-all duration-300 ${
                isMenuOpen 
                  ? '-rotate-45 top-3' 
                  : 'top-5'
              }`} />
            </div>
          </button>
        </div>
        
        {/* Mobile Navigation - 애니메이션 개선 */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 border-t border-grace-wine/10 mt-4">
            <div className="flex flex-col space-y-1">
              <button 
                onClick={() => handleMenuClick('about')}
                className="text-left px-4 py-3 text-grace-secondary hover:text-grace-wine hover:bg-grace-rose/10 rounded-lg transition-all duration-200 font-inter"
              >
                About Me
              </button>
              <button 
                onClick={() => handleMenuClick('projects')}
                className="text-left px-4 py-3 text-grace-secondary hover:text-grace-wine hover:bg-grace-rose/10 rounded-lg transition-all duration-200 font-inter"
              >
                Projects
              </button>
              <button 
                onClick={() => handleMenuClick('contact')}
                className="text-left px-4 py-3 text-grace-secondary hover:text-grace-wine hover:bg-grace-rose/10 rounded-lg transition-all duration-200 font-inter"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <a 
                  href="/resume.pdf" 
                  className="block text-center px-6 py-3 bg-grace-wine text-white rounded-lg hover:bg-grace-wine/90 transition-all duration-200 font-pretendard font-semibold"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};