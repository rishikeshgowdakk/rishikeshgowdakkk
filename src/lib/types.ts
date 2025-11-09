export interface Project {
  title: string;
  description: string;
  imageUrlId: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  icon: React.ElementType;
}

export interface TimelineEvent {
  date: string;
  title: string;
  subtitle: string;
  description: string;
}
