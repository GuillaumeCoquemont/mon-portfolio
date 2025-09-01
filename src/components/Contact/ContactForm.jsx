// src/components/Contact/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);
    // Ici tu peux gérer l'envoi des données (ex: fetch vers un backend)
    alert("Message envoyé !");
    setFormData({ nom: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="md:flex md:gap-6 space-y-6 md:space-y-0">
        <div className="flex-1">
          <label className="block text-sm mb-1 text-left text-black">
            Votre nom
          </label>
          <input
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
          <label className="block text-sm mb-1 text-left text-black">
            Adresse email
          </label>
          <input
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
        <label className="block text-sm mb-1 text-left text-black">
          Votre message
        </label>
        <textarea
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
        <button
          type="submit"
          className="px-8 py-3 bg-green text-white hover:bg-white hover:text-green hover:border-green border rounded-md transition font-semibold tracking-wider"
        >
          ENVOYER →
        </button>
      </div>
    </form>
  );
}