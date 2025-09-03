import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <footer className="bg-green border-t border-gray-300 text-white py-4">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Accueil</Link></li>
            <li><Link to="/about" className="hover:underline">À propos</Link></li>
            <li><Link to="/projects" className="hover:underline">Projets</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Réseaux sociaux</h3>
          <ul className="space-y-1">
            <li>
              <a href="https://www.linkedin.com/in/guillaume-coquemont/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/guillaumecoquemont" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Guillaume Coquemont</p>
          <p>
            Email :{" "}
            <a
              href="mailto:contact@guillaumecoquemont.fr"
              className="underline hover:text-lightGray-200 transition"
            >
              contact@guillaumecoquemont.fr
            </a>
          </p>
          <div>
            {!showPhone ? (
              <button
                onClick={() => setShowPhone(true)}
                className="mt-2 text-sm underline text-white hover:text-lightGray-200 transition"
              >
                Afficher le numéro de téléphone
              </button>
            ) : (
              <p className="mt-2">
                Téléphone :{" "}
                <a
                  href="tel:0602735516"
                  className="underline hover:text-lightGray-200 transition"
                >
                  06 02 73 55 16
                </a>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-lightGray-600">
        &copy; {new Date().getFullYear()} Mon Portfolio. Designed by Guillaume Coquemont.
      </div>
    </footer>
  );
}