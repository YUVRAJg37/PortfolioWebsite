import * as Icons from "react-icons/fa";
import { TProjectType } from "../Types/Project";

export default function ProjectCard({
  title,
  description,
  icon,
  link,
  tags,
}: TProjectType) {
  const IconComponent = Icons[icon as keyof typeof Icons];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0c0c0c] border border-[#414141]  hover:bg-[#1a1a1a] shadow-lg rounded-xl p-5 md:p-6 lg:p-8 
                 flex flex-col justify-between text-left hover:shadow-xl 
                 transition-shadow duration-300 w-full max-w-md cursor-pointer 
                 h-64"
    >
      {IconComponent && (
        <IconComponent size={40} className="text-white mb-3 md:mb-4" />
      )}
      <div className="flex flex-col flex-grow">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
          {title}
        </h1>
        <p
          className="mt-2 text-sm md:text-base text-[#afafaf] break-words 
                     overflow-hidden line-clamp-3"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
      </div>
      {tags.length > 0 && (
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-3 py-1 rounded-full bg-[#1f1f1f] text-[#afafaf]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
