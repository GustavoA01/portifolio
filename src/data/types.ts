export type ProjectHighlight = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  about: string;
  problem: string;
  solution: string;
  note?: string;
  iconUrl: string;
  href: string;
  repo: string;
  demoVideoUrl?: string;
  youtubeUrl?: string;
  accent: string;
  highlights: ProjectHighlight[];
  features: string[];
  integrations: string[];
};
