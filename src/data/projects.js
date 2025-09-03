export const projects = [
  {
    id: "portfolio",
    title: "Portfolio interactif",
    subtitle: "Site personnel pour présenter mes réalisations",
    description: `
      Ce site présente mes projets, mes compétences et permet de me contacter.
      Il a été réalisé avec React, Tailwind CSS, Vite et EmailJS.
    `,
    image: "/assets/images/portfolio.webp",
    technologies: ["React", "Tailwind", "EmailJS", "Vite"],
    link: null,
    github: "https://github.com/GuillaumeCoquemont/mon-portfolio",
    date: "2025",
    type: "Site vitrine",
  },
  {
    id: "vehidoc",
    title: "Véhidoc",
    subtitle: "Plateforme de génération de documents administratifs",
    description: `
      Projet réalisé en équipe dans le cadre de mon stage alterné.
      Permet de générer automatiquement des CERFA véhicules à partir d'un formulaire intelligent.
    `,
    image: "/assets/images/vehidoc.webp",
    video: null,
    technologies: ["React", "Express", "MySQL", "PDF-lib"],
    link: "https://vehidoc.fr/",
    github: null,
    date: "2025",
    type: "Projet professionnel",
  },
  {
    id: "cyna",
    title: "CYNA",
    subtitle: "Plateforme e-commerce de cybersécurité SaaS",
    description: `
        Développée en équipe lors d’un projet de fin d’année. 
        Permet d’acheter des services de cybersécurité (SOC, EDR, XDR) via une interface intuitive, gestion du back office complet.
    `,
    image: null,
    video: "/assets/videos/cyna-presentation.mp4",
    technologies: ["React", "Express", "Sequelize", "MySQL", "Docker"],
    link: null,
    github: [
      "https://github.com/PavelDelhomme/cyna_front",
      "https://github.com/PavelDelhomme/cyna_backend"
    ],
    date: "2025",
    type: "Projet d’étude",
},
{
  id: "hideo",
  title: "Hideo",
  subtitle: "Refonte de l'identité et site WordPress",
  description: `
     Refonte de l’identité visuelle de l’entreprise Hideo (anciennement Ideo).
     Participation à la création du logo, de la charte graphique et développement du site WordPress.
  `,
    image: "/assets/images/hideo.webp",
    technologies: ["WordPress", "Bricks Builder", "Figma"],
    link: "https://hideo.fr",
    github: null,
    date: "2025",
    type: "Projet professionnel",
},
{
  id: "plouescat",
  title: "Plouescat",
  subtitle: "Création d'un site de réservations de gîtes",
  description: `
    Développement d’un site WordPress pour la réservation de gîtes à Plouescat.
    Le site permet de consulter les hébergements disponibles et de réserver directement en ligne via un calendrier interactif.
    Ce projet a été ma première réalisation professionnelle concrète, mettant en pratique mes compétences en WordPress, intégration web et configuration de plugins de réservation.
  `,
    image: "/assets/images/plouescat.webp",
    technologies: ["WordPress", "Code"],
    link: "https://location-plouescat.com/",
    github: null,
    date: "2025",
    type: "Projet professionnel",
},
];