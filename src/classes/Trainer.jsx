import React from 'react';

import TrainedPokemon from './TrainedPokemon_hook';

function Trainer(props) {
  const { name, address, trainedPokemons, releasePokemon } = props;

  const instances = trainedPokemons
    ? trainedPokemons.map(pokemon => (
        <TrainedPokemon
          name={pokemon.name}
          weight={pokemon.weight}
          src={pokemon.sprites.front_default}
          releaseMe={() => releasePokemon(pokemon)}
          key={pokemon.catchId}
        />
      ))
    : undefined;

  const list = trainedPokemons ? <ul className='list'>{instances}</ul> : null;

  return (
    <div className='Trainer'>
      <div className='name'>{name}</div>
      <div className='address'>{address}</div>
      {list}
    </div>
  );
}

export default Trainer;
