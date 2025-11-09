import type { Project } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects: Project[] = [
  {
    title: 'Futuristic UI System',
    description: 'An advanced design system for building next-generation user interfaces with a focus on performance and aesthetics.',
    imageUrlId: 'projectOne',
    tech: ['React', 'TypeScript', 'Vite', 'Storybook'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI-Powered Data Visualizer',
    description: 'A tool that leverages machine learning to create intuitive and interactive visualizations from complex datasets.',
    imageUrlId: 'projectTwo',
    tech: ['Python', 'TensorFlow', 'D3.js', 'Flask'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Decentralized Social Network',
    description: 'A proof-of-concept social media platform built on blockchain technology, ensuring user privacy and data ownership.',
    imageUrlId: 'projectThree',
    tech: ['Solidity', 'Next.js', 'ethers.js', 'IPFS'],
    liveUrl: '#',
    githubUrl: '#',
  }
];

export function ProjectsSection() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section id="projects">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          <span className="text-primary">//</span> Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const imageData = getImage(project.imageUrlId);
            return (
              <Card key={project.title} className="bg-card/50 overflow-hidden group border-border hover:border-primary/50 transition-colors duration-300 flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={imageData.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle className="text-xl font-bold text-left">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-left text-sm text-foreground/80 flex-grow">
                  <p>{project.description}</p>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border border-primary/20">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="glow-primary-hover">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-primary transition-colors">
                        <Github className="mr-2 h-4 w-4" /> Source
                      </Button>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
