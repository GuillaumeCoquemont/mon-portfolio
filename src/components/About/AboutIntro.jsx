export default function AboutIntro() {
  return (
    <section
      id="about"
      role="region"
      aria-label="À propos de moi"
      className="sm:min-h-screen snap-start pt-24 flex flex-col justify-center items-center bg-white text-black"
    >
      <div className="w-full max-w-4xl px-6">
        <h2 className="text-4xl font-bold text-green mb-10">Mon parcours</h2>

        <div className="text-darkGray text-justify space-y-4">
          <p>
            Depuis mes débuts dans le design graphique jusqu'à mon immersion dans le développement web, mon parcours est guidé par la curiosité, la créativité et la volonté de proposer des solutions concrètes et accessibles.
          </p>
          <p>
            Cette frise chronologique met en lumière les étapes clés de mon évolution professionnelle, illustrant les compétences et expériences acquises au fil du temps.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <a href="#timeline" aria-label="Aller à la frise chronologique" className="animate-bounce text-green text-3xl">
          ↓
        </a>
      </div>
    </section>
  );
}
