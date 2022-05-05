import React, { PureComponent } from 'react';

class TrainedPokemon extends PureComponent {
  constructor() {
    super();

    this.state = {
      xp: 0,
      idInterval: null,
    };
    this.gainExp = this.gainExp.bind(this);
  }

  gainExp() {
    const { xp } = this.state;
    this.setState({
      xp: xp + 10,
    });
  }

  componentDidMount() {
    const idInterval = setInterval(this.gainExp, 100);

    this.setState({
      idInterval,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.idInterval);
  }

  render() {
    const { name, src } = this.props;
    const { xp } = this.state;

    function displayName() {
      console.log('Je suis', name);
    }

    return (
      <li
        className="TrainedPokemon"
        onClick={displayName}
        onMouseMove={this.gainExp}
      >
        <div className="name">{name}</div>
        <div className="exp">{xp}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
