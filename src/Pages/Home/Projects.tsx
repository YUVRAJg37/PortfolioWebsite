import { motion } from "framer-motion";
import ProjectCard from "../../Components/ProjectCard";
import { Project } from "../../Data/Project";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
};

function Projects() {
  return (
    <div className="bg-black min-h-screen w-full p-5">
      {Project.map((project, index) => {
        return (
          <div key={index}>
            <h1 className="text-3xl font-bold text-white ml-15 mt-10 mb-5 [text-shadow:_2px_1px_0_rgb(27_251_249_/_100%),_-2px_-1px_0_rgb(255_63_74_/_100%)]">
              {project.title}
            </h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center place-items-center">
              {project.projects.map((project, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index} // Pass index to stagger animation
                    className="w-full flex justify-center"
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      link={project.link}
                      icon={project.icon}
                      tags={project.tags}
                    />
                  </motion.div>
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
