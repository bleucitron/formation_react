import React from 'react';

function Pokemon(props) {
  const {
    name,
    weight,
    // sprites: { front_default: src },
    catchSelf,
  } = props;

  const src = props.sprites.front_default;

  return (
    <li className="Pokemon" onClick={catchSelf}>
      <div className="name">{name}</div>
      <div className="weight">{weight}</div>
      {src && <img src={src} alt={name} />}
    </li>
  );
}

export default React.memo(Pokemon);
