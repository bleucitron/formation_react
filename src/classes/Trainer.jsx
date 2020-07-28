import React, { Component } from 'react';

import TrainedPokemon from './TrainedPokemon';

class Trainer extends Component {
  render() {
    const { name, address, pokemons } = this.props;

    const pkms = pokemons.map(pokemon => (
      <TrainedPokemon
        name={pokemon.name}
        weight={pokemon.weight}
        key={pokemon.id}
      />
    ));

    return (
      <div className='Trainer'>
        <div className='name'>{name}</div>
        <div className='address'>{address}</div>
        <ul className='TrainedPokemons'>{pkms}</ul>
      </div>
    );
  }
}

export default Trainer;
