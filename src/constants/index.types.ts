/** @format */

import type { ImageMetadata } from "astro";

export type TypesProjectStatus =
  | "production"
  | "experiment"
  | "prototype"
  | "open-source";

export type TypesProjects = {
  id: number;
  name: string;
  subtitle?: string;
  category: string;
  status: TypesProjectStatus;
  description: string;
  highlights: string[];
  technologies: string[];
  images: ImageMetadata[];
  links: { label: string; url: string | null }[];
};

export type TypesExperiences = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
};

export type TypesProjectsTranslates = {
  es: TypesProjects[];
  en: TypesProjects[];
};

export type TypesExperiencesTranslates = {
  es: TypesExperiences[];
  en: TypesExperiences[];
};

export type TypesSkillsGroup = {
  title: string;
  skills: string[];
};
