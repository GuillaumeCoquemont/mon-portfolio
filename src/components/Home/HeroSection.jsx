export default function HeroSection() {
  return (
    <section id="hero" 
      role="region" 
      aria-label="Présentation personnelle" 
      className="min-h-[400px] sm:min-h-screen snap-start pt-24 flex flex-col lg:flex-row items-center justify-center text-justify">
      <div className="max-w-2xl w-full lg:w-2/3">
        <h1 className="text-heading text-center sm:text-left md:text-heading-md font-bold mb-4 leading-tight break-words">
          Hello, je suis <span className="text-green">Guillaume</span>
        </h1>
        <p className="text-paragraph text-darkGray max-w-2xl text-justify mb-6 mx-auto">
          Ancien graphiste passionné par les nouvelles technologies, je me suis reconverti en tant que Coordinateur de Projet Informatique. 
          J'aime créer des sites web modernes et fonctionnels qui offrent une expérience utilisateur exceptionnelle. 
          Tout juste diplômé d'un Bachelor 3 Coordinateur de projet informatique, 
          je suis prêt à relever de nouveaux défis et à mettre mes compétences au service de projets passionnants. 
          Mon objectif est de continuer à apprendre et à évoluer dans le domaine du développement web 
          tout en apportant une touche créative et professionnelle à chaque projet que j'entreprends.
        </p>

        <a href="/about" className="inline-block mt-4 px-6 py-3 bg-green text-white font-medium rounded hover:bg-darkGray transition-colors mx-auto md:mx-0">
          En savoir plus sur moi
        </a>
      </div>

      <div className="mt-6 mb-10 md:mt-8 lg:mt-0 lg:w-1/3 flex justify-center items-center">
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-lightGray rounded-lg overflow-hidden shadow-lg">
          <img src="/assets/illustration_profile.webp" alt="Photo de Guillaume" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  )
}