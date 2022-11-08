import React from 'react';

export default function Noob(props) {
  const { name, avatar } = props;

  return (
    <li className="Noob">
      <div>{name}</div>
      {avatar && <img src={avatar} alt={name} />}
    </li>
  );
}
