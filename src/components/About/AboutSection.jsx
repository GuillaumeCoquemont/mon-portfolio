import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaCode, FaBriefcase } from 'react-icons/fa';
import './flipcard.css';

import React, { useState } from 'react';

const timelineData = [
  {
    type: 'education',
    date: '2013',
    icon: <FaGraduationCap />,
    title: "DEUST Bureautique et Communication Multimédia",
    short: "DEUST Bureautique & Communication Multimédia – ULCO Boulogne-sur-Mer.",
    details: "Formation universitaire axée sur la bureautique, la communication et les outils multimédias à l'Université Littoral Côte d’Opale de Boulogne-sur-Mer.",
  },
  {
    type: 'work',
    date: '2014',
    icon: <FaBriefcase />,
    title: "PanoSign (Boulogne-sur-Mer)",
    short: "Stage en signalétique et communication visuelle.",
    details: "Stage en 2014 chez PanoSign Boulogne-sur-Mer : création de supports de signalétique, impression, pose, découverte du travail en atelier et en équipe.",
  },
  {
    type: 'education',
    date: '2015',
    icon: <FaGraduationCap />,
    title: "Licence Design Graphique",
    short: "Licence Design Graphique – EFFICOM Lille.",
    details: "Licence professionnelle spécialisée en design graphique à EFFICOM Lille, approfondissement des outils de création visuelle et de la communication graphique.",
  },
  {
    type: 'education',
    date: '2017',
    icon: <FaGraduationCap />,
    title: "Mise à niveau en arts appliqués",
    short: "Mise à niveau en arts appliqués – IFFDEC Rennes.",
    details: "Année de mise à niveau à l’IFFDEC Rennes, acquisition des bases artistiques et techniques nécessaires pour poursuivre en design global.",
  },
  {
    type: 'education',
    date: '2018 - 2020',
    icon: <FaGraduationCap />,
    title: "Mastère en design global",
    short: "Mastère en design global – IFFDEC Rennes.",
    details: "Cursus mêlant architecture d'intérieur, design produit et design graphique. Deux stages de 6 mois : en design textile (création de motifs pour vêtements) et à Expression Bretagne (communication visuelle, affiches, logos, catalogues, découverte du code).",
  },
    {
    type: 'work',
    date: '2018',
    icon: <FaBriefcase />,
    title: "MG3",
    short: "Stage en graphisme et communication visuelle.",
    details: "Stage chez MG3 (2017) : graphisme, création de supports print, gestion de projets de communication visuelle.",
  },
  {
    type: 'work',
    date: '2019',
    icon: <FaBriefcase />,
    title: "Expression Bretagne (Morlaix)",
    short: "Stage en communication visuelle.",
    details: "Stage à Expression Bretagne (2018) : réalisation d’affiches, logos, catalogues, avec une première approche du code et du web.",
  },
  {
    type: 'work',
    date: '2021 - 2023',
    icon: <FaBriefcase />,
    title: "Expériences diverses",
    short: "Divers emplois et réflexion professionnelle.",
    details: "Petits boulots dans divers domaines en parallèle d'une réflexion sur mon avenir professionnel, avant de m’orienter définitivement vers le développement web.",
  },
  {
    type: 'education',
    date: '2024',
    icon: <FaCode />,
    title: "Formation Full Stack",
    short: "Formation Full Stack – Code Academy.",
    details: "Formation intensive en développement web full stack à Code Academy : React, Node.js, bases de données, déploiement et projets réels.",
  },
  {
    type: 'education',
    date: '2024 - 2025',
    icon: <FaCode />,
    title: "Bachelor Coordinateur de Projet Informatique",
    short: "Bachelor Coordinateur de Projet Informatique – Sup de Vinci Rennes.",
    details: "Formation à Sup de Vinci Rennes, axée développement front & back (React, Node.js, SQL…). Stage alterné d'un an à Hidéo (création de Véhidoc).",
  },
];

export default function AboutSection() {
  const [flipped, setFlipped] = useState(Array(timelineData.length).fill(false));

  const handleFlip = idx => {
    setFlipped(f =>
      f.map((val, i) => (i === idx ? !val : val))
    );
  };

  return (
    <section
      id="timeline"
      role="region"
      aria-label="À propos de moi"
      className="min-h-screen pt-24 px-6 bg-white text-black"
    >
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-green mb-10">Mon parcours</h2>
        <p className="text-lg text-darkGray text-justify mb-8">
          Je conçois le développement web comme un terrain d'expression, où chaque ligne de code peut servir une idée, une vision et des valeurs humaines.
        </p>
        <VerticalTimeline
          lineColor="#51736F"
          className="vertical-timeline--horizontal"
        >
          {timelineData.map((item, idx) => (
            <VerticalTimelineElement
              key={idx}
              className={`vertical-timeline-element--${item.type}`}
              contentStyle={{ background: '#51736F', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #51736F' }}
              date={item.date}
              dateClassName="text-green"
              iconStyle={{ background: '#51736F', color: '#fff' }}
              icon={item.icon}
            >
              <div
                className={`flip-card${flipped[idx] ? ' flipped' : ''}`}
                onClick={() => handleFlip(idx)}
                tabIndex={0}
                role="button"
                onKeyPress={e => {
                  if (e.key === 'Enter' || e.key === ' ') handleFlip(idx);
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front flex flex-col items-center justify-center h-full">
                    <h3 className="vertical-timeline-element-title text-lg font-semibold text-center">{item.title}</h3>
                    <span className="block mt-2 text-sm opacity-80">{item.date}</span>
                    <p className="mt-4 text-sm">{item.short}</p>
                  </div>
                  <div className="flip-card-back flex flex-col items-center justify-center h-full">
                    <h3 className="vertical-timeline-element-title text-lg font-semibold text-center">{item.title}</h3>
                    <p className="mt-4 text-sm text-center">{item.details}</p>
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <p className="text-lg text-darkGray text-justify mt-12">
          Au-delà des compétences techniques, je recherche des projets qui ont du sens, portés par des équipes motivées avec lesquelles je peux apprendre, partager et construire.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row sm:justify-center sm:gap-6 gap-4">
          <a
            href="/CV Guillaume COQUEMONT alternance Développeur Web.pdf"
            download
            className="inline-block px-6 py-3 bg-green text-white font-medium rounded-lg
              hover:bg-white hover:text-green hover:shadow-lg 
              transform transition-all duration-300 hover:scale-105 
              border-2 border-green text-center"
          >
            Télécharger mon CV →
          </a>
          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-white text-green border-2 border-green text-center font-medium rounded-lg
              hover:bg-green hover:text-white hover:shadow-lg 
              transform transition-all duration-300 hover:scale-105 
              "
          >
            Voir mes projets →
          </a>
        </div>
      </div>
    </section>
  );
}