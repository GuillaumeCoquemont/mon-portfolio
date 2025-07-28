import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

export default function OverviewSection() {
  return (
    <section
      id="overview"
      role="region"
      aria-label="Aperçu de mes compétences et projets"
      className="min-h-[400px] sm:min-h-screen snap-start pt-4 flex flex-col justify-center items-center bg-white text-white"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-green text-center md:text-left">Découvrez mon univers</h2>
        </div>
        <div>
          <p className="text-darkGray text-justify">
            Mon parcours, mes projets, mes compétences et ma vision du développement web. 
            Une approche créative et technique pour créer des expériences digitales exceptionnelles.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Bloc 1 - À propos */}
        <motion.div
          className="bg-green p-6 rounded-lg shadow-md flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h3 className="text-xl font-semibold">Mon parcours</h3>
            </div>
            <p className="mb-4 text-sm">
              Du design graphique au développement web. Découvrez mon évolution professionnelle et ma passion pour la création digitale.
            </p>
          </div>
          <Link to="/about" className="inline-block bg-white text-green px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-center">
            En savoir plus
          </Link>
        </motion.div>

        {/* Bloc 2 - Projets */}
        <motion.div
          className="bg-green/90 p-6 rounded-lg shadow-md flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="text-xl font-semibold">Mes projets</h3>
            </div>
            <p className="mb-4 text-sm">
              Vehidoc et projets d'étude. Des réalisations concrètes qui démontrent mes compétences en développement fullstack.
            </p>
          </div>
          <Link to="/projects" className="inline-block bg-white text-green px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-center">
            Voir les projets
          </Link>
        </motion.div>

        {/* Bloc 3 - Compétences */}
        <motion.div
          className="bg-green/80 p-6 rounded-lg shadow-md flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h3 className="text-xl font-semibold">Mes compétences</h3>
            </div>
            <p className="mb-4 text-sm">
              React, Node.js, Tailwind CSS. Une stack moderne et la capacité d'apprendre rapidement de nouvelles technologies.
            </p>
          </div>
          <Link to="/skills" className="inline-block bg-white text-green px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-center">
            Voir les compétences
          </Link>
        </motion.div>

        {/* Bloc 4 - Contact */}
        <motion.div
          className="bg-green/70 p-6 rounded-lg shadow-md flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold">Me contacter</h3>
            </div>
            <p className="mb-4 text-sm">
              Envie de collaborer ou d'échanger ? Discutons de vos projets et de mes compétences pour créer quelque chose d'extraordinaire.
            </p>
          </div>
          <Link to="/contact" className="inline-block bg-white text-green px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-center">
            Me contacter
          </Link>
        </motion.div>
      </div>
    </section>
  );
}