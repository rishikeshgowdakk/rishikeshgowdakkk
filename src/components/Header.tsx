'use client';

import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Menu, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinkItems = () => (
    navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors glow-primary-hover"
        onClick={() => setMobileNavOpen(false)}
      >
        {link.label}
      </a>
    ))
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg">
          <Code className="h-6 w-6 text-primary glow-primary" />
          <span>Rishikesh</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <NavLinkItems />
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col items-center justify-center h-full gap-8">
                <NavLinkItems />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
