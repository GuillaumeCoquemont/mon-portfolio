import HeroSection from '../components/Home/HeroSection'
import WhatIDoSection from '../components/Home/WhatIDoSection'
import OverviewSection from '../components/Home/OverviewSection'
import FeaturesProjectsSection from '../components/Home/FeaturesProjectsSection'
import ValuesSection from '../components/Home/ValuesSection'
import HobbySection from '../components/Home/HobbySection'

export default function Home() {
  return (
    <div className="scroll-smooth md:snap-y md:snap-mandatory overflow-y-scroll h-screen">
      <section className="md:snap-start sm:min-h-screen">
        <HeroSection />
      </section>
      <section className="md:snap-start sm:min-h-screen px-4 sm:px-8 pb-10">
        <WhatIDoSection />
      </section>
      <section className="md:snap-start sm:min-h-screen px-4 sm:px-8 pb-10">
        <OverviewSection />
      </section>
      <section className="md:snap-start sm:min-h-screen pb-10">
        <FeaturesProjectsSection />
      </section>
      <section className="md:snap-start sm:min-h-screen px-4 sm:px-8 pb-10">
        <ValuesSection />
      </section>
      <section className="md:snap-start sm:min-h-screen px-4 sm:px-8 pb-10">
        <HobbySection />
      </section>
    </div>
  )
}