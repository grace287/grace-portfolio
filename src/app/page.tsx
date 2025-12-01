'use client';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ProjectSection } from "@/components/ProjectSection";
import { MiniCard } from "@/components/MiniCard";
import { AboutMe } from "@/components/AboutMe";
import { ContactSection } from "@/components/ContactSection";
import { SkillRibbon } from "@/components/SkillRibbon";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-grace-rose/20 to-grace-lavender/20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-grace-wine/20 border-t-grace-wine rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-grace-secondary font-inter">Loading Grace Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero with Grace Branding & Animations */}
        <section className="min-h-screen py-16 md:py-0 flex items-center relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-grace-rose/20 via-grace-lavender/10 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">

            <motion.div 
              className="text-center md:text-left space-y-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-grace-wine/5 border border-grace-wine/10 rounded-full mb-4">
                  <span className="text-grace-wine text-sm font-medium font-inter">👋 안녕하세요!</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-pretendard font-bold leading-[1.1] text-grace-text">
                  I&apos;m Grace,<br />
                  <span className="relative">
                    <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,_#7C3A53_0%,_#D5C27F_50%,_#7C3A53_100%)]">
                      Full-stack Developer
                    </span>
                  </span>
                </h1>
                
                <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
                  <div className="h-[2px] w-12 bg-[linear-gradient(90deg,_#7C3A53_0%,_#D5C27F_100%)]" />
                  <span className="text-grace-secondary text-sm font-inter tracking-wider">PORTFOLIO 2025</span>
                  <div className="h-[2px] w-12 bg-[linear-gradient(90deg,_#D5C27F_0%,_#7C3A53_100%)]" />
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-grace-secondary font-inter leading-relaxed max-w-2xl mx-auto md:mx-0">
                <span className="text-grace-text font-medium">웹과 모바일을 넘나드는 개발자</span>입니다.<br/>
                AI 기술과 디자인 사고로 <strong className="text-grace-wine">더 나은 사용자 경험</strong>을 만들어갑니다.
              </p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button 
                  onClick={() => {
                    const element = document.getElementById('projects');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative px-8 py-4 bg-grace-wine text-white rounded-xl overflow-hidden transition-all duration-300 font-pretendard font-semibold shadow-grace hover:shadow-grace-lg hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    프로젝트 보기
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent,_rgba(255,255,255,0.2),_transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
                
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group px-8 py-4 border-2 border-grace-wine text-grace-wine rounded-xl hover:bg-grace-wine hover:text-white transition-all duration-300 font-pretendard font-semibold hover:shadow-grace hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center">
                    연락하기
                    <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex justify-center order-first md:order-last relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
            >
              {/* Main Floating Blob */}
              <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_#F7D7E0_0deg,_#D8C8FF_120deg,_#F7F4DD_240deg,_#F7D7E0_360deg)] rounded-full blur-3xl opacity-60 animate-pulse" />
                
                {/* Tech Stack Floating Cards */}
                <motion.div 
                  className="absolute -top-2 -left-6 group cursor-pointer"
                  animate={{ 
                    y: [-12, 12, -12],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center shadow-grace hover:shadow-grace-lg transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl mb-1">⚛️</span>
                    <span className="text-xs font-inter font-medium text-grace-text">React</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-6 -right-4 group cursor-pointer"
                  animate={{ 
                    y: [12, -12, 12],
                    rotate: [2, -2, 2]
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center shadow-grace hover:shadow-grace-lg transition-all duration-300 group-hover:scale-110">
                    <span className="text-2xl mb-1">📱</span>
                    <span className="text-xs font-inter font-medium text-grace-text">Mobile</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 group cursor-pointer"
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [-1, 1, -1]
                  }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-18 h-18 bg-white/90 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center shadow-grace hover:shadow-grace-lg transition-all duration-300 group-hover:scale-110 p-3">
                    <span className="text-2xl mb-1">🤖</span>
                    <span className="text-xs font-inter font-medium text-grace-text">AI</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-2 -right-8 group cursor-pointer"
                  animate={{ 
                    y: [8, -8, 8],
                    rotate: [1.5, -1.5, 1.5]
                  }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center shadow-grace hover:shadow-grace-lg transition-all duration-300 group-hover:scale-110">
                    <span className="text-2xl mb-1">🎨</span>
                    <span className="text-xs font-inter font-medium text-grace-text">Design</span>
                  </div>
                </motion.div>
                
                {/* Center Logo */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-24 h-24 bg-[linear-gradient(135deg,_#F7D7E0_0%,_#D8C8FF_50%,_#F7F4DD_100%)] rounded-full flex items-center justify-center shadow-grace-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border-4 border-white/50">
                    <span className="text-grace-wine font-pretendard font-bold text-3xl animate-none" style={{ animation: 'none' }}>G</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SkillRibbon />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ProjectSection />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <MiniCard />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <AboutMe />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ContactSection />
      </motion.div>

      </div>
    </div>
  );
}
