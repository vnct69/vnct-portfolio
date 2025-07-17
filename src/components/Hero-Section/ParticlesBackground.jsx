import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const [isDark, setIsDark] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Detect theme mode
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const particleColor = isDark ? "#888888" : "#004030"; // dark accent or light primary

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10 pointer-events-none"
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "transparent" }
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 }
          }
        },
        particles: {
          color: { value: particleColor },
          links: {
            color: particleColor,
            distance: 125,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 1
          },
          number: {
            density: { enable: true, area: 800 },
            value: 40
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground;
