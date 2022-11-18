import { useState, useEffect } from 'react';

export function useExp(init) {
  const [value, setValue] = useState(init);

  useEffect(() => {
    const id = setInterval(() => {
      setValue(v => v + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return [value, setValue];
}
