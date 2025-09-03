import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDocker, FaAdjust, FaQuestion, FaUsers, FaUserTie, FaBug, FaComments, FaCalendarAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiFigma, SiWordpress, SiExpress } from 'react-icons/si';

const flipCardStyle = {
  perspective: '1000px',
};

const flipInnerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
};

const flipFrontBackStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '0.5rem',
  padding: '1rem',
  border: '2px solid #fff',
};

export default function SkillsGrid() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={32} /> },
    { name: "CSS", icon: <FaCss3Alt size={32} /> },
    { name: "JavaScript", icon: <FaJs size={32} /> },
    { name: "React", icon: <FaReact size={32} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
    { name: "Node.js", icon: <FaNodeJs size={32} /> },
    { name: "Express", icon: <SiExpress size={32} /> },
    { name: "MySQL", icon: <SiMysql size={32} /> },
    { name: "GitHub", icon: <FaGithub size={32} /> },
    { name: "Figma", icon: <SiFigma size={32} /> },
    { name: "WordPress", icon: <SiWordpress size={32} /> },
    { name: "Docker", icon: <FaDocker size={32} /> },
  ];

  const qualities = [
    { name: "Adaptabilité", icon: <FaAdjust size={32} />, description: "Je m’adapte rapidement à de nouveaux environnements et équipes." },
    { name: "Curiosité", icon: <FaQuestion size={32} />, description: "Toujours en quête d’apprendre et de comprendre de nouvelles choses." },
    { name: "Travail en équipe", icon: <FaUsers size={32} />, description: "J’aime collaborer et contribuer à des projets communs." },
    { name: "Autonomie", icon: <FaUserTie size={32} />, description: "Je prends des initiatives et sais avancer sans supervision constante." },
    { name: "Résolution de problèmes", icon: <FaBug size={32} />, description: "Je cherche des solutions concrètes aux problèmes rencontrés." },
    { name: "Communication", icon: <FaComments size={32} />, description: "J’exprime clairement mes idées à l’écrit comme à l’oral." },
    { name: "Organisation", icon: <FaCalendarAlt size={32} />, description: "Je planifie et priorise efficacement les tâches." },
  ];

  return (
    <section
      id="skills-grid"
      role="region"
      aria-label="Grille des compétences"
      className="sm:min-h-screen snap-start pt-24 flex flex-col justify-center items-center bg-green text-white"
    >
      <div className="w-full max-w-5xl px-6 text-center">
        <h3 className="text-3xl font-bold mb-8 text-white">Outils & Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-green font-semibold p-4 rounded-lg shadow-md hover:scale-105 transition-transform flex flex-col items-center"
            >
              <div className="mb-2">{skill.icon}</div>
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 w-full max-w-5xl px-6 text-center">
        <h3 className="text-3xl font-bold mb-8 text-white">Qualités humaines</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {qualities.map((quality, index) => {
            const [flipped, setFlipped] = useState(false);
            return (
              <div
                key={index}
                className="h-40"
                style={flipCardStyle}
                onClick={() => setFlipped(!flipped)}
              >
                <div
                  style={{
                    ...flipInnerStyle,
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  <div
                    style={{
                      ...flipFrontBackStyle,
                      backgroundColor: '#ffffff',
                      color: '#51736F',
                    }}
                  >
                    <div className="mb-2">{quality.icon}</div>
                    <div className="font-semibold">{quality.name}</div>
                  </div>
                  <div
                    style={{
                      ...flipFrontBackStyle,
                      backgroundColor: '#51736F',
                      color: '#ffffff',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="text-sm">{quality.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}