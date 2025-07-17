import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaPhp,
  FaJsSquare,
  FaCode,
  FaGithub,
} from "react-icons/fa";
import {
  SiMysql,
  SiMariadb,
  SiTailwindcss,
  SiFramer,
  SiDotnet,
  SiXampp,
} from "react-icons/si";

// Tech icons mapping
const techIcons = {
  "React": <FaReact className="text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  "Framer Motion": <SiFramer className="text-pink-500" />,
  "PHP": <FaPhp className="text-indigo-600" />,
  "Javascript": <FaJsSquare className="text-yellow-400" />,
  "MySQL": <SiMysql className="text-blue-700" />,
  "XAMPP": <SiXampp className="text-orange-600" />,
  "ASP.NET Core (.NET 6)": <SiDotnet className="text-purple-800" />,
  "C#": <FaCode className="text-purple-500" />,
  "GitHub": <FaGithub />,
  "PhpMyAdmin": <SiMariadb className="text-orange-400" />,
  "SQL Server": <SiDotnet className="text-blue-900" />, 
};

// Card animation variant (fixes rendering issue)
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ProjectCard = ({ title, description, techStack, image, link, githublink, reverse }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      className="relative w-full max-w-6xl mx-auto px-4 py-6 overflow-visible"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={cardVariants}
    >
      <motion.div
        whileHover={{
          rotateX: -8,
          scale: 1.01,
          transition: { type: "spring", stiffness: 100, damping: 10 }
        }}
        className={`flex flex-col md:flex-row items-center justify-between gap-8 bg-[c8c8c9] dark:bg-[#060606] rounded-xl shadow-md p-6 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
        style={{
          transformStyle: "preserve-3d", // 3D
          perspective: 1000 // depth to the tilt
        }}
      >

            {/* Image Block */}
            <motion.div
              whileHover={{ rotate: 1, y: -10 }}
              transition={{ type: "spring", stiffness: 120 }}
              className={`w-full md:w-[50%] relative cursor-pointer ${
                reverse ? "md:-mr-16" : "md:-ml-16"
              }`}
              onClick={() => window.open(link, "_blank")}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Text Block */}
            <div className="md:w-[50%] w-full space-y-4 text-center md:text-left">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-s">{description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {techStack.map((tech, index) => (
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    key={index}
                    className="flex items-center gap-2 px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-black dark:text-neutral-100 text-sm font-medium rounded-full shadow hover:shadow-md cursor-default "
                  >
                    {techIcons[tech] || null}
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 flex-wrap justify-center">
                <button
                  onClick={() => window.open(link, "_blank")}
                  className="px-6 py-1 rounded-full font-semibold text-black dark:text-white border border-bg-neutral-100 dark:border-white transition duration-300 hover:bg-[#4CA771] hover:text-white hover:border-[#4CA771] inline-flex items-center"
                >
                  Take a Look
                </button>

                {/* GitHub Icon Button */}
                {githublink && (
                  <button
                    onClick={() => window.open(githublink, "_blank")}
                    aria-label="View on GitHub"
                    className="text-2xl text-gray-700 dark:text-gray-200 hover:text-[#4CA771] transition"
                  >
                    <FaGithub />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
  );
};

export default ProjectCard;
