import { AboutSection } from "@/components/AboutSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
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
      <AchievementsSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}
