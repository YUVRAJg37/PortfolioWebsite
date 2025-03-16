import ProjectCard from "../../Components/ProjectCard";
import { Project } from "../../Data/Project";

function Projects() {
  return (
    <div className="bg-black min-h-screen w-full p-5">
      {Project.map((project, index) => {
        return (
          <div key={index}>
            <h1 className="text-3xl font-bold text-[] ml-2 mt-10 mb-5 text-white [text-shadow:_2px_1px_0_rgb(27_251_249_/_100%),_-2px_-1px_0_rgb(255_63_74_/_100%)]">
              {project.title}
            </h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {project.projects.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    icon={project.icon}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
