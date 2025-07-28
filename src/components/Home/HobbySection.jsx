import { motion } from 'framer-motion';

export default function Hobby(){
    const cards = [
        { 
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ), 
            title: "Photographie", 
            desc: "Capturer des instants du quotidien et explorer la lumière pour développer ma créativité visuelle." 
        },
        { 
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ), 
            title: "Randonnée", 
            desc: "Explorer la nature pour se ressourcer et développer ma persévérance et ma capacité d'adaptation." 
        },
        { 
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ), 
            title: "Veille technologique", 
            desc: "Se former continuellement aux nouvelles technologies et rester à jour sur les tendances du développement web." 
        },
        { 
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
            ), 
            title: "Voyages", 
            desc: "Découvrir de nouvelles cultures pour élargir mes horizons et développer ma curiosité et mon ouverture d'esprit." 
        },
        { 
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ), 
            title: "Développement personnel", 
            desc: "Lire et s'améliorer continuellement pour gagner en clarté, en équilibre et en efficacité professionnelle." 
        },
        { 
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ), 
            title: "Engagement associatif", 
            desc: "Contribuer à des causes qui ont du sens et développer mes compétences en travail d'équipe et communication." 
        }
    ];

    return (
        <section
        id="hobby"
        role="region"
        aria-label="Mes hobbies et passions"
        className="min-h-[600px] sm:min-h-screen snap-start pt-4 sm:pt-24 flex flex-col justify-center items-center bg-white text-white"
        >
        <motion.h2
          className="text-4xl font-bold mb-8 text-green text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mes hobbies & passions
        </motion.h2>
        <div className="w-full max-w-6xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map(({icon, title, desc}, index) => (
                <motion.div
                  key={title}
                  className={`rounded-lg p-6 shadow-md flex flex-col items-center text-center transition-transform hover:scale-105 ${
                    index % 3 === 0 ? 'bg-green' : 
                    index % 3 === 1 ? 'bg-green/90' : 'bg-green/80'
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                    <div className="text-white mb-4">{icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{desc}</p>
                </motion.div>
            ))}
        </div>
        </section>
    );
}