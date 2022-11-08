import React, { useState } from 'react';

export default function Student(p) {
  const { name, birthdate, avatar, fav } = p;
  const [exp, setExp] = useState(0);

  const star = <div className="favorite"></div>;

  const classes = 'Student ' + (fav ? 'favorite' : '');

  function gainExp() {
    setExp(xp => xp + 1);
  }

  return (
    <li
      className={classes}
      onClick={() => console.log('Name', name)}
      onMouseMove={gainExp}
    >
      <div>{name}</div>
      <div>{birthdate}</div>
      <div>{exp}</div>
      {avatar ? <img src={avatar} alt={name} /> : null}
      {fav ? star : null}
    </li>
  );
}
