import React, { Component } from 'react';

import './TrainedPokemon.scss';

class TrainedPokemon extends Component {
  render() {
    const { name, weight, src } = this.props;

    function displayName() {
      console.log('Je suis', name);
    }

    return (
      <li className='TrainedPokemon' onClick={displayName}>
        <div className='name'>{name}</div>
        <div className='weight'>{weight}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
