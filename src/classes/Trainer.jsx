import React from 'react';

import Trained from './TrainedPokemon';

class Trainer extends React.Component {
  render() {
    const { name, address, bag } = this.props;

    const instances = bag.map(p => {
      return (
        <Trained
          key={p.id}
          name={p.name}
          src={p.sprites.front_default}
          weight={p.weight}
        />
      );
    });

    return (
      <div className="Trainer">
        <div className="name">{name}</div>
        <div className="address">{address}</div>
        <div className="bag">{instances}</div>
      </div>
    );
  }
}

export default Trainer;
