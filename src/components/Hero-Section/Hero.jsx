import { useState, useEffect } from "react";

import ParticlesBackground from "./ParticlesBackground";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa"


const Hero = () => {

  const [index, setIndex] = useState(0);

  const rotatingItems = [
    "Web Developer.",
    "UI/UX Designer.",
    "Video Editor.",
  ];

  // Rotating text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-gray-100 dark:bg-black dark:text-white transition-colors duration-500"
    >


      
      {/* Background Particles */}
      <ParticlesBackground />

    <div className="flex flex-col md:flex-row items-center justify-center max-w-8xl mx-auto w-full">
      {/* Left - Image */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src="/hero-img.png"
          alt="Aaron Vincent"
          className="w-auto h-auto object-cover rounded-full border-4 shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_4px_rgba(76,167,113,0.6)]"
          style={{ borderColor: "#4CA771" }}
        />
      </div>

      {/* Right - Text */}
      <div className="md:w-1/3 mt-10 md:mt-0 md:pl-12 space-y-4 text-center md:text-left">
        {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            {/* Subheading */}
            <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100">
              Creativity, logic, loops, and
            </p>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#4ca771] drop-shadow-md leading-tight">
              a little bit of luck
            </h1>
          </motion.div>

          {/* Subheading with Rotating Text */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-2 text-lg md:text-2xl font-medium text-gray-800 dark:text-gray-300">
            <span className="italic">It's Aaron, a</span>

            <motion.div
              layout
              className="px-2 py-1 flex items-center gap-1 rounded-md bg-gray-100 dark:bg-[#1a1a1a] bg-opacity-50 dark:bg-opacity-40 backdrop-blur-sm text-[#4ca771] dark:text-[#4ca771]"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingItems[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {rotatingItems[index].replace("a", "")}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* View Projects Button */}
          <div className="mt-6">
            <button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-[260px] md:w-auto px-6 py-2 border border-black dark:border-white text-black dark:text-white rounded transition duration-300 hover:bg-[#4CA771] hover:text-white hover:border-[#4CA771]"
            >
              View Projects
            </button>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-default text-[#4CA771]"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaChevronDown size={28} />
          </motion.div>


        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
