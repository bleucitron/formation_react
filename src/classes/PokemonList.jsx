import React, { PureComponent } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends PureComponent {
  render() {
    const { pokemons } = this.props;

    const instances = pokemons.map(item => {
      return <Pokemon key={item.id} {...item} />;
    });

    return <ul className="PokemonList list">{instances}</ul>;
  }
}

export default PokemonList;
