// Personal Information --> #hero section
export const name = "Vincent Achy";
export const designation = "Développeur web | Svelte/React";

// About
export const about = {
  paragraph1:
    "Formé à l'école O'Clock et par mes expériences autodidactes, je me suis consacré au développement web depuis 3 ans. J'ai acquis de bonnes compétences en pratiquant des technologies variées comme: <span class='highlight'>JavaScript, SCSS, Svelte, React, Node.js, Express et PostgreSQL</span>.",
  paragraph2:
    "Mon expérience professionnelle m'a apporté des compétences essentielles en communication et travail d'équipe. Motivé par l'innovation et le développement de solutions pratiques, je suis prêt à m'engager dans des projets constructifs, apportant mon savoir-faire et ma capacité d'adaptation.",
};

// Projects --> #project section
export const projects = [
  {
    title: "gBlog | In progress",
    description: "Une application pour la création d'articles généralistes.",
    url: "https://www.google.fr",
    tech: "Svelte, Vite, SCSS, PostgreSQL, Node.js, Express.",
    showIcon: true,
    timeframe: "2024", // Champ ajouté
  },
  {
    title: "Architect",
    description:
      "Un site présentant les projets éclectiques et innovants d'une jeune agence d'architecture.",
    url: "https://www.google.fr",
    tech: "Svelte, Vite, SCSS, Node.js, TypeScript, Express.",
    showIcon: true,
    timeframe: "2023", // Champ ajouté
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
    skills: "HTML, SCSS, Svelte, React, JavaScript.",
    showIcon: false, // Pas d'icône pour cet élément
  },
  {
    from: "2020",
    to: "2022",
    role: "Technicien d’Assistance Informatique",
    org: "École Camille Claudel",
    location: "Rantigny",
    skills:
      "Dépannage, Réseau, Hardware, Communication technique",
    showIcon: false, // Pas d'icône pour cet élément
  },
  {
    from: "2012",
    to: "2020",
    role: "Monteur Vidéo",
    org: "Club Cinéma Cauffry",
    location: "Cauffry",
    skills:
      "Final Cut Pro, iMovie, Étalonnage, Post-production audio",
    showIcon: false, // Pas d'icône pour cet élément
  },
];

// Education --> #education section
export const education = [
  {
    from: "2022",
    to: "2023",
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
  text: "JavaScript | Svelte | React | SCSS | Astro | PostgreSQL | Node.js | Tailwind | API REST | Express | GitHub | Visual Studio Code.",
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
];
