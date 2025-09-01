export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-white text-black">
  <div className="max-w-4xl mx-auto text-center animate-fade-in">
    <h1 className="text-4xl font-bold mb-4 text-green">Envoyez-moi un message !</h1>
    <p className="text-lg mb-12 text-black">
      Une question, une proposition ou juste envie de dire bonjour ? Allez-y.
    </p>

    <form className="space-y-8">
      <div className="md:flex md:gap-6 space-y-6 md:space-y-0">
        <div className="flex-1">
          <label className="block text-sm mb-1 text-left text-black">Votre nom</label>
          <input
            type="text"
            placeholder="Entrez votre nom"
            className="w-full border-b border-lightGray bg-transparent px-1 py-2 focus:outline-none focus:border-green"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm mb-1 text-left text-black">Adresse email</label>
          <input
            type="email"
            placeholder="Entrez votre adresse email"
            className="w-full border-b border-lightGray bg-transparent px-1 py-2 focus:outline-none focus:border-green"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1 text-left text-black">Votre message</label>
        <textarea
          rows="4"
          placeholder="Tapez votre message..."
          className="w-full border-b border-lightGray bg-transparent px-1 py-2 focus:outline-none focus:border-green"
        ></textarea>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="px-8 py-3 bg-green text-white hover:bg-white hover:text-green hover:border-green border rounded-md transition font-semibold tracking-wider"
        >
          ENVOYER →
        </button>
      </div>
    </form>
  </div>
</section>
  );
}