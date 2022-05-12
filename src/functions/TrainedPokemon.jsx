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
    this.setState(prevState => ({ xp: prevState.xp + 1 }));
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
    const { xp } = this.state;

    return (
      <li className="TrainedPokemon" onMouseMove={this.gainExp}>
        <div className="name">{name}</div>
        <div className="exp">{xp}</div>
        <button onClick={releaseSelf}>Libérer</button>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
