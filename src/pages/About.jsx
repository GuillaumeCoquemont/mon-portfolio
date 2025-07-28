import AboutIntro from '../components/About/AboutIntro'
import AboutSection from '../components/About/AboutSection'

export default function About() {
  return (
     <div className="scroll-smooth md:snap-y md:snap-mandatory overflow-y-scroll h-screen">
      <section className="md:snap-start sm:min-h-screen">
        <AboutIntro />
      </section>
      <section className="md:snap-start sm:min-h-screen px-4 sm:px-8 pb-10">
        <AboutSection />
      </section>
    
    </div>
  )
}