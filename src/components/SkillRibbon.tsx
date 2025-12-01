export const SkillRibbon = () => {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Flutter', 'Django', 'FastAPI', 
    'PostgreSQL', 'Supabase', 'Firebase', 'AWS', 'Docker', 'Git',
    'Tailwind CSS', 'Python', 'JavaScript', 'Node.js', 'MongoDB'
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="relative">
        
        {/* Animated Skill Tags */}
        <div className="flex animate-marquee space-x-6">
          {/* Duplicate the skills array to create seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-white/50 shadow-sm"
            >
              <span className="text-gray-800 font-medium whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-blue-50 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-pink-50 to-transparent pointer-events-none" />
      </div>
      

    </section>
  );
};