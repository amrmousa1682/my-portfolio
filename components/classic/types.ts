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

export interface PortfolioData {
  heroName: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutText: string;
  experienceTitle: string;
  experienceItems: ExperienceItem[];
  skillsTitle: string;
  skillsCategories: SkillCategory[];
  projectsTitle: string;
  projectsItems: Project[];
  testimonialsTitle: string;
  testimonialsItems: Testimonial[];
  contactTitle: string;
  contactSubtitle: string;
  contactEmail: string;
  contactEmailValue: string;
  contactGithub: string;
  contactGithubValue: string;
  contactLinkedin: string;
  contactLinkedinValue: string;
  headerBackButton: string;
  headerModeLabel: string;
  footerDescription: string;
  footerQuickLinksTitle: string;
  footerQuickLinksItems: QuickLink[];
  footerSocialTitle: string;
  footerSocialItems: SocialLink[];
  footerCopyright: string;
  footerMadeWith: string;
}
