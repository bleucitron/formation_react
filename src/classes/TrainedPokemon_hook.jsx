import React, { useEffect, useState } from 'react';

function TrainedPokemon({ name, weight, src, releaseMe }) {
  const [exp, setExp] = useState(0);

  useEffect(() => {
    console.log(name, "commence à gagner de l'expérience");
    const i = setInterval(train, 1000);

    return () => clearInterval(i);
  }, []);

  function train() {
    setExp(prevExp => prevExp + 1);
  }

  return (
    <li className='TrainedPokemon' onMouseMove={train} onClick={releaseMe}>
      <div className='name'>{name}</div>
      <div className='weight'>{weight}</div>
      {src && <img src={src} alt={name} />}
      <div className='exp'>{exp}</div>
    </li>
  );
}

export default TrainedPokemon;
