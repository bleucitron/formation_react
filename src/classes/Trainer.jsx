import React from 'react';

import Trained from './TrainedPokemon';

class Trainer extends React.PureComponent {
  render() {
    const { name, address, bag, clearBag } = this.props;

    return (
      <div className="Trainer">
        <div className="name">{name}</div>
        <div className="address">{address}</div>
        <button onClick={clearBag}>Clear</button>
        <div className="bag">
          <PokemonList
            pokemons={bag}
            renderPokemon={p => <TrainedPokemon key={p.id} pokemon={p} />}
          />
        </div>
      </div>
    );
  }
}

export default Trainer;
