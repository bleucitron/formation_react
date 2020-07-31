import React from 'react';

import TrainedPokemon from '../classes/TrainedPokemon_hook';

import './Trainer.scss';

function Trainer(props) {
  const { name, address, pokemons, remove } = props;

  const trainedPokemons = pokemons.map(pokemon => (
    <TrainedPokemon
      trainedId={pokemon.trainedId}
      name={pokemon.name}
      weight={pokemon.weight}
      src={pokemon.sprites.front_default}
      remove={remove}
      key={pokemon.trainedId}
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
