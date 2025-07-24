export default function ValuesSection() {
  return (
    <section
      id="values"
      role="region"
      aria-label="Mes valeurs et ma vision"
      className="sm:min-h-screen snap-start pt-8 sm:pt-24 flex flex-col justify-center items-center bg-white text-black"
    >
      <div className="w-full max-w-4xl px-6">
        <h2 className="text-4xl font-bold text-green mb-6">Mes valeurs & ma vision</h2>
        <p className="text-darkGray text-justify mb-6">
          En tant que développeur web, je crois en la création de solutions à la fois esthétiques, accessibles et utiles. 
          Je m'efforce d'apporter de la clarté dans chaque projet, en alliant exigence technique et approche humaine.
        </p>
        <p className="text-darkGray text-justify">
          Curieux, rigoureux et à l'écoute, je m’engage à concevoir des expériences digitales durables et évolutives, 
          en plaçant l’utilisateur au centre de mes décisions.
        </p>
      </div>
    </section>
  );
}