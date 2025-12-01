'use client';
import { motion } from "framer-motion";
import { ProjectSection } from "@/components/ProjectSection";
import { MiniCard } from "@/components/MiniCard";
import { AboutMe } from "@/components/AboutMe";
import { ContactSection } from "@/components/ContactSection";
import { SkillRibbon } from "@/components/SkillRibbon";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* Hero with Grace Branding & Animations */}
      <section className="min-h-[650px] py-20 md:py-0 flex items-center bg-gradient-to-br from-grace-rose/30 via-grace-lavender/20 to-grace-champagne/30">
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">

          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-pretendard font-bold leading-tight text-grace-text">
              Hi, I'm Grace.<br />
              Full-stack Developer.
            </h1>
            <p className="text-lg md:text-xl mt-5 text-grace-secondary font-inter">
              Web · Mobile · AI · Design-driven Engineering
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <a href="#projects" className="px-8 py-4 bg-grace-wine text-white rounded-xl text-center hover:bg-grace-wine/90 transition-all duration-300 font-pretendard font-semibold shadow-grace">
                View Projects
              </a>
              <a href="/resume.pdf" className="px-8 py-4 border-2 border-grace-wine text-grace-wine rounded-xl text-center hover:bg-grace-wine hover:text-white transition-all duration-300 font-pretendard font-semibold">
                Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center order-first md:order-last"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-gradient-to-br from-grace-rose via-grace-lavender to-grace-champagne rounded-full blur-2xl animate-pulse" />
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
  );
}
