import SkillsIntroSection from '../components/Skills/SkillsIntro'
import SkillsGrid from '../components/Skills/SkillsGrid'

export default function Skills() {
  return (
    <div className="scroll-smooth md:snap-y md:snap-mandatory overflow-y-scroll h-screen">
      <section className="md:snap-start sm:min-h-screen">
        <SkillsIntroSection />
      </section>
      <section className="md:snap-start sm:min-h-screen ">
        <SkillsGrid />
      </section>
    </div>
  );
}