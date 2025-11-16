export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  gif?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface QuickLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
