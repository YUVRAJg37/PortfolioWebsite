import { Info } from "../Data/Info";
import { motion } from "framer-motion";

function Bio() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-8 py-6">
      {Info.bio.map((paragraph, index) => (
        <motion.h6
          className="text-[#afafaf] my-8 text-xs sm:text-sm md:text-base md:text-justify leading-snug"
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
        >
          {paragraph}
        </motion.h6>
      ))}
    </div>
  );
}

export default Bio;
