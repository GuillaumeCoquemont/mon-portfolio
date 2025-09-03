export default function ProjectsIntro() {
  return (
    <section
      id="projects"
      role="region"
      aria-label="Présentation des projets"
      className="min-h-screen snap-start flex flex-col justify-center items-center text-black"
    >
    <div className="mt-16 w-full max-w-5xl px-6 text-center">
      <h3 className="text-3xl font-bold mb-8 text-green">Mes projets</h3>
      <p className="text-green mb-4">
        Chaque projet présenté ici reflète mon parcours, mes apprentissages et ma passion pour le développement web. 
        Qu'il s'agisse de missions professionnelles, de projets personnels ou d'expérimentations créatives, 
        j'accorde une attention particulière à l'expérience utilisateur, la performance et le design.
      </p>
      <p className="text-green">
        Explorez mes réalisations pour mieux comprendre ma vision du web et les compétences que je mets en œuvre au quotidien.
      </p>
    </div>
    <div className="mt-12">
    <a href="#projects-grid" aria-label="Aller aux projets" className="animate-bounce text-green text-3xl">
          ↓
    </a>
    </div>
    </section>
  );
}