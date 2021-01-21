import React from 'react';
import TrainedPokemon from './TrainedPokemon';

function Trainer({ name, address, caught }) {
  const trainedPokemons = caught.map(pokemon => (
    <TrainedPokemon
      name={pokemon.name}
      weight={pokemon.weight}
      src={pokemon.sprites.front_default}
      key={pokemon.id}
    />
  ));

  return (
    <div className="Trainer">
      <div className="name">{name}</div>
      <div className="address">{address}</div>

      <ul className="trained">{trainedPokemons}</ul>
    </div>
  );
}

export default Trainer;
