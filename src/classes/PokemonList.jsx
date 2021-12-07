import React from 'react';

import Pokemon from './Pokemon';

class PokemonList extends React.Component {
  render() {
    const { pokemons } = this.props;

    const instances = pokemons.map(pokemon => (
      <Pokemon
        key={pokemon.id}
        name={pokemon.name}
        weight={pokemon.weight}
        src={pokemon.sprites.front_default}
      />
    ));

    return <ul>{instances}</ul>;
  }
}

export default PokemonList;
