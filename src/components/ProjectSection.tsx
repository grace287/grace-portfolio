'use client';
import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => (
  <section id="projects" className="py-24">
    <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

    <div className="space-y-20">

      <ProjectCard
        title="WineNow 2.0"
        description="AI MBTI · Tasting Note · Canvas Export · Social Sharing"
        skills={["Next.js", "Django/FastAPI", "PostgreSQL", "S3", "AI"]}
        image="/grace-portfolio/images/winenow.png"
        link="/grace-portfolio/projects/winenow"
      />

      <ProjectCard
        title="Maple"
        description="Flutter Mobile App · Schedule API · Widgets · Push Notifications"
        skills={["Flutter", "Supabase", "Firebase", "Clean Architecture"]}
        image="/grace-portfolio/images/maple.png"
        link="/grace-portfolio/projects/maple"
      />

      <ProjectCard
        title="GraceVoca"
        description="Multi-language Vocabulary · SRS · TTS · AI Recommendations"
        skills={["Flutter", "FastAPI", "Supabase", "AI", "Firebase"]}
        image="/grace-portfolio/images/gracevoca.png"
        link="/grace-portfolio/projects/gracevoca"
      />

    </div>
  </section>
);
