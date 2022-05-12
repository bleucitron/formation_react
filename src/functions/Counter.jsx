import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(100);
  const [exp, setExp] = useState(1000);

  useEffect(() => {
    console.log('Mounted');
    const id = setInterval(() => {
      console.log('i');
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    console.log('EXP');

    return () => console.log('Unmounted Exp');
  }, [exp]);

  return (
    <div className="Counter">
      <button onClick={() => setExp(prevExp => prevExp + 1)}>Exp</button>
      <div>{exp}</div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count
      </button>
      <div>{count}</div>
    </div>
  );
}

export default React.memo(Counter);
