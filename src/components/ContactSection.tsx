import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'Email', icon: Mail, url: 'mailto:email@example.com' },
];

export function ContactSection() {
  return (
    <section id="contact">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          <span className="text-primary">//</span> Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="bg-card/50 border-border p-8 text-left">
            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." className="bg-background/50" />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary-hover">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col items-center md:items-start gap-6 text-left">
            <p className="text-lg text-foreground/80">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
            </p>
            <div className="flex items-center gap-6">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="w-8 h-8 text-foreground/70 hover:text-primary glow-primary-hover transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
