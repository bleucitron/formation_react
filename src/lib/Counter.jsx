import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Romain');

  console.log('REnder counter', count);

  return (
    <p>
      <div>{name}</div>
      <div onClick={() => setCount(10)}>{count}</div>
    </p>
  ); // on affiche l'état actuel de count
}
