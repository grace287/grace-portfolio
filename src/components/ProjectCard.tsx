import Link from 'next/link';
import { SkillIcon } from './SkillIcon';

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  link: string;
}

export const ProjectCard = ({ title, description, skills, link }: ProjectCardProps) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-grace hover:shadow-grace-lg transition-all duration-500 hover:-translate-y-2 border border-grace-rose/20">
      <div className="grid md:grid-cols-5 gap-8 p-8">
        
        {/* Content */}
        <div className="md:col-span-3 flex flex-col justify-center space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-grace-wine rounded-full"></div>
              <div className="h-[1px] flex-1 bg-[linear-gradient(90deg,_#7C3A53_0%,_#D5C27F_50%,_transparent_100%)]"></div>
            </div>
            <h3 className="text-2xl md:text-3xl font-pretendard font-bold text-grace-text mb-4 group-hover:text-grace-wine transition-colors duration-300">{title}</h3>
            <p className="text-lg text-grace-secondary leading-relaxed font-inter">{description}</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <SkillIcon key={index} skill={skill} />
            ))}
          </div>
          
          <Link href={link} className="group/btn inline-flex items-center px-6 py-3 bg-grace-wine text-white rounded-xl hover:bg-grace-wine/90 transition-all duration-300 font-pretendard font-semibold shadow-grace hover:shadow-grace-lg self-start">
            자세히 보기
            <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
        
        {/* Visual Element */}
        <div className="md:col-span-2 relative">
          <div className="relative h-48 md:h-80 rounded-2xl overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,_#F7D7E0_0%,_#D8C8FF_50%,_#F7F4DD_100%)] opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(124,58,83,0.1)_0%,_transparent_50%)]" />
            
            {/* Floating Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 border-4 border-grace-wine/20 rounded-full animate-pulse" />
                <div className="absolute top-4 left-4 w-24 h-24 bg-grace-wine/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-grace">
                  <span className="text-2xl">💼</span>
                </div>
              </div>
            </div>
            
            {/* Coming Soon Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-grace-wine/90 text-white text-xs font-inter font-medium rounded-full">
              스크린샷 추가 예정
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};