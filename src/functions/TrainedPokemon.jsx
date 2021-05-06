import React, { useState } from 'react';
import Pokemon from '../functions/Pokemon';

function TrainedPokemon(props) {
  const [exp, setExp] = useState(0);
  const [name, setName] = useState(props.name);

  function gainExp() {
    setExp(e => e + 1);
  }

  function changeName(e) {
    setName(e.target.value);
  }

  return (
    <div onMouseMove={gainExp}>
      <Pokemon {...props} name={name} exp={exp} />
      <input value={name} name="name" onChange={changeName} />
    </div>
  );
}

export default React.memo(TrainedPokemon);
