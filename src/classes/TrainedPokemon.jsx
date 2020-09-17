import React, { Component } from 'react';

class TrainedPokemon extends Component {
  constructor() {
    super();

    this.state = {
      exp: 0,
    };

    this.train = this.train.bind(this);
  }

  train() {
    this.setState(state => ({
      exp: state.exp + 1,
    }));
  }

  render() {
    const { name, weight, src } = this.props;
    const { exp } = this.state;

    return (
      <li className='TrainedPokemon' onMouseMove={this.train}>
        <div className='name'>{name}</div>
        <div className='weight'>{weight}</div>
        {src && <img src={src} alt={name} />}
        <div className='exp'>{exp}</div>
      </li>
    );
  }
}

export default TrainedPokemon;
