import React from 'react';

import TrainedPokemon from './TrainedPokemon';

import './Trainer.scss';

function Trainer(props) {
  const { name, address, pokemons } = props;

  const trainedPokemons = pokemons.map(pokemon => (
    <TrainedPokemon
      name={pokemon.name}
      weight={pokemon.weight}
      src={pokemon.sprites.front_default}
      key={pokemon.id}
    />
  ));

  return (
    <div className='Trainer'>
      <div className='name'>{name}</div>
      <div className='address'>{address}</div>
      <ul>{trainedPokemons}</ul>
    </div>
  );
}

export default Trainer;
