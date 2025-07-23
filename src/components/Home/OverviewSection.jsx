import { Link } from "react-router-dom";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      role="region"
      aria-label="Aperçu de mes compétences et projets"
      className="min-h-screen snap-start pt-24 flex flex-col justify-center items-center bg-white text-black"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-green">Aperçu</h2>
        </div>
        <div>
          <p className="text-darkGray text-justify">
            Une vision rapide de mon univers : mes projets, mon parcours et ma
            vision en tant que développeur web.
          </p>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {/* Bloc 1 - À propos */}
        <div className="bg-lightGray p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">À propos</h3>
            <p className="text-darkGray mb-4">
              Découvrez mon parcours, mon approche et ce qui me motive à créer des expériences web uniques.
            </p>
          </div>
          <Link to="/about" className="text-green font-medium hover:underline self-start">
            En savoir plus →
          </Link>
        </div>

        {/* Bloc 2 - Projets */}
        <div className="bg-lightGray p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Projets</h3>
            <p className="text-darkGray mb-4">
              Un aperçu de mes réalisations : applications dynamiques, interfaces soignées, outils sur mesure.
            </p>
          </div>
          <Link to="/projects" className="text-green font-medium hover:underline self-start">
            Voir mes projets →
          </Link>
        </div>

        {/* Bloc 3 - Compétences */}
        <div className="bg-lightGray p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Compétences</h3>
            <p className="text-darkGray mb-4">
              Technologies, frameworks et bonnes pratiques que je mobilise au quotidien dans mes projets web.
            </p>
          </div>
          <Link to="/skills" className="text-green font-medium hover:underline self-start">
            Voir mes compétences →
          </Link>
        </div>

        {/* Bloc 4 - Contact */}
        <div className="bg-lightGray p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-darkGray mb-4">
              Une idée de projet ? Une opportunité à partager ? Parlons-en.
            </p>
          </div>
          <Link to="/contact" className="text-green font-medium hover:underline self-start">
            Me contacter →
          </Link>
        </div>
      </div>
    </section>
  );
}