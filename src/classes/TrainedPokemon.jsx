import React, { PureComponent } from 'react';

class TrainedPokemon extends PureComponent {
  constructor() {
    super();

    this.state = {
      xp: 0,
      nickname: 'Romain',
      idInterval: null,
    };
    this.gainExp = this.gainExp.bind(this);
    this.rename = this.rename.bind(this);
  }

  gainExp() {
    const { xp } = this.state;
    this.setState({
      xp: xp + 10,
    });
  }

  rename(e) {
    this.setState({
      nickname: e.target.value,
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
    const { name, src, releaseSelf } = this.props;
    const { xp, nickname } = this.state;

    return (
      <li className="TrainedPokemon" onMouseMove={this.gainExp}>
        <input value={nickname} onChange={this.rename} />
        <div className="name">{nickname || name}</div>
        <div className="exp">{xp}</div>
        <button onClick={releaseSelf}>Libérer</button>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
