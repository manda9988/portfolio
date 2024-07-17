// content.js

// Personal Information --> #hero section
export const name = "Vincent Achy";
export const designation = "Développeur web | Svelte/React";

// About
export const about = {
  paragraph1:
    "Formé à l'école O'Clock et par mes expériences autodidactes et professionnelles, je me consacre au développement web depuis trois ans. ",
  paragraph2:
    "J'ai acquis de solides compétences en pratiquant diverses technologies telles que: <span class='highlight'>JavaScript, SCSS, Svelte, React, Node.js, Express et PostgreSQL.</span>",
  paragraph3:
    "Mon parcours professionnel m'a apporté des aptitudes essentielles en communication et en travail d'équipe.",
  paragraph4:
    " Motivé par l'innovation, je suis prêt à m'engager dans des projets constructifs en apportant ma capacité d'adaptation et mon savoir-faire.",
};

// Projects --> #project section
export const projects = [
  {
    title: "Blog_",
    description: "Une application pour la création d'articles généralistes.",
    url: "https://www.google.fr",
    tech: "Svelte, Vite, SCSS, PostgreSQL, Node.js, Express.",
    showIcon: true,
    timeframe: "2024",
  },
  {
    title: "Architect",
    description:
      "Un site présentant les projets innovants d'une jeune agence d'architecture.",
    url: "https://www.google.fr",
    tech: "Svelte, Vite, SCSS, Node.js, TypeScript, Express.",
    showIcon: true,
    timeframe: "2023",
  },
];

// Work Experience --> #work section
export const work = [
  {
    from: "2022",
    to: "2023",
    role: "Stage Développeur Web React / Svelte",
    org: "Tremplin Numérique",
    location: "Paris",
    skills: "SCSS, Svelte, React, JavaScript.",
    showIcon: false,
  },
  {
    from: "2020",
    to: "2022",
    role: "Technicien d’Assistance Informatique",
    org: "Médiathèque C.Claudel",
    location: "Rantigny",
    skills: "Réseau, Hardware, Communication technique.",
    showIcon: false,
  },
  {
    from: "2012",
    to: "2020",
    role: "Monteur Vidéo",
    org: "Association ACC",
    location: "Cauffry",
    skills: "Final Cut Pro, Étalonnage, Post-production audio.",
    showIcon: false, // Pas d'icône pour cet élément
  },
];

// Education --> #education section
export const education = [
  {
    from: "",
    to: "2024",
    institute: "freeCodeCamp",
    course: "Certification en conception de sites Web réactifs",
    location: "Paris",
  },
  {
    from: "2023",
    to: "2024",
    institute: "O'clock",
    course: "Titre Professionnel Développeur Web et Web Mobile",
    location: "Paris",
  },
  {
    from: "2010",
    to: "2013",
    institute: "Université Paris 8",
    course: "Licence Cinéma et Audiovisuel",
    location: "Paris",
  },
];

// Skills
export const hardSkills = {
  text: "JavaScript | Svelte | React | SCSS | Astro | PostgreSQL | Node.js | Tailwind | API | Express | GitHub | Visual Studio Code.",
};
export const softSkills = {
  text: "Communication | Travail d'équipe | Créativité | Adaptabilité | Gestion du temps | Organisé.",
};

// Contact --> #contact section
export const contact = [
  {
    source_name: "vincent.achy@gmail.com",
    showIcon: false, // Pas d'icône pour cet élément
  },

  {
    source_name: "Github",
    source: "https://github.com/manda9988",
    showIcon: true,
  },
  {
    source_name: "LinkedIn",
    source: "https://www.linkedin.com/in/vincent-achy-1704421a9/",
    showIcon: true,
  },
];
