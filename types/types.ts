export interface ProjectShowcaseScreen {
  title: string;
  description?: string;
  imageUrl: string;
  alt?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline?: string;
  category?: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  showcaseScreens?: ProjectShowcaseScreen[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  // Case Study Content
  overview: string[];
  whatIBuilt: string[];
  engineering: string[];
  outcome: string;
  status: string;
}
