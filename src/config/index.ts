import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Vincent Achy — Développeur Front-End",
  author: "Vincent Achy",
  description:
    "Développeur Front-End basé à Paris, je me suis spécialisé dans la création d’interfaces utilisateur et le développement d’applications web performantes et intuitives.",
  lang: "en",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Vincent Achy",
    specialty: "Développeur Front-End",
    summary: [
      "Développeur Front-End basé à Paris, je me suis spécialisé dans la création d’interfaces utilisateur et le développement d’applications web performantes et intuitives.",
      'Fort de quatre années d’expérience avec des technologies telles que <span class="text-custom1">JavaScript, Svelte, React, SCSS, Tailwind CSS, TypeScript et Node.js</span>, j’allie technique et créativité pour concevoir des solutions adaptées aux utilisateurs.',

      "Passionné par les nouveaux défis, je suis prêt à mettre mes compétences au service de projets web innovants.",
    ],
  },
  experience: [
    {
      company: "Zalmart",
      position: "Lead Android Developer",
      startDate: "May 2018",
      endDate: "Sept 2020",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
      ],
    },
  ],
  projects: [
    {
      name: "FindMovies",
      summary: [
        "Une application pour découvrir des films populaires avec filtres par genre et année.",
        "React, Next.js, Chakra UI, TypeScript, TMDb API, Tailwind CSS",
      ],
      linkPreview: "https://findmovies-rho.vercel.app/",
      linkSource: "https://github.com/manda9988/bestMoviesV2",
      image: "/movies.png",
    },
    {
      name: "BlogWave",
      summary: [
        "Un blog généraliste et réactif pour partager des articles techniques et personnels.",
        "Astro, Tailwind CSS, React et Tailwind Bootstrap Grid.",
      ],
      linkPreview: "https://blog-vincent-achy.vercel.app/",
      linkSource: "https://github.com/manda9988/BlogV3",
      image: "/blog.png",
    },
    {
      name: "Ams-Architects",
      summary: [
        "Un site présentant les divers travaux d'une agence d'architecture.",
        "Svelte, Vite, SCSS, TypeScript, Node.js, Express",
      ],
      linkPreview: "https://ams-architects.vercel.app/",
      linkSource: "https://github.com/manda9988/mattArchi",
      image: "/archi2.png",
    },
  ],
  contact: {
    email: "vincent.achy@gmail.com",
    links: [
      { label: "Curriculum vitae", url: "/cv-vincent-achy.pdf" },
      { label: "GitHub", url: "https://github.com/manda9988" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/vincent-achy-1704421a9/",
      },
    ],
  },
};
