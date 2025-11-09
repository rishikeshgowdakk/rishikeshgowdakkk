import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const certifications = [
  {
    icon: Award,
    title: "Cloud Practitioner Certified",
    description: "Certified by AWS, demonstrating foundational knowledge of cloud concepts and services.",
  },
  {
    icon: Award,
    title: "AI Infrastructure and Operations Fundamentals",
    description: "NVIDIA certified course. Grade Achieved: 96%",
  },
  {
    icon: Award,
    title: "Introduction to Artificial Intelligence (AI)",
    description: "Provider: IBM. Grade Achieved: 100%",
  },
  {
    icon: Award,
    title: "Introduction to Project Management",
    description: "Provider: IBM. Grade Achieved: 92.50%",
  },
  {
    icon: Award,
    title: "Introduction to Generative AI",
    description: "Provider: Google Cloud. Grade Achieved: 100%",
  },
  {
    icon: Award,
    title: "Generative AI Essentials: Overview and Impact",
    description: "Provider: University of Michigan. Grade Achieved: 100%",
  },
  {
    icon: Award,
    title: "The Bits and Bytes of Computer Networking",
    description: "Provider: Google. Grade Achieved: 97.20%",
  },
  {
    icon: Award,
    title: "Google AI Essentials",
    description: "Provider: Google. Grade Achieved: 98%",
  },
  {
    icon: Award,
    title: "Python for Data Science, AI & Development",
    description: "Provider: IBM. Grade Achieved: 93.12%",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-6xl text-center px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          <span className="text-primary">//</span> Certifications
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {certifications.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors duration-300 flex flex-col items-center text-center p-4 h-full">
                    <CardHeader className="p-2 items-center">
                      <div className="p-3 bg-primary/10 rounded-full inline-flex mb-3 glow-primary-hover">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-bold leading-tight">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 text-xs text-foreground/80 flex-grow">
                      <p>{item.description}</p>
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
