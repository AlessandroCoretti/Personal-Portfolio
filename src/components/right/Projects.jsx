import Freeitinerary from "./projects/Freeitinerary";
import MeteoApp from "./projects/MeteoApp";
import Netflix from "./projects/Netflix";

function Projects() {
  return (
    <section id="projects">
      <div className="flex flex-col mb-10 lg:mb-0">
        <Freeitinerary />
        <Netflix />
        <MeteoApp />
      </div>
    </section>
  );
}

export default Projects;
