import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="hero"
      role="region"
      aria-label="Présentation personnelle"
      className="min-h-screen snap-start grid lg:grid-cols-2 text-black"
    >
      {/* Colonne gauche - Texte sur fond vert */}
      <motion.div
        className="bg-green text-white flex flex-col justify-center items-center px-8 py-20"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-xl w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Hello, je suis <span className="text-beige">Guillaume</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-beige">
            Développeur web junior
          </h2>
          <p className="text-lg text-white mb-8">
            Ancien graphiste reconverti dans le développement web. 
            Passionné par la création d'expériences digitales modernes et accessibles.
            Je recherche mon premier poste de développeur pour mettre en pratique mes compétences acquises en alternance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/projects"
              className="inline-block px-6 py-3 bg-white text-green font-medium rounded-lg
              hover:bg-green hover:text-white hover:shadow-lg 
              transform transition-all duration-300 hover:scale-105 
              border-2 border-white text-center"
            >
              Voir mes projets
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-transparent text-white font-medium rounded-lg
              hover:bg-white hover:text-green hover:shadow-lg 
              transform transition-all duration-300 hover:scale-105 
              border-2 border-white text-center"
            >
              Me contacter
            </a>
          </div>
        </div>
      </motion.div>

      {/* Colonne droite - Image sur fond blanc */}
      <motion.div
        className="bg-white flex items-center justify-center p-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-lg overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105">
          <img
            src="/assets/illustration_profile.webp"
            alt="Photo de Guillaume"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </section>
  );
}