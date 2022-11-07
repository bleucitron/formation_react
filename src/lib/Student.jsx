import React from 'react';

export default function Student({ name, birthdate }) {
  function displayName() {
    alert(name);
  }

  return (
    <li className="Student" onClick={displayName}>
      <div className="name">{name}</div>
      <div className="birthdate">{birthdate}</div>
    </li>
  );
}
