export interface SiteConfig {
  title: string;
  description: string;
  lang: string;
  author: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  contact: ContactProps; // Mise à jour pour inclure contact
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string[];
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface ContactProps {
  email: string;
  links: { label: string; url: string }[];
}
