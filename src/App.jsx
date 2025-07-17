import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./Loader";
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero-Section/Hero";
import Projects from "./components/Project-Section/Projects";
import ParticlesBackground from "./components/Hero-Section/ParticlesBackground";
import About from "./components/About-Section/About";

function App() {
  const [loading, setLoading] = useState(true);
  const [showParticles, setShowParticles] = useState(false);

  const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const localTheme = localStorage.getItem("theme");
      if (!localTheme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);


  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowParticles(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    observer.observe(homeSection);
    return () => observer.disconnect();
  }, []);


  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <>
        <div className="relative overflow-x-hidden">
          <Navbar />
          {showParticles && <ParticlesBackground />}
          <Hero/>
          <Projects theme={theme}/>
          <About></About>
          
          <h1 className="text-center text-2xl font-bold mt-10 mb-6">
           HI
          </h1>
          
        </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
