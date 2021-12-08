import React from 'react';

import TrainedPokemon from '../classes/TrainedPokemon';

function Trainer(props) {
  const { name, address, myPokemons } = props;

  const instances = myPokemons.map(pokemon => (
    <TrainedPokemon
      key={pokemon.id}
      name={pokemon.name}
      weight={pokemon.weight}
      src={pokemon.sprites.front_default}
    />
  ));

  return (
    <div className="Trainer">
      <div className="name">{name}</div>
      <div className="address">{address}</div>
      <ul className="pokemons">{instances}</ul>
    </div>
  );
}

export default Trainer;
