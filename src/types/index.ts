export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  resumeUrl?: string;
}

export interface AboutMe {
  story: string;
  philosophy: string[];
}

export interface Technology {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  percentage: number;
}

export interface Skill {
  category: string;
  icon: string;
  technologies: Technology[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  results: string[];
  link?: string;
  github?: string;
  image?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  achievements?: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AnimationConfig {
  duration: number;
  delay: number;
  ease: string;
}

export interface ScrollProgress {
  scrollY: number;
  scrollPercent: number;
}