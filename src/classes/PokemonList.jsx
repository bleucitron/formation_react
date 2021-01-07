import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {
  render() {
    const { items } = this.props;

    const pokemons = items.map(pokemon => (
      <Pokemon
        name={pokemon.name}
        weight={pokemon.weight}
        src={pokemon.sprites.front_default}
        key={pokemon.id}
      />
    ));

    return <ul className="PokemonList">{pokemons}</ul>;
  }
}

export default PokemonList;
