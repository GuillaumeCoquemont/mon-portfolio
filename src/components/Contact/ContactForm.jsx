import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import MyReCAPTCHA from "./ReCAPTCHA";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "website") {
      setHoneypot(value);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (honeypot) {
      console.warn("Bot détecté (honeypot rempli).");
      return;
    }

    if (!recaptchaToken) {
      alert("Veuillez valider le reCAPTCHA.");
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setIsSent(true);
          setFormData({ nom: "", email: "", message: "" });
        },
        (error) => {
          console.error("Erreur lors de l'envoi :", error.text);
          alert("Une erreur est survenue, veuillez réessayer.");
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={handleSubmit} className="space-y-8">
        <div className="md:flex md:gap-6 space-y-6 md:space-y-0">
          <div className="flex-1">
            <label htmlFor="nom" className="block text-sm mb-1 text-left text-black">
              Votre nom
            </label>
            <input
              id="nom"
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              className="w-full border-b border-lightGray bg-transparent px-1 py-2 focus:outline-none focus:border-green"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="block text-sm mb-1 text-left text-black">
              Adresse email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre adresse email"
              className="w-full border-b border-lightGray bg-transparent px-1 py-2 focus:outline-none focus:border-green"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-1 text-left text-black">
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Tapez votre message..."
            className="w-full border-b border-lightGray bg-transparent px-1 py-2 focus:outline-none focus:border-green"
            required
          ></textarea>
        </div>

        <div className="pt-4">
          <MyReCAPTCHA onChange={setRecaptchaToken} />
        </div>

        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={handleChange}
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <div className="pt-4">
          <button
            type="submit"
            className="px-8 py-3 bg-green text-white hover:bg-white hover:text-green hover:border-green border rounded-md transition font-semibold tracking-wider"
          >
            ENVOYER →
          </button>
        </div>
      </form>
      {isSent && (
        <p className="text-green text-sm font-medium mt-4">
          Votre message a bien été envoyé. Merci !
        </p>
      )}
    </>
  );
}