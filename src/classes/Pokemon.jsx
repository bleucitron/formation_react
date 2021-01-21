import React from 'react';

function Pokemon({ name, weight, src }) {
  return (
    <li className="Pokemon">
      <div className="name">{name}</div>
      <div className="weight">{weight} kg</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default Pokemon;
