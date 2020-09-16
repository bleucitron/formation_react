import React, { Component } from 'react';

import Pokemon from './Pokemon';

class PokemonList extends Component {
  render() {
    const { pokemons } = this.props;

    const instances = pokemons.map(pokemon => (
      <Pokemon {...pokemon} key={pokemon.id} />
    ));

    return <ul className='PokemonList'>{instances}</ul>;
  }
}

export default PokemonList;
