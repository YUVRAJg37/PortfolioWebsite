import * as Icons from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  icon: string;
};

export default function ProjectCard({
  title,
  description,
  link,
  icon,
}: ProjectCardProps) {
  const IconComponent = Icons[icon as keyof typeof Icons];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0c0c0c] hover:bg-[#1a1a1a] shadow-lg rounded-xl p-5 md:p-6 lg:p-8 flex flex-col items-start text-left hover:shadow-xl transition-shadow duration-300 w-full max-w-md cursor-pointer"
    >
      {IconComponent && (
        <IconComponent size={40} className="text-white mb-3 md:mb-4" />
      )}
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2">
        {title}
      </h1>
      <p className="text-sm md:text-base text-[#afafaf] mb-4 break-words whitespace-normal w-full overflow-hidden">
        {description}
      </p>
    </a>
  );
}
