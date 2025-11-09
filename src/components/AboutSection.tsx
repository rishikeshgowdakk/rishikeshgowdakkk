import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  return (
    <section id="about">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          <span className="text-primary">//</span> About Me
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-12">
          A passionate software engineer with a knack for building beautiful, functional, and scalable web applications.
        </p>
        <Card className="bg-card/50 border-2 border-dashed border-accent/30 p-8 text-left backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="font-code text-base text-foreground/90 space-y-2">
              <p><span className="text-purple-400">const</span> <span className="text-primary">developer</span> = &#123;</p>
              <p className="ml-4">  name: <span className="text-green-400">'Rishikesh Gowda K K'</span>,</p>
              <p className="ml-4">  focus: [<span className="text-green-400">'Frontend'</span>, <span className="text-green-400">'Backend'</span>, <span className="text-green-400">'DevOps'</span>],</p>
              <p className="ml-4">  passion: <span className="text-green-400">'Crafting innovative solutions and elegant code.'</span>,</p>
              <p className="ml-4">  learning: <span className="text-green-400">'Always something new...'</span>,</p>
              <p>&#125;;</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
