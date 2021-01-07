import React, { Component } from 'react';
import TrainedPokemon from './TrainedPokemon';

class Trainer extends Component {
  render() {
    const { name, address, caught } = this.props;

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

        <ul>{trainedPokemons}</ul>
      </div>
    );
  }
}

export default Trainer;
