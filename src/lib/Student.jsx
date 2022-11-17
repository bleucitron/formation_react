import React, { useState } from 'react';

function Favorite() {
  return <div className="Favorite"></div>;
}

export default function Student({ name, picture, birthdate, favorite }) {
  const [exp, setExp] = useState(0);

  function gainExp() {
    setExp(prevExp => prevExp + 1);
  }

  function displayName() {
    console.log(name);
  }

  return (
    <li className="Student" onClick={displayName} onMouseMove={gainExp}>
      <div className="name">{name}</div>
      <div className="birthdate">{birthdate}</div>
      <div>Exp: {exp}</div>
      {picture ? <img src={picture} alt={name} /> : null}
      {favorite ? <Favorite /> : null}
    </li>
  );
}
