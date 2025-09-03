import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-4 text-green">
          Envoyez-moi un message !
        </h1>
        <p className="text-lg mb-12 text-black">
          Une question, une proposition ou juste envie de dire bonjour ? Allez-y.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}