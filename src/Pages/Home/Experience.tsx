import ExperienceCard from "../../Components/ExperienceCard";
import { ExperienceData } from "../../Data/Experience";

function Experience() {
  return (
    <div className="bg-black min-h-screen w-full p-5 text-white flex flex-col items-center relative">
      {ExperienceData.map((exp, index) => (
        <div
          key={index}
          className="relative w-full max-w-2xl flex items-center"
        >
          {index !== 0 && (
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-5 h-10 w-[2px] bg-gray-600"></div>
          )}
          <ExperienceCard {...exp} />
        </div>
      ))}
    </div>
  );
}

export default Experience;
