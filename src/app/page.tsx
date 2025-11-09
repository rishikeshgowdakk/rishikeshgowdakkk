import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { GithubVisualizer } from "@/components/GithubVisualizer";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ResumeSection } from "@/components/ResumeSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <GithubVisualizer />
    </div>
  );
}
