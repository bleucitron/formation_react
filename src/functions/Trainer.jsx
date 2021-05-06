import React from 'react';
import TrainedPokemon from '../functions/TrainedPokemon';

function Trainer({ name, address, pokemons }) {
  const list = pokemons.map(p => (
    <TrainedPokemon
      name={p.name}
      weight={p.weight}
      src={p.sprites.front_default}
      key={p.id}
    />
  ));

  return (
    <div className="Trainer">
      <div className="name">{name}</div>
      <div className="address">{address}</div>
      {list}
    </div>
  );
}

export default React.memo(Trainer);
