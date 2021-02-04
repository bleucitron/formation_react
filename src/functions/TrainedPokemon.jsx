import React, { useState } from 'react';

function TrainedPokemon(props) {
  const { name, weight, src } = props;

  const [exp, setExp] = useState(0);
  const [nickname, setNickname] = useState('');

  function gainExp() {
    setExp(exp => exp + 10);
  }

  function updateNickname(e) {
    setNickname(e.target.value);
  }

  return (
    <li className="TrainedPokemon" onMouseMove={gainExp}>
      <div className="name">{name}</div>
      <input
        value={nickname}
        className="nickname"
        onChange={updateNickname}
        placeholder="Entrez un surnom"
      />
      <div className="exp">{exp}</div>
      <div className="weight">{weight} kg</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default TrainedPokemon;
