import { Info } from "../Data/Info";

function Bio() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-8 py-6">
      {Info.bio.map((paragraph, index) => (
        <h6
          className="text-[#afafaf] my-8 text-xs sm:text-sm md:text-base md:text-justify leading-snug"
          key={index}
        >
          {paragraph}
        </h6>
      ))}
    </div>
  );
}

export default Bio;
