import React, { Component } from 'react';

class TrainedPokemon extends Component {
  constructor() {
    super();

    this.state = {
      exp: 0,
    };

    this.grow = this.grow.bind(this);
  }

  grow() {
    this.setState({
      exp: this.state.exp + 1,
    });
  }

  render() {
    const { exp } = this.state;
    const { name, weight, src } = this.props;

    return (
      <li className='TrainedPokemon' onMouseMove={this.grow}>
        <div className='name'>{name}</div>
        <div className='weight'>{weight}</div>
        <div className='exp'>{exp}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
