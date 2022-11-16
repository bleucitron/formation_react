import React from "react";

function Favorite() {
  return <div className="Favorite"></div>;
}

export default function Student({ name, picture, birthdate, favorite }) {
  function displayName() {
    console.log(name);
  }

  return (
    <li className="Student" onClick={displayName}>
      <div className="name">{name}</div>
      <div className="birthdate">{birthdate}</div>
      {picture ? <img src={picture} alt={name} /> : null}
      {favorite ? <Favorite /> : null}
    </li>
  );
}
