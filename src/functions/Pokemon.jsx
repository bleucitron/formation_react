import React from 'react';

function Pokemon(props) {
  const { name, weight, src } = props;

  return (
    <li className="Pokemon">
      <div className="name">{name}</div>
      <div className="weight">{weight}</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default Pokemon;
