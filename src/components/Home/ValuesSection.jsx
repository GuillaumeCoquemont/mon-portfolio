import { motion } from 'framer-motion';

export default function ValuesSection() {
  return (
    <section
      id="values"
      role="region"
      aria-label="Mes valeurs et ma vision"
      className="sm:min-h-screen snap-start pt-4 sm:pt-24 flex flex-col justify-center items-center bg-white text-black"
    >
      <div className="w-full max-w-6xl px-6">
        <motion.h2
          className="text-4xl font-bold text-green mb-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mes valeurs & ma vision
        </motion.h2>
        
        <motion.p
          className="text-darkGray text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Curieux, rigoureux et à l'écoute, je m'engage à créer des expériences digitales 
          qui allient performance technique et satisfaction utilisateur.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Valeur 1 */}
          <motion.div
            className="bg-green/10 p-6 rounded-lg border-l-4 border-green"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="font-semibold text-green">Innovation</h3>
            </div>
            <p className="text-sm text-darkGray">
              Toujours en veille technologique pour proposer les meilleures solutions et repousser les limites du possible.
            </p>
          </motion.div>

          {/* Valeur 2 */}
          <motion.div
            className="bg-green/10 p-6 rounded-lg border-l-4 border-green"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="font-semibold text-green">Sécurité</h3>
            </div>
            <p className="text-sm text-darkGray">
              Développement sécurisé avec bonnes pratiques, tests rigoureux et protection des données utilisateurs.
            </p>
          </motion.div>

          {/* Valeur 3 */}
          <motion.div
            className="bg-green/10 p-6 rounded-lg border-l-4 border-green"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-semibold text-green">Performance</h3>
            </div>
            <p className="text-sm text-darkGray">
              Optimisation continue pour des applications rapides, fluides et une expérience utilisateur exceptionnelle.
            </p>
          </motion.div>

          {/* Valeur 4 */}
          <motion.div
            className="bg-green/10 p-6 rounded-lg border-l-4 border-green"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <h3 className="font-semibold text-green">Collaboration</h3>
            </div>
            <p className="text-sm text-darkGray">
              Travail d'équipe, communication claire et partage de connaissances pour des projets réussis.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}