export default function WhatIDoSection() {
  return (
    <section
      id="what-i-do"
      role="region"
      aria-label="Ce que je fais / cherche"
      className="min-h-screen snap-start pt-24 flex flex-col justify-center items-center bg-white text-black"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16">
        {/* Bloc 1 - Ce que je fais */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green">Ce que je fais</h2>
          <ul className="space-y-2 text-darkGray text-justify">
            <li>• Développement web front-end (React + Tailwind)</li>
            <li>• Développement web back-end (Node.js + Express)</li>
            <li>• Intégration responsive</li>
            <li>• Conception UI/UX sur Figma</li>
            <li>• Coordination de projets digitaux</li>
          </ul>
        </div>

        {/* Bloc 2 - Ce que je cherche */}
        <div className="md:mt-32 md:items-end">
          <h2 className="text-3xl font-bold mb-4 text-green">Ce que je cherche</h2>
          <ul className="space-y-2 text-darkGray text-justify">
            <li>• Un poste de développeur orienté front-end</li>
            <li>• Projets créatifs à impact</li>
            <li>• Environnement stimulant & bienveillant</li>
            <li>• Équipe motivée et dynamique</li>
          </ul>
        </div>
      </div>
    </section>
  );
}