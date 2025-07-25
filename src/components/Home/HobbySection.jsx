export default function Hobby(){
    const cards = [
        { icon: "📷", title: "Photographie", desc: "Capturer des instants du quotidien et explorer la lumière." },
        { icon: "🥾", title: "Randonnée", desc: "Explorer la nature et se ressourcer en plein air." },
        { icon: "🍳", title: "Cuisine", desc: "Découvrir de nouvelles saveurs et expérimenter des recettes." },
        { icon: "🎮", title: "Jeux vidéo", desc: "Plonger dans des univers interactifs et stimulants." },
        { icon: "🌍", title: "Voyages", desc: "Découvrir de nouvelles cultures et élargir ses horizons." },
        { icon: "💻", title: "Tech & apprentissage", desc: "Se former continuellement aux nouvelles technologies." },
        { icon: "📚", title: "Développement personnel", desc: "Lire, s’améliorer, gagner en clarté et en équilibre." },
        { icon: "🤝", title: "Engagement associatif", desc: "Contribuer à des causes et projets qui ont du sens." }
    ];

    return (
        <section
        id="hobby"
        role="region"
        aria-label="Mes hobbies et passions"
        className="sm:min-h-screen snap-start pt-0 sm:pt-24 flex flex-col justify-center items-center bg-white text-white"
        >
        <h2 className="text-4xl font-bold mb-6 text-green">Mes hobbies & passions</h2>
        <div className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map(({icon, title, desc}) => (
                <div key={title} className="bg-green rounded-lg p-6 shadow-md flex flex-col items-center text-center">
                    <div className="text-4xl mb-4">{icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-lightGray text-sm">{desc}</p>
                </div>
            ))}
        </div>
        </section>
    );
}