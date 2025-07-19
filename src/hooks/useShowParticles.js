import { useEffect, useState } from "react";

export const useShowParticles = (sectionId = "home") => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowParticles(entry.isIntersecting),
      { threshold: 0.6 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionId]);

  return showParticles;
};
