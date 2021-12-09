import React from 'react';

function Pokemon(props) {
  const { name, weight, sprites, add } = props;

  const src = sprites.front_default;

  return (
    <li className="Pokemon" onClick={add}>
      <div className="name">{name}</div>
      <div className="weight">{weight}</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default Pokemon;
