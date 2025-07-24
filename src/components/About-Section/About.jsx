import { motion } from "framer-motion";
import {useState} from "react";
import ResumeModal from "./ResumeModal";
 
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaDatabase } from "react-icons/fa";
import { SiPhp, SiDotnet, SiMysql, SiXampp, SiTailwindcss, SiFramer, SiFlutter } from "react-icons/si";


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const iconWrapperClasses = "flex flex-col items-center w-20 transform transition duration-300 hover:scale-110 hover:-translate-y-1";
const iconClasses = "transition-colors duration-300";


const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-500"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 p-12">
            {/* Left Container - Image */}
            <div className="flex-1 flex items-center justify-center">
              <motion.img
                  src="/about-img.jpg"
                  loading="lazy"
                  alt="about-img"
                  className="rounded-2xl w-full max-w-[600px] object-cover shadow-lg hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_4px_rgba(76,167,113,0.6)] transition-all duration-500 ease-in-out"
                  initial={{ opacity: 0, y: 0.95 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
            </div>

            {/* Right Container */}
            <div className="flex-1 flex flex-col gap-8">

              {/* About Me Section */}
              <motion.div className="bg-[c8c8c9] dark:bg-[#060606] rounded-xl shadow-md p-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
              >
                    {/* Heading */}
                    <h2 className="text-6xl font-bold mb-4">
                        <span className="text-gray-900 dark:text-gray-100">About</span>
                        <span className="text-[#4ca771]"> Me</span>
                    </h2>
                    {/* Description */}
                    <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
                      I'm a passionate web developer with a strong focus on building modern, responsive, and interactive web applications. I enjoy blending technology and creativity, bringing ideas to life through clean, efficient code paired with thoughtful, user-centered design. Whether it's crafting intuitive interfaces or developing scalable features, I aim to create experiences that are both functional and visually engaging.
                    </p>

                    {/* Resume Button */}
                    <div className="mt-6 flex justify-center">
                      <button
                        onClick={() => {
                          if (window.innerWidth < 768) {
                            window.open("/Aaron Vincent Escondo-Resume(final).pdf", "_blank");
                          } else {
                            setShowModal(true);
                          }
                        }}
                        className="w-[260px] md:w-auto px-6 py-2 border border-black dark:border-white text-black dark:text-white rounded transition duration-300 hover:bg-[#4CA771] hover:text-white hover:border-[#4CA771]"
                      >
                        Download CV
                      </button>
                    </div>
                    {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
              </motion.div>


          
              {/* Tools and Frameworks Section */}
              <motion.div className="bg-[c8c8c9] dark:bg-[#060606] rounded-xl shadow-md p-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-gray-900 dark:text-gray-100">Tools and </span>
                  <span className="text-[#4ca771]">Frameworks</span>
                </h2>

                {/* Expertise Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-600 dark:text-gray-400">Expertise</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                      <div className={iconWrapperClasses}>
                        <FaHtml5 size={40} className={`${iconClasses} text-orange-600 hover:text-orange-500`} />
                        <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">HTML</span>
                      </div>

                      <div className={iconWrapperClasses}>
                        <FaCss3Alt size={40} className={`${iconClasses} text-blue-600 hover:text-blue-500`} />
                        <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">CSS</span>
                      </div>

                      <div className={iconWrapperClasses}>
                        <FaJs size={40} className={`${iconClasses} text-yellow-400 hover:text-yellow-300`} />
                        <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">JavaScript</span>
                      </div>

                      <div className={iconWrapperClasses}>
                        <FaBootstrap size={40} className={`${iconClasses} text-purple-600 hover:text-purple-500`} />
                        <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">Bootstrap</span>
                      </div>

                      <div className={iconWrapperClasses}>
                        <SiPhp size={40} className={`${iconClasses} text-indigo-600 hover:text-indigo-500`} />
                        <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">PHP</span>
                      </div>
                    </div>
                </div>

                {/* Other Tools Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-600 dark:text-gray-400">Other</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                      <div className={iconWrapperClasses}>
                        <FaReact size={40} className={`${iconClasses} text-cyan-500 hover:text-cyan-400`} />
                        <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">React</span>
                      </div>

                      <div className={iconWrapperClasses}>
                        <SiDotnet size={40} className={`${iconClasses} text-blue-700 hover:text-blue-600`} />
                        <span className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">ASP.NET Core MVC(.Net 6)</span>
                      </div>

                      <div className={iconWrapperClasses}>
                        <SiTailwindcss size={40} className={`${iconClasses} text-sky-500 hover:text-sky-400`} />
                        <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">Tailwind</span>
                      </div>

                      <div className={iconWrapperClasses}>
                        <SiFlutter size={40} className={`${iconClasses} text-blue-400 hover:text-blue-300`} />
                        <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">Flutter</span>
                      </div>

                      <div className={iconWrapperClasses}>
                        <SiMysql size={40} className={`${iconClasses} text-orange-500 hover:text-orange-400`} />
                        <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">MySQL</span>
                      </div>

                      <div className={iconWrapperClasses}>
                        <FaDatabase size={40} className={`${iconClasses} text-red-700 hover:text-red-600`} />
                        <span className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">SQL Server</span>
                      </div>

                      <div className={iconWrapperClasses}>
                        <SiFramer size={40} className={`${iconClasses} text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-400`} />
                        <span className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">Framer Motion</span>
                      </div>
                    </div>

                </div>
              </motion.div>

            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
