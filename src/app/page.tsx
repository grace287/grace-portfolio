'use client';
import { motion } from "framer-motion";
import { ProjectSection } from "@/components/ProjectSection";
import { MiniCard } from "@/components/MiniCard";
import { AboutMe } from "@/components/AboutMe";
import { ContactSection } from "@/components/ContactSection";
import { SkillRibbon } from "@/components/SkillRibbon";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero with Grace Branding & Animations */}
        <section className="min-h-screen py-20 md:py-0 flex items-center relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-grace-rose/30 via-grace-lavender/20 to-grace-champagne/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">

            <motion.div 
              className="text-center md:text-left space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-pretendard font-bold leading-tight text-grace-text">
                  Hi, I&apos;m Grace.<br />
                  <span className="bg-gradient-to-r from-grace-wine to-grace-gold bg-clip-text text-transparent">
                    Full-stack Developer.
                  </span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-grace-wine to-grace-gold mx-auto md:mx-0 mt-6" />
              </div>
              
              <p className="text-lg md:text-xl text-grace-secondary font-inter leading-relaxed max-w-lg mx-auto md:mx-0">
                웹과 모바일을 넘나드는 개발자, AI 기술로 더 나은 사용자 경험을 만들어갑니다.
              </p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <button 
                  onClick={() => {
                    const element = document.getElementById('projects');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group px-8 py-4 bg-grace-wine text-white rounded-xl text-center hover:bg-grace-wine/90 transition-all duration-300 font-pretendard font-semibold shadow-grace hover:shadow-grace-lg"
                >
                  View Projects
                  <svg className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m0 0l7-7" />
                  </svg>
                </button>
                <a 
                  href="/resume.pdf" 
                  className="px-8 py-4 border-2 border-grace-wine text-grace-wine rounded-xl text-center hover:bg-grace-wine hover:text-white transition-all duration-300 font-pretendard font-semibold hover:shadow-grace"
                >
                  Download Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex justify-center order-first md:order-last relative"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* Floating Elements */}
              <div className="relative">
                <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-gradient-to-br from-grace-rose via-grace-lavender to-grace-champagne rounded-full blur-2xl opacity-70 animate-pulse" />
                
                {/* Tech Stack Floating Icons */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-grace"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl">⚛️</span>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-8 -right-8 w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-grace"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-xl">📱</span>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -left-8 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-grace"
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-lg">🤖</span>
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
