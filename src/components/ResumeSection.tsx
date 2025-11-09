import type { TimelineEvent } from "@/lib/types";
import { Button } from "./ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const experience: TimelineEvent[] = [
  {
    date: '2021 - Present',
    title: 'Senior Software Engineer',
    subtitle: 'Tech Innovators Inc.',
    description: 'Led development of a new SaaS platform using React and Node.js, improving performance by 30%. Mentored junior developers and established CI/CD pipelines.'
  },
  {
    date: '2019 - 2021',
    title: 'Frontend Developer',
    subtitle: 'Digital Solutions Co.',
    description: 'Developed and maintained responsive user interfaces for e-commerce clients. Collaborated with UI/UX designers to implement pixel-perfect designs.'
  }
];

const education: TimelineEvent[] = [
  {
    date: '2015 - 2019',
    title: 'B.Sc. in Computer Science',
    subtitle: 'University of Technology',
    description: 'Graduated with honors. Focused on algorithms, data structures, and artificial intelligence. President of the coding club.'
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
          <span className="text-primary">//</span> Career & Education
        </h2>
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

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-left">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Briefcase className="text-accent" /> Experience</h3>
            <div className="relative">
              {experience.map(event => <TimelineItem key={event.title} event={event} icon={Briefcase} />)}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><GraduationCap className="text-accent" /> Education</h3>
            <div className="relative">
              {education.map(event => <TimelineItem key={event.title} event={event} icon={GraduationCap} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
