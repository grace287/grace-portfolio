'use client';
import { useState } from 'react';

export const SkillRibbon = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [clickedSkill, setClickedSkill] = useState<string | null>(null);

  const skills = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'Next.js', icon: '⚡', color: 'from-gray-700 to-black' },
    { name: 'TypeScript', icon: '🏷️', color: 'from-blue-500 to-blue-700' },
    { name: 'Flutter', icon: '🦋', color: 'from-cyan-400 to-blue-500' },
    { name: 'Django', icon: '🐍', color: 'from-green-600 to-green-800' },
    { name: 'FastAPI', icon: '🚀', color: 'from-teal-400 to-cyan-600' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-700' },
    { name: 'Supabase', icon: '⚡', color: 'from-green-400 to-emerald-600' },
    { name: 'Firebase', icon: '🔥', color: 'from-orange-400 to-red-500' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-600' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-cyan-500' },
    { name: 'Git', icon: '📝', color: 'from-red-500 to-orange-600' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-blue-500' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-green-600' },
    { name: 'JavaScript', icon: '🟨', color: 'from-yellow-300 to-yellow-600' },
    { name: 'Node.js', icon: '💻', color: 'from-green-500 to-green-700' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-400 to-green-600' },
    { name: 'AI/ML', icon: '🤖', color: 'from-purple-500 to-pink-600' },
    { name: 'Figma', icon: '🎨', color: 'from-purple-400 to-pink-500' },
    { name: 'Vercel', icon: '▲', color: 'from-gray-800 to-black' }
  ];

  return (
    <section className="py-16 bg-linear-to-r from-grace-rose/20 via-grace-lavender/20 to-grace-champagne/20 overflow-hidden">
      <div className="relative">
        
        {/* Animated Skill Tags */}
        <div className="flex animate-marquee space-x-6 hover:animation-paused">
          {/* Duplicate the skills array to create seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={`shrink-0 px-6 py-3 rounded-full border transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-1 active:scale-95 ${
                hoveredSkill === skill.name 
                  ? `bg-gradient-to-r ${skill.color} text-white border-transparent shadow-lg` 
                  : clickedSkill === skill.name
                  ? `bg-gradient-to-r ${skill.color} text-white border-transparent shadow-md`
                  : 'bg-white/80 backdrop-blur-sm border-grace-wine/10 shadow-grace hover:border-grace-wine/30'
              }`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => setClickedSkill(clickedSkill === skill.name ? null : skill.name)}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg transform transition-transform duration-200 hover:rotate-12">
                  {skill.icon}
                </span>
                <span className={`font-pretendard font-medium whitespace-nowrap transition-colors duration-200 ${
                  hoveredSkill === skill.name || clickedSkill === skill.name 
                    ? 'text-white' 
                    : 'text-grace-text'
                }`}>
                  {skill.name}
                </span>
              </div>
              
              {/* Ripple Effect on Click */}
              {clickedSkill === skill.name && (
                <div className="absolute inset-0 rounded-full bg-white/30 animate-ping pointer-events-none" />
              )}
            </div>
          ))}
        </div>
        
        {/* Grace Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-grace-rose/20 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-grace-champagne/20 to-transparent pointer-events-none" />
        
        {/* Interactive Tooltip */}
        {hoveredSkill && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-grace-wine/90 text-white px-4 py-2 rounded-lg font-pretendard text-sm backdrop-blur-sm border border-white/20">
            🎯 {hoveredSkill}에 대해 더 알아보세요!
          </div>
        )}
      </div>
    </section>
  );
};