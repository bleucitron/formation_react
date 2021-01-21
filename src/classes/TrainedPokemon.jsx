import React, { Component } from 'react';

class TrainedPokemon extends Component {
  constructor() {
    super();

    this.state = {
      exp: 0,
      nickname: '',
    };

    this.displayName = this.displayName.bind(this);
    this.updateNickname = this.updateNickname.bind(this);
    this.gainExp = this.gainExp.bind(this);
  }

  gainExp() {
    // this.setState({
    //   exp: exp + 10,
    // });

    this.setState(state => ({ exp: state.exp + 10 }));
  }

  updateNickname(e) {
    this.setState({
      nickname: e.target.value,
    });
  }

  displayName() {
    const { name } = this.props;
    console.log('Je suis', name);
  }

  render() {
    const { name, weight, src } = this.props;
    const { exp, nickname } = this.state;

    return (
      <li className="TrainedPokemon" onMouseMove={this.gainExp}>
        <div className="name">{name}</div>
        <input
          value={nickname}
          className="nickname"
          onChange={this.updateNickname}
          placeholder="Entrez un surnom"
        />
        <div className="exp">{exp}</div>
        <div className="weight">{weight} kg</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
