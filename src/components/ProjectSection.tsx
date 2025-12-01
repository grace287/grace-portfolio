'use client';
import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => (
  <section id="projects" className="py-24 scroll-mt-20">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

      {/* Main Projects */}
      <div className="space-y-20 mb-20">
        <ProjectCard
          title="WineNow 2.0"
          description="AI MBTI · Tasting Note · Canvas Export · Social Sharing"
          skills={["Next.js", "Django", "FastAPI", "PostgreSQL", "AWS S3", "ChatGPT AI"]}
          link="/projects/winenow"
        />

        <ProjectCard
          title="Maple"
          description="Flutter Mobile App · Schedule API · Widgets · Push Notifications"
          skills={["Flutter", "Dart", "Supabase", "Firebase", "Clean Architecture"]}
          link="/projects/maple"
        />

        <ProjectCard
          title="GraceVoca"
          description="Multi-language Vocabulary · SRS · TTS · AI Recommendations"
          skills={["Flutter", "FastAPI", "Python", "Supabase", "OpenAI", "Firebase"]}
          link="/projects/gracevoca"
        />
      </div>

      {/* Side Projects */}
      <div className="border-t border-grace-rose/20 pt-16">
        <h3 className="text-3xl font-bold mb-12 text-grace-wine">Side Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-grace-rose/20 hover:border-grace-wine/30 transition-all duration-300 hover:shadow-grace">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎨</span>
              <h4 className="text-xl font-bold text-grace-text">Grace Design System</h4>
            </div>
            <p className="text-grace-secondary mb-4">개인 브랜드를 위한 디자인 시스템 및 컴포넌트 라이브러리</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-grace-lavender/30 text-grace-wine rounded text-sm">🏷️ TypeScript</span>
              <span className="px-2 py-1 bg-grace-lavender/30 text-grace-wine rounded text-sm">⚛️ React</span>
              <span className="px-2 py-1 bg-grace-lavender/30 text-grace-wine rounded text-sm">🎨 Tailwind CSS</span>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-grace-rose/20 hover:border-grace-wine/30 transition-all duration-300 hover:shadow-grace">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📝</span>
              <h4 className="text-xl font-bold text-grace-text">Dev Blog Engine</h4>
            </div>
            <p className="text-grace-secondary mb-4">개발자를 위한 마크다운 기반 블로그 시스템</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-grace-lavender/30 text-grace-wine rounded text-sm">⚡ Next.js</span>
              <span className="px-2 py-1 bg-grace-lavender/30 text-grace-wine rounded text-sm">📝 MDX</span>
              <span className="px-2 py-1 bg-grace-lavender/30 text-grace-wine rounded text-sm">▲ Vercel</span>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-grace-rose/20 hover:border-grace-wine/30 transition-all duration-300 hover:shadow-grace">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🤖</span>
              <h4 className="text-xl font-bold text-grace-text">AI Chat Assistant</h4>
            </div>
            <p className="text-grace-secondary mb-4">개인 업무 효율성을 위한 맞춤형 AI 채팅 도구</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-grace-lavender/30 text-grace-wine rounded text-sm">🐍 Python</span>
              <span className="px-2 py-1 bg-grace-lavender/30 text-grace-wine rounded text-sm">🚀 FastAPI</span>
              <span className="px-2 py-1 bg-grace-lavender/30 text-grace-wine rounded text-sm">🧠 OpenAI</span>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-grace-rose/20 hover:border-grace-wine/30 transition-all duration-300 hover:shadow-grace">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📱</span>
              <h4 className="text-xl font-bold text-grace-text">Widget Collection</h4>
            </div>
            <p className="text-grace-secondary mb-4">iOS/Android 위젯 모음집 및 개발 도구</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-grace-lavender/30 text-grace-wine rounded text-sm">🦋 Flutter</span>
              <span className="px-2 py-1 bg-grace-lavender/30 text-grace-wine rounded text-sm">🎯 Dart</span>
              <span className="px-2 py-1 bg-grace-lavender/30 text-grace-wine rounded text-sm">📱 Widget Kit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
