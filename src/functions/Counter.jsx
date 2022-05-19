import React from 'react';
import { useExp } from '../hooks';

function Counter() {
  const [exp, setExp] = useExp();

  return (
    <div className="Counter">
      <button onClick={() => setExp(prevExp => prevExp - 100)}>Exp - 1</button>
      <div>{exp}</div>
      <button onClick={() => setExp(prevExp => prevExp + 100)}>Exp + 1</button>
    </div>
  );
}

export default React.memo(Counter);
