import React from 'react';
import { useExp } from './hooks';

export default function Noob(props) {
  const { name, avatar } = props;

  const { exp } = useExp(0);

  return (
    <li className="Noob">
      <div>{name}</div>
      <div>{exp}</div>
      {avatar && <img src={avatar} alt={name} />}
    </li>
  );
}
