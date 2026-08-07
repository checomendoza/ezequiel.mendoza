/** @format */

import type { TypesProjectsTranslates } from "../constants/index.types";

const FULL24_URL =
  "https://play.google.com/store/apps/details?id=com.full24.app&hl=es_AR&gl=US";
const LUIGI_URL =
  "https://play.google.com/store/apps/details?id=com.luigi.app&hl=es_AR&gl=US&pli=1";
const RADIO_URL =
  "https://play.google.com/store/apps/details?id=com.radiobv.app&hl=es_AR&gl=US";
const AI_AGENTS_URL = "https://github.com/ezequielmendoza-dev/ai-agents";
const CONTROLFIT_URL = "https://controlfitsoftware.com/";
const AULIAULA_URL = "https://auliaula.app/";

export const FeaturedProjectsData: TypesProjectsTranslates = {
  en: [
    {
      id: 1,
      name: "ai-agents",
      subtitle:
        "Specification-Driven Development Framework for AI-assisted Software Engineering",
      category: "AI Engineering Framework · Open Source",
      status: "open-source",
      description:
        "A reusable open-source framework for AI-assisted software development based on Specification-Driven Development. It replaces chat-only LLM workflows with a document-first process: documents are the source of truth and specialized agents transform knowledge into code.",
      highlights: [
        "Multi-agent software development workflow with specialized agent roles.",
        "Specification-driven development: every feature is specified and validated before code.",
        "Document-driven architecture with persistent, reproducible context.",
        "AI IDE integration for Cursor, Windsurf, Claude Code, Cline and GitHub Copilot.",
        "Developer productivity automation with setup and validation tooling.",
      ],
      technologies: [
        "Markdown",
        "Bash",
        "Cursor",
        "Windsurf",
        "Claude Code",
        "GitHub Copilot",
      ],
      images: [],
      links: [{ label: "GitHub", url: AI_AGENTS_URL }],
    },
    {
      id: 2,
      name: "ControlFit",
      category: "Production SaaS Platform",
      status: "production",
      description:
        "A multi-tenant SaaS platform used by gyms to run their daily operations.",
      highlights: [
        "Member management, payments, routines, attendance and reservations.",
        "Web admin panel plus mobile apps built with React Native and Capacitor.",
        "Multi-tenant architecture on PostgreSQL and Google Cloud.",
      ],
      technologies: [
        "React",
        "Next.js",
        "React Native",
        "TypeScript",
        "PostgreSQL",
        "Google Cloud",
      ],
      images: [],
      links: [{ label: "Website", url: CONTROLFIT_URL }],
    },
    {
      id: 3,
      name: "Auliaula",
      category: "AI SaaS Product",
      status: "production",
      description:
        "An AI-powered assistant for teachers that generates educational content with OpenAI.",
      highlights: [
        "Generates activities, questions, text rewrites and lesson plans.",
        "Content library and freemium model with MercadoPago and Lemon Squeezy payments.",
        "Admin panel, analytics and rate limiting.",
      ],
      technologies: [
        "Next.js App Router",
        "React",
        "TypeScript",
        "Tailwind",
        "Supabase",
        "PostgreSQL",
        "OpenAI API",
      ],
      images: [],
      links: [{ label: "Website", url: AULIAULA_URL }],
    },
    {
      id: 4,
      name: "Content Wizard AI",
      category: "AI Experiment · Personal Project",
      status: "experiment",
      description:
        "Exploring generative AI applications with a content generation tool powered by LLMs.",
      highlights: [
        "Integration with Gemini and OpenAI APIs.",
        "Prompt engineering for structured, reusable content workflows.",
        "AI-assisted flows for drafting and editing content.",
      ],
      technologies: ["OpenAI API", "Gemini API", "React", "TypeScript"],
      images: [],
      links: [],
    },
    {
      id: 5,
      name: "CityVoice",
      category: "Product Prototype",
      status: "prototype",
      description:
        "A citizen participation platform built as a proof of concept.",
      highlights: [
        "Citizen reports, proposals, voting and follow-up.",
        "PWA for mobile access.",
        "Prototype developed to validate the product concept.",
      ],
      technologies: ["Next.js", "React", "TypeScript"],
      images: [],
      links: [],
    },
  ],
  es: [
    {
      id: 1,
      name: "ai-agents",
      subtitle:
        "Framework de desarrollo guiado por especificaciones para ingeniería de software asistida por IA",
      category: "Framework de Ingeniería IA · Open Source",
      status: "open-source",
      description:
        "Un framework open-source reutilizable para desarrollo de software asistido por IA, basado en Specification-Driven Development. Reemplaza los workflows centrados solo en conversaciones con LLMs por un proceso document-first: los documentos son la fuente de verdad y los agentes especializados transforman el conocimiento en código.",
      highlights: [
        "Workflow de desarrollo de software multi-agente con roles especializados.",
        "Desarrollo guiado por especificaciones: cada feature se especifica y valida antes del código.",
        "Arquitectura document-driven con contexto persistente y reproducible.",
        "Integración con IDEs de IA: Cursor, Windsurf, Claude Code, Cline y GitHub Copilot.",
        "Automatización de productividad con tooling de setup y validación.",
      ],
      technologies: [
        "Markdown",
        "Bash",
        "Cursor",
        "Windsurf",
        "Claude Code",
        "GitHub Copilot",
      ],
      images: [],
      links: [{ label: "GitHub", url: AI_AGENTS_URL }],
    },
    {
      id: 2,
      name: "ControlFit",
      category: "Plataforma SaaS en producción",
      status: "production",
      description:
        "Plataforma SaaS multi-tenant utilizada por gimnasios para gestionar su operación diaria.",
      highlights: [
        "Gestión de socios, pagos, rutinas, asistencias y reservas.",
        "Panel de administración web + apps mobile con React Native y Capacitor.",
        "Arquitectura multi-tenant sobre PostgreSQL y Google Cloud.",
      ],
      technologies: [
        "React",
        "Next.js",
        "React Native",
        "TypeScript",
        "PostgreSQL",
        "Google Cloud",
      ],
      images: [],
      links: [{ label: "Sitio web", url: CONTROLFIT_URL }],
    },
    {
      id: 3,
      name: "Auliaula",
      category: "Producto SaaS con IA",
      status: "production",
      description:
        "Asistente virtual con IA para docentes que genera contenido educativo usando OpenAI.",
      highlights: [
        "Generación de actividades, preguntas, reescritura de textos y lesson plans.",
        "Biblioteca de contenidos y modelo freemium con pagos en MercadoPago y Lemon Squeezy.",
        "Panel administrativo, analytics y rate limiting.",
      ],
      technologies: [
        "Next.js App Router",
        "React",
        "TypeScript",
        "Tailwind",
        "Supabase",
        "PostgreSQL",
        "OpenAI API",
      ],
      images: [],
      links: [{ label: "Sitio web", url: AULIAULA_URL }],
    },
    {
      id: 4,
      name: "Content Wizard AI",
      category: "Experimento IA · Proyecto personal",
      status: "experiment",
      description:
        "Exploración de aplicaciones de IA generativa: una herramienta de generación de contenido impulsada por LLMs.",
      highlights: [
        "Integración con las APIs de Gemini y OpenAI.",
        "Prompt engineering para flujos de contenido estructurados y reutilizables.",
        "Flujos asistidos por IA para redacción y edición de contenido.",
      ],
      technologies: ["OpenAI API", "Gemini API", "React", "TypeScript"],
      images: [],
      links: [],
    },
    {
      id: 5,
      name: "CityVoice",
      category: "Prototipo de producto",
      status: "prototype",
      description:
        "Plataforma de participación ciudadana desarrollada como prueba de concepto.",
      highlights: [
        "Reportes ciudadanos, propuestas, votaciones y seguimiento.",
        "PWA para acceso mobile.",
        "Prototipo desarrollado para validar el concepto de producto.",
      ],
      technologies: ["Next.js", "React", "TypeScript"],
      images: [],
      links: [],
    },
  ],
};

export const MoreProjectsData: TypesProjectsTranslates = {
  en: [
    {
      id: 1,
      name: "Full24",
      category: "Mobile App · Production",
      status: "production",
      description:
        "Grocery store app with purchases, promotions and notifications.",
      highlights: [],
      technologies: ["React Native", "TypeScript", "NativeBase"],
      images: ["/images/webp/full24_01.webp"],
      links: [{ label: "Google Play", url: FULL24_URL }],
    },
    {
      id: 2,
      name: "Luigi Heladería",
      category: "Mobile App · Production",
      status: "production",
      description:
        "Ice cream shop app with promotions and discount coupons.",
      highlights: [],
      technologies: ["React Native", "TypeScript", "Styled Components"],
      images: ["/images/webp/luigi_01.webp"],
      links: [{ label: "Google Play", url: LUIGI_URL }],
    },
    {
      id: 3,
      name: "Radio Bella Vista",
      category: "Mobile App · Production",
      status: "production",
      description:
        "Radio streaming and news app with chat and notifications.",
      highlights: [],
      technologies: ["React Native", "JavaScript", "Styled Components"],
      images: ["/images/webp/radiobellavista_01.webp"],
      links: [{ label: "Google Play", url: RADIO_URL }],
    },
    {
      id: 4,
      name: "Audec",
      category: "Web App · Production",
      status: "production",
      description:
        "Management software for vehicle appraisal and expert reports.",
      highlights: [],
      technologies: ["Next.js", "Tailwind", "TypeScript"],
      images: ["/images/webp/audec_01.webp"],
      links: [],
    },
  ],
  es: [
    {
      id: 1,
      name: "Full24",
      category: "App mobile · Producción",
      status: "production",
      description:
        "App de tienda de comestibles con compras, promociones y notificaciones.",
      highlights: [],
      technologies: ["React Native", "TypeScript", "NativeBase"],
      images: ["/images/webp/full24_01.webp"],
      links: [{ label: "Google Play", url: FULL24_URL }],
    },
    {
      id: 2,
      name: "Luigi Heladería",
      category: "App mobile · Producción",
      status: "production",
      description:
        "App de heladería con promociones y cupones de descuento.",
      highlights: [],
      technologies: ["React Native", "TypeScript", "Styled Components"],
      images: ["/images/webp/luigi_01.webp"],
      links: [{ label: "Google Play", url: LUIGI_URL }],
    },
    {
      id: 3,
      name: "Radio Bella Vista",
      category: "App mobile · Producción",
      status: "production",
      description:
        "App de streaming de radio y noticias con chat y notificaciones.",
      highlights: [],
      technologies: ["React Native", "JavaScript", "Styled Components"],
      images: ["/images/webp/radiobellavista_01.webp"],
      links: [{ label: "Google Play", url: RADIO_URL }],
    },
    {
      id: 4,
      name: "Audec",
      category: "Web app · Producción",
      status: "production",
      description:
        "Software de gestión de peritajes y tasación de vehículos.",
      highlights: [],
      technologies: ["Next.js", "Tailwind", "TypeScript"],
      images: ["/images/webp/audec_01.webp"],
      links: [],
    },
  ],
};
