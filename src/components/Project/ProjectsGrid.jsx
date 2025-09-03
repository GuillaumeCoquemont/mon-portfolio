import { useState } from "react";
import VideoModal from "../Modal/VideoModal";


const projects = [
        { name: "vehidoc", type: "Projet professionnel", description: "Web application de gestion de documents administratifs pour les concessions", image: "assets/images/Logo_VEHIDOC_Web_couleur.webp", 
            tech: "React, Node.js, MySQL, CSS ", link: "https://www.vehidoc.fr" },
        { name: "Cyna", type: "Projet d'étude", description: "Plateforme web complète (React/Node.js/MySQL) pour la gestion de commandes, services et utilisateurs.", image: "assets/images/logo-cyna.webp", tech: "React, Node.js, Express" },
        { name: "hideo", type: "Projet personnel", description: "Refonte complète du site de l'entreprise Hidéo (anciennement Idéo-marketing), avec une interface utilisateur moderne et responsive.", image: "assets/images/Logo blanc Hidéo avec baseline.webp", 
            tech: "CMS Wordpress Bricks Builder, CSS, PHP", link: "https://www.hideo.fr" },
        { name: "plouescat", type: "Projet professionnel", description: "Création d'un site vitrine pour la location de gîtes.", image: "assets/images/Location-Plouescat.webp", 
            tech: "CMS Wordpress, CSS", link: "https://location-plouescat.com/" },
    ];

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
              <div className="w-full h-48 overflow-hidden flex justify-center items-center bg-gray-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className={`object-contain transition-transform duration-300 ${
                    (project.name === "Cyna" || project.name === "Hidéo") ? "h-32 max-w-[80%]" : "w-full h-full object-cover group-hover:scale-105"
                  }`}
                />
              </div>

              <div className="p-4 relative z-10">
                <h4 className="text-xl font-bold mb-1">{project.name}</h4>
                <p className="text-sm italic mb-1">{project.type}</p>
                <p className="text-sm text-white/80">{project.tech}</p>
                <div className="mt-3 flex justify-center gap-2">
                  {project.name === "Cyna" ? (
                    <>
                      <button
                        onClick={() => setIsVideoOpen(true)}
                        className="px-3 py-1 text-sm border border-white rounded hover:bg-white hover:text-green transition"
                      >
                        Voir la vidéo
                      </button>
                      <a
                        href={`/projects/${project.name.toLowerCase()}`}
                        className="px-3 py-1 text-sm border border-white rounded hover:bg-white hover:text-green transition"
                      >
                        Voir le projet
                      </a>
                    </>
                  ) : (
                    <>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-sm border border-white rounded hover:bg-white hover:text-green transition"
                        >
                          Voir le site
                        </a>
                      )}
                      <a
                        href={`/projects/${project.name.toLowerCase()}`}
                        className="px-3 py-1 text-sm border border-white rounded hover:bg-white hover:text-green transition"
                      >
                        Voir le projet
                      </a>
                    </>
                  )}
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-48 bg-black bg-opacity-75 text-white p-4 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center flex items-center justify-center pointer-events-none">
                <p className="text-sm">{project.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoPlay={true} />
    </section>
  );
}