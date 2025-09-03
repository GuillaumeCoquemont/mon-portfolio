import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectsDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="text-center py-20">Projet introuvable</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-16 md:py-24 px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">{project.title}</h1>
      <h2 className="text-xl md:text-2xl text-darkGray mb-6">{project.subtitle}</h2>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg w-full mb-8 shadow-md"
        />
      )}

      {project.video && (
        <div className="mb-8">
          <video
            controls
            className="w-full aspect-video rounded-lg"
          >
            <source src={project.video} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      )}

      <p className="text-base md:text-lg text-black whitespace-pre-line mb-6">
        {project.description}
      </p>

      <div className="mb-6 text-sm text-darkGray">
        <p><strong>Technologies :</strong> {project.technologies.join(", ")}</p>
        <p><strong>Année :</strong> {project.date}</p>
        <p><strong>Type :</strong> {project.type}</p>
      </div>

      <div className="flex gap-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green font-semibold underline"
          >
            Voir le projet
          </a>
        )}
        {Array.isArray(project.github) ? (
          project.github.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green font-semibold underline"
            >
              Code source {project.github.length > 1 ? index + 1 : ""}
            </a>
          ))
        ) : project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green font-semibold underline"
          >
            Code source
          </a>
        ) : null}
      </div>
    </div>
  );
}