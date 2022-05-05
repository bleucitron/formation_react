import React from 'react';
import TrainedPokemon from './TrainedPokemon';

function Trainer(props) {
  const { name, address, bag } = props;

  const instances = bag.map(item => {
    return (
      <TrainedPokemon
        key={item.id}
        name={item.name}
        weight={item.weight}
        src={item.sprites.back_default}
      />
    );
  });

  return (
    <div className="Trainer">
      <div className="name">{name}</div>
      <div className="address">{address}</div>
      <ul className="bag">{instances}</ul>
    </div>
  );
}

export default React.memo(Trainer);
