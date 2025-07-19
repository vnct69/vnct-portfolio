import { usePreferredTheme } from "./hooks/usePreferredTheme";
import { useLoading } from "./hooks/useLoading";
import { useShowParticles } from "./hooks/useShowParticles";

import Loader from "./Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero-Section/Hero";
import ParticlesBackground from "./components/Hero-Section/ParticlesBackground";
import Projects from "./components/Project-Section/Projects";
import About from "./components/About-Section/About";
import Education from "./components/Education-Section/Education";

import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [theme, setTheme] = usePreferredTheme();
  const loading = useLoading(2000);
  const showParticles = useShowParticles("home");

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <div className="relative overflow-x-hidden">
          <Navbar />
          {showParticles && <ParticlesBackground />}
          <Hero />

          {/* Motivational Quote Banner */}
          <div className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#c8c8c9] dark:bg-[#060606] text-center transition-colors duration-500">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight drop-shadow-sm tracking-tight"
            >
              <span className="block text-black dark:text-white">
                "Stay genuine, tables 
              </span>
              <span className="block text-[#4F46E5] dark:text-[#4ca771] mt-2">
                will always turn."
              </span>
            </motion.h2>
          </div>

          <Projects theme={theme} />
          <About />
          <Education />

          <h1 className="text-center text-2xl font-bold mt-10 mb-6">HI</h1>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
