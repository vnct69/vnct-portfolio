import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import ParticlesBackground from "./Hero-Section/ParticlesBackground";

const navItems = ["Home", "Projects", "About", "Education", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDevAnim, setShowDevAnim] = useState(false);
  const [mobileDevAnim, setMobileDevAnim] = useState(false);

  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const timeout = setTimeout(() => setShowDevAnim(true), 700);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setMobileDevAnim(false);
      const timeout = setTimeout(() => setMobileDevAnim(true), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const linkClass = "cursor-pointer transition duration-300 hover:text-[#4ca771]";

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 bg-gray-100 bg-opacity-90 text-black dark:bg-black dark:bg-opacity-90 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-start">
        {/* Left: Logo */}
        <div className="text-2xl font-bold tracking-wide flex items-center">
          <span>vnct</span>
          {showDevAnim && (
            <motion.span
              initial={{ y: 10, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-[#4ca771] ml-1"
            >
              .dev
            </motion.span>
          )}
        </div>

        {/* Right: Nav Links + Theme Toggle + Mobile Button */}
        <div className="flex items-center space-x-6 ml-auto">
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                spy
                offset={-70}
                duration={500}
                className={linkClass}
                activeClass="text-[#4ca771] font-semibold"
              >
                {item}
              </Link>
            ))}
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
              <span className="text-2xl">&#9776;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{
              opacity: 1,
              backdropFilter:
                theme === "dark" ? "blur(20px)" : "blur(60px)",
            }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 z-40"
          />

            <motion.div
              key="mobile-menu"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 text-black dark:text-white z-50 flex flex-col p-6 overflow-hidden"
            >
              {/* Particle Background for Mobile Menu */}
              <ParticlesBackground />


              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold flex items-center">
                  <span>vnct</span>
                  {mobileDevAnim && (
                    <motion.span
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="text-[#4ca771] ml-1"
                    >
                      .dev
                    </motion.span>
                  )}
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-3xl text-gray-500 hover:text-white dark:hover:text-gray-300"
                  aria-label="Close menu"
                >
                  &times;
                </button>
              </div>

              <div className="text-bold mt-10 flex flex-col items-center justify-center flex-grow space-y-6 text-xl">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    to={item.toLowerCase()}
                    smooth
                    spy
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer hover:text-[#4ca771] transition"
                    activeClass="text-[#4ca771] font-semibold"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
