// src/app/page.tsx
import Navbar from '@/ui/Navbar';
import HomeSection from '@/features/Home/HomeSection';
import AboutSection from '@/features/About/AboutSection';
import ProjectsSection from '@/features/Projects/ProjectsSection';
import ExperienceSection from '@/features/Experience/ExperienceSection';
import ResearchSection from '@/features/Research/ResearchSection';
import SkillsSection from '@/features/Skills/SkillsSection';
import ContentSection from '@/features/Content/ContentSection';
import CVSection from '@/features/CV/CVSection';
import ContactSection from '@/features/Contact/ContactSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResearchSection />
        <SkillsSection />
        <ContentSection />
        <ContactSection />
      </div>
    </main>
  );
}