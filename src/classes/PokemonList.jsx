import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {
  render() {
    const { pokemons } = this.props;

    const displayed = pokemons.map(({ name, weight, sprites, id }) => (
      <Pokemon
        name={name}
        weight={weight}
        src={sprites.back_default}
        key={id}
      />
    ));

    return <ul className="PokemonList list">{displayed}</ul>;
  }
}

export default PokemonList;
