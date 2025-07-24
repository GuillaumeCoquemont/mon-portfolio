import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

export default function FeaturedProjectsSection() {
  return (
    <section className="min-h-[400px] sm:min-h-screen snap-start pt-0 sm:pt-32 flex flex-col justify-center items-center bg-green text-white">
      <h2 className="text-3xl font-bold mb-8 text-center px-4">Projets en vedette</h2>
      <p className="pb-8 px-4 text-center">Voici un aperçu des projets que j'ai pu réalisé en entreprise ou bien des projets personnels.</p>

  <div className="w-full max-w-6xl px-4">
    <Swiper
      modules={[Navigation]}
      spaceBetween={24}
      navigation
      slidesPerView={1}
      breakpoints={{
        425: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-10"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <Link to="/projects/portfolio" className="block">
          <div className="bg-white border border-gray-200 rounded-xl py-8 px-6 shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-xl text-green font-semibold mb-2">Portfolio interactif</h3>
            <p className="text-darkGray mb-4 text-sm">
              Site personnel en React avec animations fluides et navigation dynamique.
            </p>
            <span className="text-sm text-green">React • Tailwind • React Router</span>
          </div>
        </Link>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <Link to="/projects/vehidoc" className="block">
          <div className="bg-white border border-gray-200 rounded-xl py-8 px-6 shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-xl text-green font-semibold mb-2">Véhidoc</h3>
            <p className="text-darkGray mb-4 text-sm">
              Plateforme web pour générer automatiquement les documents administratifs de vente de véhicules.
            </p>
            <span className="text-sm text-green">React • Express • MySQL</span>
          </div>
        </Link>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <Link to="/projects/cyna" className="block">
          <div className="bg-white border border-gray-200 rounded-xl py-8 px-6 shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-xl text-green font-semibold mb-2">Cyna</h3>
            <p className="text-darkGray mb-4 text-sm">
              Projet d'étude : Plateforme e-commerce sécurisée de solutions SaaS (SOC, EDR) avec interface web et mobile.
            </p>
            <span className="text-sm text-green">React • Express • Docker</span>
          </div>
        </Link>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <Link to="/projects/hideo" className="block">
          <div className="bg-white border border-gray-200 rounded-xl py-8 px-6 shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-xl text-green font-semibold mb-2">Hidéo (Bricks)</h3>
            <p className="text-darkGray mb-4 text-sm">
              Refonte complète du site d’Idéo-Marketing sous WordPress avec Bricks Builder et nouvelle identité visuelle.
            </p>
            <span className="text-sm text-green">WordPress • Bricks • Identité visuelle</span>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  </div>
</section>
  );
}