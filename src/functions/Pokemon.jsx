import React from 'react';

function Pokemon(props) {
  const { pokemon, children, header, buttons, handleClick } = props;
  const { name, weight, sprites } = pokemon;

  return (
    <li className="Pokemon" onClick={() => handleClick(pokemon)}>
      {header}
      <div className="name">{name}</div>
      <div className="weight">{weight}</div>
      {children}
      {sprites.front_default && <img src={sprites.front_default} alt={name} />}
      {buttons}
    </li>
  );
}

export default React.memo(Pokemon);
