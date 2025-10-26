import homeData from "@/data/home.json";
import certificatesData from "@/data/certificates.json";
import projectsData from "@/data/projects.json";
import articlesData from "@/data/blogs.json";
import { devIcons } from "@/constants/icons";
import {
  Briefcase,
  Users,
  Code,
  Heart,
  Code2,
  Database,
  Cloud,
  Wrench,
  Shield,
  LucideIcon,
} from "lucide-react";

export const journeyIconMap: Record<string, LucideIcon> = {
  Briefcase,
  Users,
  Code,
  Heart,
};

export const categoryIconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  Cloud,
  Wrench,
  Shield,
};

import type {
  JourneyItem,
  TechStackItem,
  TechCategory,
  Experience,
  Certificate,
  Project,
  BlogPost,
} from "@/types/data";

export const journey: JourneyItem[] = homeData.journey.map((item) => ({
  ...item,
  icon: journeyIconMap[item.icon],
}));

export const currentTechStack: TechStackItem[] = homeData.currentTechStack.map(
  (item) => ({
    ...item,
    icon: devIcons[item.icon],
  })
);

export const techCategories: TechCategory[] = homeData.techCategories.map(
  (category) => ({
    ...category,
    icon: categoryIconMap[category.icon],
  })
);

export const experiences: Experience[] = homeData.experiences;

export const dictCertificates: Certificate[] =
  certificatesData.dictCertificates;

export const sololearnCertificates: Certificate[] =
  certificatesData.sololearnCertificates;

export const freeCodeCampCertificates: Certificate[] =
  certificatesData.freeCodeCampCertificates;

export const udemyCertificates: Certificate[] =
  certificatesData.udemyCertificates;

export const projects: Project[] = projectsData;

export const blogPosts: BlogPost[] = articlesData;
