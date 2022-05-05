import React from 'react';
import Pokemon from './Pokemon';

function PokemonList(props) {
  const { pokemons } = props;

  const instances = pokemons.map(item => {
    return <Pokemon key={item.id} {...item} />;
  });

  return <ul className="PokemonList list">{instances}</ul>;
}

export default PokemonList;
