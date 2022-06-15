import React from 'react';

import Pokemon from './Pokemon';

class PokemonList extends React.Component {
  render() {
    const { pokemons } = this.props;

    const instances = pokemons.map(p => {
      return <Pokemon key={p.id} pokemon={p} />;
    });

    return <ul className="PokemonList list">{instances}</ul>;
  }
}

export default PokemonList;
