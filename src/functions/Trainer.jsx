import React from 'react';

import PokemonList from './PokemonList';
import TrainedPokemon from './TrainedPokemon';

function Trainer(props) {
  const { name, address, bag, clearBag, releasePokemon } = props;

  return (
    <div className="Trainer">
      <div className="name">{name}</div>
      <div className="address">{address}</div>
      <button onClick={clearBag}>Clear</button>
      <div className="bag">
        <PokemonList
          pokemons={bag}
          renderPokemon={p => (
            <TrainedPokemon
              key={p.trainedId}
              releasePokemon={releasePokemon}
              pokemon={p}
            />
          )}
        />
      </div>
    </div>
  );
}

export default React.memo(Trainer);
