import React from 'react';
import { useExp } from './hooks';

import '../styles/Student.css';

export default function Student(p) {
  const { name, birthdate, avatar, fav } = p;

  const { exp, addExp } = useExp(10, 10, 500);

  const star = <div className="favorite"></div>;

  const classes = 'Student ' + (fav ? 'favorite' : '');

  return (
    <li className={classes} onClick={() => console.log('Name', name)}>
      <div>{name}</div>
      <div>{birthdate}</div>
      <div>{exp}</div>
      {avatar ? <img src={avatar} alt={name} /> : null}
      {fav ? star : null}
      <button onClick={() => addExp(1000)}>Boost</button>
    </li>
  );
}
