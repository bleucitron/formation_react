import React, { Component } from 'react';

import './Pokemon.scss';

class Pokemon extends Component {
  render() {
    const { name, weight, src, types } = this.props;

    function displayName() {
      console.log('Je suis', name);
    }

    const pkmTypes = types.map(t => (
      <div className='type' key={t.slot}>
        {t.type.name}
      </div>
    ));

    return (
      <li className='Pokemon' onClick={displayName}>
        <div className='name'>{name}</div>
        <div className='weight'>{weight}</div>
        {src && <img src={src} alt={name} />}
        <div className='types'>{pkmTypes}</div>
      </li>
    );
  }
}

export default Pokemon;
