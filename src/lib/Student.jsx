import React, { useState } from 'react';

export default function Student({ name, birthdate, img, favorite }) {
  const [exp, setExp] = useState(0);

  const imgComp = img ? <img src={img} alt={name} /> : null;
  const favoriteComp = favorite ? <div className="favorite" /> : null;

  return (
    <li className="Student">
      <div className="name">
        {name} <span>{exp}</span>
      </div>
      <div className="birthdate">{birthdate}</div>
      {imgComp}
      {favoriteComp}
    </li>
  );
}
