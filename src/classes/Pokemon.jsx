import React from 'react';

import './Pokemon.scss';

function Pokemon(props) {
  const { name, weight, src, types } = props;

  const pkmTypes = types.map(t => (
    <div className='type' key={t.slot}>
      {t.type.name}
    </div>
  ));

  return (
    <li className='Pokemon' onClick={() => console.log('Je suis', name)}>
      <div className='name'>{name}</div>
      <div className='weight'>{weight}</div>
      {src && <img src={src} alt={name} />}
      <div className='types'>{pkmTypes}</div>
    </li>
  );
}

export default Pokemon;
