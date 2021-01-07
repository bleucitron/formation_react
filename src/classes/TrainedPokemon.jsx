import React, { Component } from 'react';

class TrainedPokemon extends Component {
  constructor() {
    super();

    this.state = {
      exp: 0,
    };

    this.displayName = this.displayName.bind(this);
    this.gainExp = this.gainExp.bind(this);
  }

  gainExp() {
    const { exp } = this.state;

    this.setState({
      exp: exp + 10,
    });
  }

  displayName() {
    const { name } = this.props;
    console.log('Je suis', name);
  }

  render() {
    const { name, weight, src } = this.props;
    const { exp } = this.state;

    return (
      <li className="TrainedPokemon" onMouseMove={this.gainExp}>
        <div className="name">{name}</div>
        <div className="exp">{exp}</div>
        <div className="weight">{weight} kg</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
