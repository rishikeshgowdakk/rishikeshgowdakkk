import { Award, Star, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "First place in the annual university Code-a-Thon, developing a solution for local community engagement.",
  },
  {
    icon: Award,
    title: "Cloud Practitioner Certified",
    description: "Certified by AWS, demonstrating foundational knowledge of cloud concepts and services.",
  },
  {
    icon: Star,
    title: "Dean's List Honoree",
    description: "Achieved academic excellence by maintaining a top-tier GPA for three consecutive semesters.",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          <span className="text-primary">//</span> Certifications & Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {achievements.map((item) => (
            <Card key={item.title} className="bg-card/50 border-border hover:border-primary/50 transition-colors duration-300 flex flex-col items-center text-center p-6">
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
          ))}
        </div>
      </div>
    </section>
  );
}