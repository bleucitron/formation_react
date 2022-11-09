import { useState, useEffect } from 'react';

export function useExp(initialValue = 0, inc = 2, interval = 1000) {
  const [exp, setExp] = useState(initialValue);

  useEffect(() => {
    const id = setInterval(gainExp, interval);

    return () => clearInterval(id);
  }, []);

  function gainExp() {
    const value = Math.floor(Math.random() * inc);
    setExp(xp => xp + value);
  }

  function addExp(value = 0) {
    setExp(xp => xp + value);
  }

  return { exp, addExp };
}
