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
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "Bankit",
      position: "Mobile Developer",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
  ],
};
