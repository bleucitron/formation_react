import React from 'react';
import { useExp } from './hooks';

function Favorite() {
  return <div className="Favorite"></div>;
}

function Student({ name, picture, birthdate, favorite }) {
  const [exp, setExp] = useExp(0);

  function displayName() {
    console.log(name);
  }

  return (
    <li
      className="Student"
      onClick={displayName}
      onMouseMove={() => setExp(c => c + 10)}
    >
      <div className="name">{name}</div>
      <div className="birthdate">{birthdate}</div>
      <div>Exp: {exp}</div>
      {picture ? <img src={picture} alt={name} /> : null}
      {favorite ? <Favorite /> : null}
    </li>
  );
}

export default React.memo(Student);
