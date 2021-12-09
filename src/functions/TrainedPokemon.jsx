import React, { useState, useEffect } from 'react';

function TrainedPokemon(props) {
  const { name, weight, src, remove } = props;

  const [exp, setExp] = useState(0);
  const [nickname, setNickname] = useState('Copain');

  function gainExp() {
    setExp(prevExp => prevExp + 10);
  }

  function updateNickname(event) {
    setNickname(event.target.value);
  }

  useEffect(() => {
    const interval = setInterval(gainExp, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <li className="TrainedPokemon" onClick={remove}>
      <div className="name">{name}</div>
      <div className="weight">{weight}</div>
      <div className="experience">{exp}</div>
      {src && <img src={src} alt={name} />}
      <input
        value={nickname}
        onClick={e => e.stopPropagation()}
        onChange={updateNickname}
      />
      <div>{nickname}</div>
    </li>
  );
}

export default TrainedPokemon;
