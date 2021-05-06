import React, { Component } from 'react';
import Pokemon from '../functions/Pokemon';

class TrainedPokemon extends Component {
  // High Order Component
  constructor(props) {
    super();
    this.state = {
      exp: 0,
      name: props.name,
    };

    this.gainExp = this.gainExp.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  gainExp() {
    this.setState(state => ({
      exp: state.exp + 100,
    }));
  }

  changeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    const { exp, name } = this.state;

    return (
      <div onMouseMove={this.gainExp}>
        <Pokemon {...this.props} name={name} exp={exp} />
        <input value={name} name="name" onChange={this.changeName} />
      </div>
    );
  }
}

export default TrainedPokemon;
