import type { Skill } from "@/lib/types";
import { 
  Database,
  Terminal,
  Code,
  Binary,
  GitMerge,
  Network,
  Cpu,
  BookCopy
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

const skills: Skill[] = [
  { name: 'C++', icon: Code },
  { name: 'Java', icon: Code },
  { name: 'Python', icon: Code },
  { name: 'JavaScript', icon: Code },
  { name: 'React/Next.js', icon: Code },
  { name: 'Node.js', icon: Terminal },
  { name: 'Data Structures', icon: GitMerge },
  { name: 'Algorithms', icon: Binary },
  { name: 'Operating Systems', icon: Cpu },
  { name: 'Computer Networks', icon: Network },
  { name: 'OOP', icon: BookCopy },
  { name: 'Databases', icon: Database },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-6xl text-center px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          <span className="text-primary">//</span> My Tech Arsenal
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {skills.map((skill) => (
              <CarouselItem key={skill.name} className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                <div className="p-1 h-full">
                  <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors duration-300 flex flex-col items-center text-center p-4 h-full justify-center">
                    <CardContent className="p-1 flex flex-col items-center gap-3 group">
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse group-hover:animate-none"></div>
                        <div className="absolute inset-2 bg-background rounded-full"></div>
                        <skill.icon className="relative w-8 h-8 text-primary glow-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="font-semibold text-sm text-foreground/90">{skill.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
