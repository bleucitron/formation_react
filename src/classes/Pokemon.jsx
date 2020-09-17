import React from 'react';

function Pokemon({ name, weight, sprites }) {
  function displayName() {
    console.log('Je suis', name);
  }

  const src = sprites.front_default;

  return (
    <li className='Pokemon' onClick={displayName}>
      <div className='name'>{name}</div>
      <div className='weight'>{weight}</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default React.memo(Pokemon);
