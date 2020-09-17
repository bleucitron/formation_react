import React from 'react';

import Pokemon from './Pokemon';

function PokemonList({ pokemons }) {
  const instances = pokemons.map(pokemon => (
    <Pokemon {...pokemon} key={pokemon.id} />
  ));

  return <ul className='PokemonList'>{instances}</ul>;
}

export default PokemonList;
