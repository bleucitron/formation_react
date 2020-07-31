import React, { Component } from 'react';

import './TrainedPokemon.scss';

class TrainedPokemon extends Component {
  constructor() {
    super();

    this.state = {
      exp: 0,
    };

    this.displayName = this.displayName.bind(this);
    this.gainExp = this.gainExp.bind(this);
  }

  displayName() {
    console.log('Je suis', this.props.name);
  }

  gainExp() {
    this.setState(exp => ({
      exp: exp + 1,
    }));
  }

  render() {
    const { name, weight, src } = this.props;
    const { exp } = this.state;

    return (
      <li
        className='TrainedPokemon'
        onClick={this.displayName}
        onMouseMove={this.gainExp}
      >
        <div className='name'>{name}</div>
        <div className='weight'>{weight}</div>
        <div className='exp'>{exp}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
