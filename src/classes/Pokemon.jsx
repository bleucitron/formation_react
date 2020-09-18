import React from 'react';

function Pokemon({ name, weight, sprites, isCaught, catchMe }) {
  const src = sprites.front_default;

  const classes = isCaught ? 'Pokemon caught' : 'Pokemon';

  return (
    <li className={classes} onClick={catchMe}>
      <div className='name'>{name}</div>
      <div className='weight'>{weight}</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default React.memo(Pokemon);
