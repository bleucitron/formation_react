import React from 'react';

function Pokemon({ name, weight, src, exp }) {
  return (
    <li className="Pokemon" onClick={() => console.log('Name', name)}>
      <div className="name">{name}</div>
      <div className="weight">{weight}</div>
      {exp != null && <div className="exp">{exp}</div>}
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default React.memo(Pokemon);
