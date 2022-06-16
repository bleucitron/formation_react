import React from 'react';

function Pokemon(props) {
  const { pokemon, children, header } = props;
  const { name, weight, sprites } = pokemon;

  return (
    <li className="Pokemon">
      {header}
      <div className="name">{name}</div>
      <div className="weight">{weight}</div>
      {children}
      {sprites.front_default && <img src={sprites.front_default} alt={name} />}
    </li>
  );
}

export default React.memo(Pokemon);
