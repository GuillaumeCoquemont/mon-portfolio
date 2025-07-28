import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FeaturedProjectsSection() {
  return (
    <section className="sm:min-h-screen snap-start pt-4 sm:pt-24 pb-10 flex flex-col justify-center items-center bg-green text-white">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projets en vedette
      </motion.h2>
      <motion.p
        className="pb-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Découvrez mes réalisations en alternance et mes projets d'étude. 
        Des applications web modernes, des plateformes e-commerce et des outils métier.
      </motion.p>

      <div className="w-full max-w-6xl relative">
        {/* Flèche précédente */}
        <div className="swiper-button-prev !text-white !bg-white/20 !w-12 !h-12 !rounded-full !left-0 !top-1/2 !-translate-y-1/2 hover:!bg-white/30 transition-colors duration-300 after:!text-lg"></div>
        
        {/* Flèche suivante */}
        <div className="swiper-button-next !text-white !bg-white/20 !w-12 !h-12 !rounded-full !right-0 !top-1/2 !-translate-y-1/2 hover:!bg-white/30 transition-colors duration-300 after:!text-lg"></div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
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
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/projects/portfolio" className="block">
                <div className="bg-white border border-gray-200 rounded-xl py-8 px-6 shadow-sm hover:shadow-md transition duration-300">
                  <h3 className="text-xl text-green font-semibold mb-2">Portfolio interactif</h3>
                  <p className="text-darkGray mb-4 text-sm">
                    Portfolio moderne avec animations fluides, scroll snap et design responsive. 
                    Développé avec les dernières technologies web.
                  </p>
                  <span className="text-sm text-green">React • Tailwind • Framer Motion</span>
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/projects/vehidoc" className="block">
                <div className="bg-white border border-gray-200 rounded-xl py-8 px-6 shadow-sm hover:shadow-md transition duration-300">
                  <h3 className="text-xl text-green font-semibold mb-2">Véhidoc</h3>
                  <p className="text-darkGray mb-4 text-sm">
                    Plateforme web complète pour automatiser la génération de documents administratifs. 
                    Projet réalisé en alternance avec impact réel.
                  </p>
                  <span className="text-sm text-green">React • Node.js • MySQL • Express</span>
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/projects/cyna" className="block">
                <div className="bg-white border border-gray-200 rounded-xl py-8 px-6 shadow-sm hover:shadow-md transition duration-300">
                  <h3 className="text-xl text-green font-semibold mb-2">Cyna - E-commerce SaaS</h3>
                  <p className="text-darkGray mb-4 text-sm">
                    Plateforme e-commerce sécurisée pour solutions SaaS (SOC, EDR). 
                     Projet d'étude : Interface web et mobile avec un back-office pour une gestion complète.
                  </p>
                  <span className="text-sm text-green">React • Node.js • Docker • JWT</span>
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/projects/hideo" className="block">
                <div className="bg-white border border-gray-200 rounded-xl py-8 px-6 shadow-sm hover:shadow-md transition duration-300">
                  <h3 className="text-xl text-green font-semibold mb-2">Hidéo - Refonte site</h3>
                  <p className="text-darkGray mb-4 text-sm">
                    Refonte complète du site d'Idéo-Marketing avec nouvelle identité visuelle. 
                    Optimisation UX et performance avec Bricks Builder.
                  </p>
                  <span className="text-sm text-green">WordPress • Bricks Builder</span>
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}