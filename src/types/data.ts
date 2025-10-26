import { LucideIcon } from "lucide-react";

export interface JourneyItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  url: string;
}

export interface Technology {
  name: string;
  level: number;
}

export interface TechCategory {
  category: string;
  icon: LucideIcon;
  color: string;
  technologies: Technology[];
}

export interface Experience {
  type: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Certificate {
  name: string;
  url: string;
  image: string;
}

interface ProjectDetails {
  challenge: string;
  solution: string;
  results: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
  published: boolean;
  image: string;
  thumbnail: string;
  details: ProjectDetails;
  features?: string[];
}

export interface BlogDetails {
  introduction: string;
  challenge: string;
  insights: string;
  conclusion: string;
}

interface ContentBlock {
  type: string | "paragraph" | "heading";
  text: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: ContentBlock[];
  date: string;
  readTime: string;
  category: string;
  published: boolean;
  featured: boolean;
  image: string;
  thumbnail: string;
}
