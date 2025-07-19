import { useEffect, useState } from "react";

export const useLoading = (delay = 2000) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return loading;
};
