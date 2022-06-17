import { useState, useEffect } from 'react';

export function useAutoExp() {
  const [exp, setExp] = useState(0);
  const [interval, setExpInterval] = useState(500);

  useEffect(() => {
    const i = setInterval(gainExp, interval);

    return () => clearInterval(i);
  }, [interval]);

  function gainExp(inc = 10) {
    setExp(prevExp => prevExp + inc);
  }

  return { exp, gainExp, setExpInterval };
}
