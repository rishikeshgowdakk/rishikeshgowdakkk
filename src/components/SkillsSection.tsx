import type { Skill } from "@/lib/types";
import { 
  Dna,
  Database,
  Terminal,
  BrainCircuit,
  Boxes,
  Palette
} from "lucide-react";

const skills: Skill[] = [
  { name: 'JavaScript', icon: Dna },
  { name: 'React/Next.js', icon: Dna },
  { name: 'Node.js', icon: Terminal },
  { name: 'Python', icon: Dna },
  { name: 'Databases', icon: Database },
  { name: 'UI/UX Design', icon: Palette },
  { name: 'AI/ML', icon: BrainCircuit },
  { name: 'DevOps', icon: Boxes },
];

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          <span className="text-primary">//</span> My Tech Arsenal
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-4 group">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse group-hover:animate-none"></div>
                <div className="absolute inset-2 bg-background rounded-full"></div>
                <skill.icon className="relative w-12 h-12 text-primary glow-primary group-hover:scale-110 transition-transform" />
              </div>
              <p className="font-semibold text-lg text-foreground/90">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
