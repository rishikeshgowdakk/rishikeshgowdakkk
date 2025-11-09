import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundParticles } from '@/components/BackgroundParticles';
import { Header } from '@/components/Header';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Rishikesh Gowda K K | Portfolio',
  description: 'Personal portfolio of Rishikesh Gowda K K, a software developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <BackgroundParticles />
        <Header />
        <main className="relative z-10">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
