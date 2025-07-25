import HeroSection from '../components/Home/HeroSection'
import WhatIDoSection from '../components/Home/WhatIDoSection'
import OverviewSection from '../components/Home/OverviewSection'
import FeaturesProjectsSection from '../components/Home/FeaturesProjectsSection'
import ValuesSection from '../components/Home/ValuesSection'
import HobbySection from '../components/Home/HobbySection'

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-none sm:snap-y sm:snap-mandatory">
      <section className="snap-start sm:h-screen px-4 sm:px-8 pb-10">
        <HeroSection />
      </section>
      <section className="snap-start sm:h-screen px-4 sm:px-8 pb-10">
        <WhatIDoSection />
      </section>
      <section className="snap-start sm:h-screen px-4 sm:px-8 pb-10">
        <OverviewSection />
      </section>
      <section className="snap-start sm:h-screen">
        <FeaturesProjectsSection />
      </section>
      <section className="snap-start sm:h-screen px-4 sm:px-8 pb-10">
        <ValuesSection />
      </section>
      <section className="snap-start sm:h-screen px-4 sm:px-8 pb-10">
        <HobbySection />
      </section>
    </div>
  )
}