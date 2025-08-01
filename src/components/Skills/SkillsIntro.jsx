export default function SkillsIntro() {
  return (
    <section
      id="skills"
      role="region"
      aria-label="Introduction à mes compétences"
      className="sm:min-h-screen snap-start pt-24 flex flex-col justify-center items-center bg-white text-black"
    >
      <div className="w-full max-w-4xl px-6">
        <h2 className="text-4xl font-bold text-green mb-10">Mes compétences</h2>

        <div className="text-darkGray text-justify space-y-4">
          <p>
            Allier la créativité du design à la rigueur du développement, c’est ce qui définit mon approche. Formé aux deux disciplines, je conçois des interfaces à la fois élégantes, fonctionnelles et performantes.
          </p>
          <p>
            Mon objectif : transformer chaque projet en une expérience fluide et intuitive, en exploitant les technologies les plus adaptées et les bonnes pratiques du web moderne.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <a href="#skills-grid" aria-label="Aller aux compétences" className="animate-bounce text-green text-3xl">
          ↓
        </a>
      </div>
    </section>
  );
}