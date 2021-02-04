import React from 'react';
import Pokemon from './Pokemon';

function PokemonList({ items }) {
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

export default PokemonList;
