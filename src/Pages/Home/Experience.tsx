import { motion } from "framer-motion";
import ExperienceCard from "../../Components/ExperienceCard";
import { ExperienceData } from "../../Data/Experience";

function Experience() {
  return (
    <div className="bg-black min-h-screen w-full p-5 text-white flex flex-col items-center relative">
      {ExperienceData.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative w-full max-w-2xl flex items-center"
        >
          {index !== 0 && (
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-5 h-10 w-[2px] bg-gray-600"></div>
          )}
          <ExperienceCard {...exp} />
        </motion.div>
      ))}
    </div>
  );
}

export default Experience;
