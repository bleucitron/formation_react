import React from 'react';
import { useExp } from '../hooks';

function TrainedPokemon(props) {
  const { name, src, releaseSelf } = props;

  const [exp, setExp] = useExp(50, 1000, 10);

  function gainExp() {
    setExp(prevXp => prevXp + 1);
  }

  return (
    <li className="TrainedPokemon" onMouseMove={gainExp}>
      <div className="name">{name}</div>
      <div className="exp">{exp}</div>
      <button onClick={releaseSelf}>Libérer</button>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default TrainedPokemon;
