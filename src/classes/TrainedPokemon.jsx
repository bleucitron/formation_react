import React, { Component } from 'react';
import Pokemon from './Pokemon';

class TrainedPokemon extends Component {
  // High Order Component
  constructor() {
    super();
    this.state = {
      exp: 0,
    };

    this.gainExp = this.gainExp.bind(this);
  }

  gainExp() {
    this.setState({
      exp: this.state.exp + 100,
    });
  }

  render() {
    const { exp } = this.state;

    return (
      <div onMouseMove={this.gainExp}>
        <Pokemon {...this.props} exp={exp} />
      </div>
    );
  }
}

export default TrainedPokemon;
