export const SkillRibbon = () => {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Flutter', 'Django', 'FastAPI', 
    'PostgreSQL', 'Supabase', 'Firebase', 'AWS', 'Docker', 'Git',
    'Tailwind CSS', 'Python', 'JavaScript', 'Node.js', 'MongoDB'
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-grace-rose/20 via-grace-lavender/20 to-grace-champagne/20 overflow-hidden">
      <div className="relative">
        
        {/* Animated Skill Tags */}
        <div className="flex animate-marquee space-x-6 hover:animation-paused">
          {/* Duplicate the skills array to create seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="shrink-0 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-grace-wine/10 shadow-grace"
            >
              <span className="text-grace-text font-pretendard font-medium whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </div>
        
        {/* Grace Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-grace-rose/20 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-grace-champagne/20 to-transparent pointer-events-none" />
      </div>
      

    </section>
  );
};