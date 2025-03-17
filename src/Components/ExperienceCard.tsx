import { TExperience } from "../Types/Experience";
import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

function ExperienceCard({
  designation,
  company,
  location,
  startDate,
  endDate,
  duration,
  description,
  companyLogo,
  companyWebsite,
}: TExperience) {
  return (
    <div className="bg-[#0c0c0c] shadow-md rounded-lg mb-10 mt-10 p-3 md:p-5 border border-[#414141] hover:shadow-lg transition-all duration-300 w-full sm:w-[450px] md:w-[600px] lg:w-[800px] mx-auto">
      <div className="flex items-center space-x-4 flex-wrap">
        <img
          src={companyLogo}
          alt={`${company} logo`}
          className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover"
        />
        <div>
          <h3 className="text-sm md:text-lg font-semibold text-white">
            {designation}
          </h3>
          <a
            href={companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center space-x-1"
          >
            <FaBuilding className="text-white" />
            <span className="text-sm md:text-base">{company}</span>
          </a>
        </div>
      </div>
      <div className="mt-3 text-white text-xs md:text-sm">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-white" />
          <span>{location}</span>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <FaCalendarAlt className="text-white" />
          <span>
            {startDate} - {endDate} ({duration})
          </span>
        </div>
      </div>
      <ul className="mt-3 text-[#afafaf] list-disc list-inside space-y-1 text-xs md:text-sm">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
