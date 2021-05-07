import React from 'react';
import Pokemon from './Pokemon';

function PokemonList({ pokemons, addPokemon }) {
  const displayed = pokemons.map(pokemon => {
    const { name, weight, sprites, id } = pokemon;

    return (
      <Pokemon
        name={name}
        weight={weight}
        src={sprites.front_default}
        select={() => addPokemon(pokemon)}
        key={id}
      />
    );
  });

  return <ul className="PokemonList list">{displayed}</ul>;
}

export default React.memo(PokemonList);
