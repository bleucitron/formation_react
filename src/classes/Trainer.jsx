import React from 'react';

import TrainedPokemon from './TrainedPokemon';

import './Trainer.scss';

class Trainer extends React.Component {
  render() {
    const { name, address, pokemons } = this.props;

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
}

export default Trainer;
