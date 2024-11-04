import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Vincent Achy — Développeur Front-End",
  author: "Vincent Achy",
  description:
    "Développeur Front-End basé à Paris, spécialisé dans la création d’interfaces utilisateur et le développement d’applications web performantes et intuitives.",
  lang: "en",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Vincent Achy",
    specialty: "Développeur Front-End",
    summary: [
      "Développeur Front-End basé à Paris, spécialisé dans la création d’interfaces utilisateur et le développement d’applications web performantes et intuitives.",
      'Avec quatre années d’expérience sur des technologies comme <span class="text-custom1">JavaScript, Svelte, React, SCSS, Tailwind CSS, TypeScript et Node.js</span>, j’allie technique et innovation pour concevoir des solutions adaptées aux utilisateurs.',

      "Passionné par les nouveaux défis, je suis prêt à mettre mes compétences au service de vos projets web.",
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
      name: "BestMovies",
      summary: [
        "Une application pour découvrir des films populaires avec filtres par genre et année.",
        "React, Next.js, Chakra UI, TypeScript, TMDb API, Tailwind CSS.",
      ],
      linkPreview: "https://findmovies-va.vercel.app/",
      linkSource: "https://github.com/manda9988/bestMoviesV2",
      image: "/movies1.png",
    },
    {
      name: "Blog.",
      summary: [
        "Un blog généraliste et réactif pour partager des articles techniques et personnels.",
        "Astro, React, Tailwind CSS, et Bootstrap.",
      ],
      linkPreview: "https://blog-vincent-achy.vercel.app/",
      linkSource: "https://github.com/manda9988/BlogV3",
      image: "/blog.png",
    },
    {
      name: "Ams-Architects",
      summary: [
        "Un site présentant les divers travaux d'une agence d'architecture.",
        "Svelte, Vite, SCSS, TypeScript, Node.js, Express.",
      ],
      linkPreview: "https://ams-architects.vercel.app/",
      linkSource: "https://github.com/manda9988/mattArchi",
      image: "/archi.png",
    },
  ],
  contact: {
    email: "vincent.achy@gmail.com",
    links: [
      { label: "Curriculum vitae", url: "/cv-vincent-achy1.pdf" },
      { label: "GitHub", url: "https://github.com/manda9988" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/vincent-achy-1704421a9/",
      },
    ],
  },
};
