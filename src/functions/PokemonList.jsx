import React from 'react';

import Pokemon from './Pokemon';

function PokemonList(props) {
  const { pokemons, renderPokemon } = props;

  const renderItem = renderPokemon
    ? p => renderPokemon(p)
    : p => <Pokemon key={p.id} pokemon={p} />;

  const instances = pokemons.map(renderItem);

  return pokemons.length === 0 ? (
    <div>Pas de pokémons</div>
  ) : (
    <ul className="PokemonList list">{instances}</ul>
  );
}

export default React.memo(PokemonList);
