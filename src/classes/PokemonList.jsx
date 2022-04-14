import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {
  render() {
    const { pokemons } = this.props;

    const instances = pokemons.map(item => {
      return <Pokemon key={item.id} {...item} />;
    });

    return <ul className="PokemonList">{instances}</ul>;
  }
}

export default PokemonList;
