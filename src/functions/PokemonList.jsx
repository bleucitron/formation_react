import React from 'react';

import Pokemon from './Pokemon';

function PokemonList(props) {
  const { pokemons } = props;

  const instances = pokemons.map(pokemon => (
    <Pokemon
      key={pokemon.id}
      name={pokemon.name}
      weight={pokemon.weight}
      src={pokemon.sprites.front_default}
    />
  ));

  return <ul className="list">{instances}</ul>;
}

export default PokemonList;
