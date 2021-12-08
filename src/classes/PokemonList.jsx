import React from 'react';

import Pokemon from './Pokemon';

class PokemonList extends React.Component {
  render() {
    const { pokemons } = this.props;

    const instances = pokemons.map(pokemon => (
      <Pokemon key={pokemon.id} {...pokemon} />
    ));

    return <ul className="list">{instances}</ul>;
  }
}

export default PokemonList;
