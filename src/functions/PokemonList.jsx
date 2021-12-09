import React from 'react';

import Pokemon from './Pokemon';

function PokemonList(props) {
  const { pokemons, addPokemon } = props;

  const instances = pokemons.map(pokemon => (
    <Pokemon key={pokemon.id} {...pokemon} add={() => addPokemon(pokemon.id)} />
  ));

  return <ul className="list">{instances}</ul>;
}

export default PokemonList;
