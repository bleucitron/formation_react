import React from 'react';
import Pokemon from './Pokemon';

function PokemonList({ pokemons }) {
  const displayed = pokemons.map(({ name, weight, sprites, id }) => (
    <Pokemon name={name} weight={weight} src={sprites.back_default} key={id} />
  ));

  return <ul className="PokemonList list">{displayed}</ul>;
}

export default React.memo(PokemonList);
