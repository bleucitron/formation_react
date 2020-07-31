import React, { useState } from 'react';

import './TrainedPokemon.scss';

function TrainedPokemon(props) {
  const { trainedId, name, weight, src, remove } = props;

  const [exp, setExp] = useState(0);

  function gainExp() {
    setExp(e => e + 1);
  }

  return (
    <li
      className='TrainedPokemon'
      onClick={() => remove(trainedId)}
      onMouseMove={gainExp}
    >
      <div className='name'>{name}</div>
      <div className='weight'>{weight}</div>
      <div className='exp'>{exp}</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default TrainedPokemon;
