export default function Home() {
  return (
    <section role="region" aria-label="Présentation personnelle" className="min-h-screen bg-white text-black flex flex-col md:flex-row items-center justify-between px-6 py-16 pt-24">
    <div className="max-w-2xl md:-1/2">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Hello, je suis <span className="text-green">Guillaume</span>
      </h1>
      <p className="text-lg md:text-xl text-darkGray max-w-2xl">
        Ancien graphiste passionné par les nouvelles technologies, je me suis reconverti en tant que Coordinateur de Projet Informatique. 
        J'aime créer des sites web modernes et fonctionnels qui offrent une expérience utilisateur exceptionnelle. 
        Tout juste diplômé d'un Bachelor 3 Coordinateur de projet informatique, 
        je suis prêt à relever de nouveaux défis et à mettre mes compétences au service de projets passionnants. 
        Mon objectif est de continuer à apprendre et à évoluer dans le domaine du développement web 
        tout en apportant une touche créative et professionnelle à chaque projet que j'entreprends.
      </p>

      <a href="/about" className="inline-block mt-4 px-6 py-3 bg-green text-white font-medium rounded hover:bg-darkGray transition-colors">
        En savoir plus sur moi
      </a>
    </div>

    <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
      <div className="w-64 h-64 bg-lightGray rounded-lg overflow-hidden shadow-lg">
        <img src="/assets/illustration_profile.webp" alt="Photo de Guillaume" className="object-cover w-full h-full" />
      </div>
    </div>
    </section>
  )
}