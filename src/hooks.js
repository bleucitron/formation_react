import { useState, useEffect } from 'react';

export function useExp(base = 1000, delay = 100, inc = 1) {
  const [exp, setExp] = useState(base);

  useEffect(() => {
    const id = setInterval(() => {
      setExp(e => e + inc);
    }, delay);

    return () => clearInterval(id);
  }, []);

  return [exp, setExp];
}
