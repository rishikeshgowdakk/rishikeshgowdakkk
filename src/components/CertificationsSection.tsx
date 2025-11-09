import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {certifications.map((item) => (
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
