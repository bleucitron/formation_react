import React from 'react';

export default function Student({ name, birthdate, img, favorite }) {
  const imgComp = img ? <img src={img} alt={name} /> : null;
  const favoriteComp = favorite ? <div className="favorite" /> : null;

  return (
    <li className="Student">
      <div className="name">{name}</div>
      <div className="birthdate">{birthdate}</div>
      {imgComp}
      {favoriteComp}
    </li>
  );
}
