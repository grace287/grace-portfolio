'use client';
import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => (
  <section id="projects" className="py-24 scroll-mt-20">
    <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

    <div className="space-y-20">

      <ProjectCard
        title="WineNow 2.0"
        description="AI MBTI · Tasting Note · Canvas Export · Social Sharing"
        skills={["Next.js", "Django/FastAPI", "PostgreSQL", "S3", "AI"]}
        link="/projects/winenow"
      />

      <ProjectCard
        title="Maple"
        description="Flutter Mobile App · Schedule API · Widgets · Push Notifications"
        skills={["Flutter", "Supabase", "Firebase", "Clean Architecture"]}
        link="/projects/maple"
      />

      <ProjectCard
        title="GraceVoca"
        description="Multi-language Vocabulary · SRS · TTS · AI Recommendations"
        skills={["Flutter", "FastAPI", "Supabase", "AI", "Firebase"]}
        link="/projects/gracevoca"
      />

    </div>
  </section>
);
