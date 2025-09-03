import { useState } from "react";
import VideoModal from "../Modal/VideoModal";


const projects = [
        { name: "VéhiDoc", type: "Projet professionnel", description: "Web application de gestion de documents administratifs pour les concessions", image: "assets/images/Logo_VEHIDOC_Web_couleur.webp", 
            tech: "React, Node.js, MySQL, CSS ", link: "https://www.vehidoc.fr" },
        { name: "Cyna", type: "Projet d'étude", description: "Plateforme web complète (React/Node.js/MySQL) pour la gestion de commandes, services et utilisateurs.", image: "assets/images/logo-cyna.webp", tech: "React, Node.js, Express" },
        { name: "Hidéo", type: "Projet personnel", description: "Refonte complète du site de l'entreprise Hidéo (anciennement Idéo-marketing), avec une interface utilisateur moderne et responsive.", image: "assets/images/Logo blanc Hidéo avec baseline.webp", 
            tech: "CMS Wordpress Bricks Builder, CSS, PHP", link: "https://www.hideo.fr" },
        { name: "Location Plouescat", type: "Projet professionnel", description: "Création d'un site vitrine pour la location de gîtes.", image: "assets/images/Location-Plouescat.webp", 
            tech: "CMS Wordpress, CSS", link: "https://location-plouescat.com/" },
    ];

const searchProjects = (searchTerm) => {
    return projects.filter((project) => project.name.toLowerCase().includes(searchTerm.toLowerCase()));
};

export default function ProjectsGrid() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
   
  return (
    <section
      id="projects-grid"
      role="region"
      aria-label="Grille des projets"
      className="min-h-screen snap-start flex flex-col justify-center items-center bg-white text-black"
    >
      <div className="w-full max-w-5xl px-6 text-center">
        <h3 className="text-3xl font-bold mb-8 text-green">Mes projets</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-green text-white rounded-lg shadow-lg hover:scale-105 transition-transform overflow-hidden"
            >
              {/* Image en haut */}
              <div className="w-full h-48 overflow-hidden flex justify-center items-center bg-gray-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className={`object-contain transition-transform duration-300 ${
                    (project.name === "Cyna" || project.name === "Hidéo") ? "h-32 max-w-[80%]" : "w-full h-full object-cover group-hover:scale-105"
                  }`}
                />
              </div>

              {/* Infos du projet */}
              <div className="p-4">
                <h4 className="text-xl font-bold mb-1">{project.name}</h4>
                <p className="text-sm italic mb-1">{project.type}</p>
                <p className="text-sm text-white/80">{project.tech}</p>
                {project.name === "Cyna" ? (
                  <div className="mt-3 flex justify-center">
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="px-3 py-1 text-sm border border-white rounded hover:bg-white hover:text-green transition"
                    >
                      Voir la vidéo
                    </button>
                  </div>
                ) : (
                  project.link && !project.demo && !project.code && (
                    <div className="mt-3 flex justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm border border-white rounded hover:bg-white hover:text-green transition"
                      >
                        Voir le site
                      </a>
                    </div>
                  )
                )}
              </div>

              {/* Overlay de description au hover */}
              <div className="absolute inset-0 bg-green bg-opacity-95 text-white p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center">
                <p>{project.description}</p>
              </div>

              {/* Lien cliquable sur toute la carte */}
              {project.name === "Cyna" ? (
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="absolute inset-0"
                  aria-label="Ouvrir la vidéo de présentation du projet Cyna"
                ></button>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                ></a>
              )}
            </div>
          ))}
        </div>
      </div>
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoPlay={true} />
    </section>
  );
}