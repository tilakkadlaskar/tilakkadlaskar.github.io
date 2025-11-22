export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  location: string;
  email: string;
  avatarUrl: string;
  socials: SocialLink[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}