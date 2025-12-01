export const AboutMe = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-grace-rose/10 via-white to-grace-lavender/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-20 h-0.5 bg-gradient-to-r from-grace-wine to-grace-gold mx-auto mb-6"></div>
          <h2 className="text-4xl font-pretendard font-bold text-grace-text mb-4">About Me</h2>
          <p className="text-grace-secondary font-inter">끊임없이 성장하는 개발자</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-rose-200 via-purple-200 to-indigo-200 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <div className="flex items-center justify-center h-full text-gray-500">
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-stack Developer</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                웹과 모바일 애플리케이션 개발에 열정을 가진 풀스택 개발자입니다. 
                사용자 경험을 중시하며, 혁신적인 기술을 통해 실용적인 솔루션을 만들어나가고 있습니다.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Frontend</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>React / Next.js</li>
                  <li>Flutter</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Backend</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Django / FastAPI</li>
                  <li>PostgreSQL</li>
                  <li>Supabase</li>
                  <li>AWS / Docker</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                🎯 Problem Solver
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                🚀 Fast Learner
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                💡 Creative Thinker
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};