import React from 'react';

export default function Pokemon({ name, weight, src }) {
  function displayName() {
    console.log(name);
  }

  return (
    <li className="Pokemon" onClick={displayName}>
      <div className="name">{name}</div>
      <div className="weight">{weight}</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}
