import type { TimelineEvent } from "@/lib/types";
import { Button } from "./ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const experience: TimelineEvent[] = [];

const education: TimelineEvent[] = [
  {
    date: '2023 - 2027',
    title: 'B.E in Computer Science and Engineering',
    subtitle: 'JSS Academy of Technical Education, Bangalore',
    description: 'Currently pursuing a Bachelor of Engineering with a focus on computer science fundamentals, software development, and problem-solving.'
  }
];

const TimelineItem = ({ event, icon: Icon }: { event: TimelineEvent; icon: React.ElementType }) => (
  <div className="relative pl-8 sm:pl-12 pb-12">
    <div className="absolute left-0 top-1.5 h-full w-0.5 bg-border"></div>
    <div className="absolute left-[-9px] top-1.5 p-1 bg-background rounded-full">
      <div className="w-4 h-4 rounded-full bg-primary glow-primary flex items-center justify-center">
        <Icon className="w-2 h-2 text-primary-foreground" />
      </div>
    </div>
    <p className="text-sm text-primary">{event.date}</p>
    <h4 className="font-bold text-lg mt-1">{event.title}</h4>
    <p className="text-md text-foreground/80 mb-2">{event.subtitle}</p>
    <p className="text-sm text-foreground/70">{event.description}</p>
  </div>
);

export function ResumeSection() {
  return (
    <section id="resume">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          <span className="text-primary">//</span> Education
        </h2>
        <div className="flex justify-center">
          <a href="/resume.pdf" download>
            <Button
              size="lg"
              className={cn(
                "mb-16 bg-primary/10 text-primary border border-primary rounded-full px-8 py-4 text-lg",
                "shadow-[0_0_15px] shadow-primary/30",
                "hover:bg-primary/20 hover:shadow-[0_0_25px] hover:shadow-primary/40 transition-all duration-300 group"
              )}
            >
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </Button>
          </a>
        </div>

        <div className="text-left max-w-2xl mx-auto">
          <div>
            <div className="relative">
              {education.map(event => <TimelineItem key={event.title} event={event} icon={GraduationCap} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}