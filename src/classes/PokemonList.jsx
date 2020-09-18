import React from 'react';

import Pokemon from './Pokemon';

function PokemonList({ pokemons, ids, catchPokemon }) {
  const instances = pokemons.map(pokemon => (
    <Pokemon
      {...pokemon}
      catchMe={() => catchPokemon(pokemon)}
      isCaught={ids.includes(pokemon.id)}
      key={pokemon.id}
    />
  ));

  return <ul className='PokemonList'>{instances}</ul>;
}

export default PokemonList;
