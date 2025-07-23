import HeroSection from '../components/Home/HeroSection'
import WhatIDoSection from '../components/Home/WhatIDoSection'
import OverviewSection from '../components/Home/OverviewSection'

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-none sm:snap-y sm:snap-mandatory">
      <section className="snap-start h-screen px-4 sm:px-8">
        <HeroSection />
      </section>
      <section className="snap-start h-screen px-4 sm:px-8">
        <WhatIDoSection />
      </section>
      <section className="snap-start h-screen px-4 sm:px-8">
        <OverviewSection />
      </section>
    </div>
  )
}