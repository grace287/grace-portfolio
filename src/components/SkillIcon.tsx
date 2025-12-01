'use client';

interface SkillIconProps {
  skill: string;
}

export const SkillIcon = ({ skill }: SkillIconProps) => {
  const getIcon = (skillName: string) => {
    const normalizedSkill = skillName.toLowerCase();
    
    // Frontend Frameworks & Libraries
    if (normalizedSkill.includes('next')) return '⚡';
    if (normalizedSkill.includes('react')) return '⚛️';
    if (normalizedSkill.includes('flutter')) return '🦋';
    if (normalizedSkill.includes('vue')) return '💚';
    if (normalizedSkill.includes('angular')) return '🅰️';
    
    // Backend & API
    if (normalizedSkill.includes('django')) return '🐍';
    if (normalizedSkill.includes('fastapi')) return '🚀';
    if (normalizedSkill.includes('node')) return '💻';
    if (normalizedSkill.includes('express')) return '🌐';
    if (normalizedSkill.includes('spring')) return '🌱';
    
    // Databases
    if (normalizedSkill.includes('postgresql') || normalizedSkill.includes('postgres')) return '🐘';
    if (normalizedSkill.includes('mongodb')) return '🍃';
    if (normalizedSkill.includes('mysql')) return '🗄️';
    if (normalizedSkill.includes('supabase')) return '⚡';
    if (normalizedSkill.includes('firebase')) return '🔥';
    
    // Cloud & Storage
    if (normalizedSkill.includes('aws') || normalizedSkill.includes('s3')) return '☁️';
    if (normalizedSkill.includes('gcp') || normalizedSkill.includes('google')) return '🌐';
    if (normalizedSkill.includes('vercel')) return '▲';
    if (normalizedSkill.includes('netlify')) return '🌊';
    
    // AI & ML
    if (normalizedSkill.includes('ai') || normalizedSkill.includes('ml') || normalizedSkill.includes('chatgpt')) return '🤖';
    if (normalizedSkill.includes('openai')) return '🧠';
    if (normalizedSkill.includes('tensorflow')) return '🔬';
    if (normalizedSkill.includes('pytorch')) return '🔥';
    
    // Languages
    if (normalizedSkill.includes('typescript') || normalizedSkill.includes('ts')) return '🏷️';
    if (normalizedSkill.includes('javascript') || normalizedSkill.includes('js')) return '🟨';
    if (normalizedSkill.includes('python')) return '🐍';
    if (normalizedSkill.includes('dart')) return '🎯';
    if (normalizedSkill.includes('java')) return '☕';
    if (normalizedSkill.includes('kotlin')) return '🎨';
    if (normalizedSkill.includes('swift')) return '🦉';
    
    // Mobile
    if (normalizedSkill.includes('ios')) return '📱';
    if (normalizedSkill.includes('android')) return '🤖';
    if (normalizedSkill.includes('react native')) return '📱';
    
    // Architecture & Patterns
    if (normalizedSkill.includes('clean architecture')) return '🏗️';
    if (normalizedSkill.includes('mvvm')) return '🏛️';
    if (normalizedSkill.includes('mvc')) return '🏗️';
    
    // Tools & Others
    if (normalizedSkill.includes('git')) return '📝';
    if (normalizedSkill.includes('docker')) return '🐳';
    if (normalizedSkill.includes('kubernetes')) return '⚙️';
    if (normalizedSkill.includes('figma')) return '🎨';
    if (normalizedSkill.includes('notion')) return '📝';
    
    // Default icon for unknown skills
    return '💎';
  };

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[linear-gradient(135deg,_#F7D7E0_0%,_#D8C8FF_100%)] text-grace-wine rounded-full text-sm font-inter font-medium border border-grace-wine/10 hover:border-grace-wine/30 transition-colors duration-200 hover:scale-105 transform">
      <span className="text-base">{getIcon(skill)}</span>
      <span>{skill}</span>
    </span>
  );
};