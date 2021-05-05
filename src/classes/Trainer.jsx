import React, { Component } from 'react';
import TrainedPokemon from './TrainedPokemon';

class Trainer extends Component {
  render() {
    const { name, address, pokemons } = this.props;

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
}
export default Trainer;
