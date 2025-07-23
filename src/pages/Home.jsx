import HeroSection from '../components/Home/HeroSection'
import WhatIDoSection from '../components/Home/WhatIDoSection'

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll scrol-smooth snap-none sm:snap-y sm:snap-mandatory">
      <section className="snap-start h-screen">
        <HeroSection />
      </section>
      <section className="snap-start h-screen">
        <WhatIDoSection />
      </section>
    </div>
  )
}