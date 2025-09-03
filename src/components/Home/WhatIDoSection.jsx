import { motion } from 'framer-motion'

export default function WhatIDoSection() {
  return (
    <>
      <motion.section
        id="what-i-do"
        role="region"
        aria-label="Ce que je fais / cherche"
        className="min-h-screen pt-24 flex flex-col justify-center items-center text-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-green">Mon profil professionnel</h2>
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-green">Mes compétences & projets</h2>
            <div className="space-y-4">
              <div className="bg-green/10 p-4 rounded-lg border-l-4 border-green">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <h3 className="font-semibold text-green">Développement Front-end</h3>
                </div>
                <p className="text-sm text-darkGray">React, JavaScript, Tailwind CSS, HTML/CSS</p>
                <p className="text-xs text-gray-500 mt-1">Projet d'étude React + Vehidoc en alternance</p>
              </div>
              
              <div className="bg-green/10 p-4 rounded-lg border-l-4 border-green">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <h3 className="font-semibold text-green">Back-end & APIs</h3>
                </div>
                <p className="text-sm text-darkGray">Node.js, Express, bases de données</p>
                <p className="text-xs text-gray-500 mt-1">APIs RESTful développées pour Vehidoc</p>
              </div>
              
              <div className="bg-green/10 p-4 rounded-lg border-l-4 border-green">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                  <h3 className="font-semibold text-green">Design & UX</h3>
                </div>
                <p className="text-sm text-darkGray">Figma, Adobe Creative Suite</p>
                <p className="text-xs text-gray-500 mt-1">Conception UI/UX pour projets web</p>
              </div>
              
              <div className="bg-green/10 p-4 rounded-lg border-l-4 border-green">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="font-semibold text-green">Gestion de projet</h3>
                </div>
                <p className="text-sm text-darkGray">Méthodes Agile, travail en équipe, autonomie</p>
                <p className="text-xs text-gray-500 mt-1">1 an d'alternance en développement fullstack</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:mt-32 md:items-end"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-green">Ce que je recherche</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-semibold text-green">Premier poste développeur</h3>
                </div>
                <p className="text-sm text-darkGray">Opportunité de mettre en pratique mes compétences acquises en alternance</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  <h3 className="font-semibold text-green">Équipe bienveillante</h3>
                </div>
                <p className="text-sm text-darkGray">Environnement où je peux apprendre et grandir professionnellement</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="font-semibold text-green">Technologies modernes</h3>
                </div>
                <p className="text-sm text-darkGray">Stack technique à jour et opportunités d'apprentissage</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <h3 className="font-semibold text-green">Évolution professionnelle</h3>
                </div>
                <p className="text-sm text-darkGray">Poste de développeur junior avec perspectives d'évolution</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

    </>
  );
}