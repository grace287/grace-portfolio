import { ProjectSection } from "@/components/ProjectSection";
import { MiniCard } from "@/components/MiniCard";
import { AboutMe } from "@/components/AboutMe";
import { ContactSection } from "@/components/ContactSection";
import { SkillRibbon } from "@/components/SkillRibbon";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* Hero */}
      <section className="min-h-[650px] py-20 md:py-0 flex items-center">
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I'm Grace.<br />
              Full-stack Developer.
            </h1>
            <p className="text-lg md:text-xl mt-5 text-gray-600">
              Web · Mobile · AI · Design-driven Engineering
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
              <a href="#projects" className="px-6 py-3 bg-black text-white rounded-xl text-center hover:bg-gray-800 transition-colors">
                View Projects
              </a>
              <a href="/resume.pdf" className="px-6 py-3 border border-black rounded-xl text-center hover:bg-black hover:text-white transition-colors">
                Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center order-first md:order-last">
            <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-gradient-to-r from-rose-200 to-indigo-200 rounded-full opacity-70 blur-xl" />
          </div>

        </div>
      </section>

      <SkillRibbon />
      <ProjectSection />
      <MiniCard />
      <AboutMe />
      <ContactSection />

    </div>
  );
}
