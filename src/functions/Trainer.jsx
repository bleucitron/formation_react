import React from 'react';

import TrainedPokemon from '../functions/TrainedPokemon';

function Trainer(props) {
  const { name, address, bag, removePokemon } = props;

  const instances = bag.map(pokemon => (
    <TrainedPokemon
      key={pokemon.uniqueId}
      name={pokemon.name}
      weight={pokemon.weight}
      remove={() => removePokemon(pokemon.uniqueId)}
      src={pokemon.sprites.front_default}
    />
  ));

  return (
    <div className="Trainer">
      <div className="name">{name}</div>
      <div className="address">{address}</div>
      <ul className="pokemons list">{instances}</ul>
    </div>
  );
}

export default Trainer;
