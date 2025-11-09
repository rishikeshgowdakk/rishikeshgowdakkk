'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const taglines = [
  "Full-Stack Developer",
  "React Enthusiast",
  "Node.js Expert",
  "Python Scripter",
  "Lifelong Learner"
];

export function HeroSection() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayedTagline, setDisplayedTagline] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentTagline = taglines[taglineIndex];
      if (isDeleting) {
        setDisplayedTagline(currentTagline.substring(0, displayedTagline.length - 1));
      } else {
        setDisplayedTagline(currentTagline.substring(0, displayedTagline.length + 1));
      }

      if (!isDeleting && displayedTagline === currentTagline) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedTagline === "") {
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(typingTimeout);
  }, [displayedTagline, isDeleting, taglineIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent">
          Rishikesh Gowda K K
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8">
          I'm a <span className="font-bold text-primary">{displayedTagline}</span>
          <span className="animate-ping">|</span>
        </p>
        <div className="flex justify-center">
          <a href="#about">
            <Button
              size="lg"
              className={cn(
                "bg-primary/10 text-primary border border-primary rounded-full px-8 py-4 text-lg",
                "shadow-[0_0_15px] shadow-primary/30",
                "hover:bg-primary/20 hover:shadow-[0_0_25px] hover:shadow-primary/40 transition-all duration-300 group"
              )}
            >
              Discover More <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
