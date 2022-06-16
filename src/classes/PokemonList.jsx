import React from 'react';

import Pokemon from './Pokemon';

class PokemonList extends React.PureComponent {
  render() {
    const { pokemons, renderChild } = this.props;

    const renderItem = renderChild
      ? renderChild
      : p => <Pokemon key={p.id} pokemon={p} />;

    const instances = pokemons.map(renderItem);

    return pokemons.length === 0 ? (
      <div>Pas de pokémons</div>
    ) : (
      <ul className="PokemonList list">{instances}</ul>
    );
  }
}

export default PokemonList;
