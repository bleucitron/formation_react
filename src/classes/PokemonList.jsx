import React from 'react';

import Pokemon from './Pokemon';

import './PokemonList.scss';

function PokemonList(props) {
  const { pokemons, add } = props;

  const content = pokemons.map(pokemon => (
    <Pokemon
      id={pokemon.id}
      name={pokemon.name}
      weight={pokemon.weight}
      src={pokemon.sprites.front_default}
      types={pokemon.types}
      add={add}
      key={pokemon.id}
    />
  ));

  return <ul className='PokemonList'>{content}</ul>;
}

export default PokemonList;
