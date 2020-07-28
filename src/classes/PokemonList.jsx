import React, { Component } from 'react';

import Pokemon from './Pokemon';

class PokemonList extends Component {
  render() {
    const { pokemons } = this.props;

    const pkms = pokemons.map(pokemon => (
      <Pokemon
        name={pokemon.name}
        weight={pokemon.weight}
        src={pokemon.sprites.front_default}
        key={pokemon.id}
      />
    ));

    return <ul className='PokemonList'>{pkms}</ul>;
  }
}

export default PokemonList;
