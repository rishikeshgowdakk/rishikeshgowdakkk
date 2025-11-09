import { Star, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "First place in the annual university Code-a-Thon, developing a solution for local community engagement.",
  },
  {
    icon: Star,
    title: "Dean's List Honoree",
    description: "Achieved academic excellence by maintaining a top-tier GPA for three consecutive semesters.",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-4xl text-center px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          <span className="text-primary">//</span> Achievements
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl mx-auto"
        >
          <CarouselContent>
            {achievements.map((item) => (
              <CarouselItem key={item.title} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors duration-300 flex flex-col items-center text-center p-6 h-full">
                    <CardHeader className="p-2">
                      <div className="p-4 bg-primary/10 rounded-full inline-flex mb-4 glow-primary-hover">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 text-sm text-foreground/80 flex-grow">
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