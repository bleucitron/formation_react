import React from 'react';

export default function Student(p) {
  const { name, birthdate, avatar, fav } = p;

  const star = <div className="favorite"></div>;
  console.log('P', p);

  const classes = 'Student ' + (fav ? 'favorite' : '');

  return (
    <li className={classes} onClick={() => console.log('Name', name)}>
      <div>{name}</div>
      <div>{birthdate}</div>
      {avatar ? <img src={avatar} alt={name} /> : null}
      {fav ? star : null}
    </li>
  );
}
