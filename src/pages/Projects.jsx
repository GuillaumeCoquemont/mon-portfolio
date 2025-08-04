import ProjectsIntro from "../components/Project/ProjectsIntro";
import ProjectsGrid from "../components/Project/ProjectsGrid";

export default function Projects() {
  return (
    <div className="scroll-smooth md:snap-y md:snap-mandatory overflow-y-scroll h-screen">
      <section className="md:snap-start sm:min-h-screen">
        <ProjectsIntro />
      </section>
      <section className="md:snap-start sm:min-h-screen">
        <ProjectsGrid />
      </section>
    </div>
  );
} 