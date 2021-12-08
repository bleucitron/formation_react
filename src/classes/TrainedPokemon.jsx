import React from 'react';

class TrainedPokemon extends React.Component {
  constructor() {
    super();

    this.state = {
      exp: 0,
      interval: null,
    };

    this.gainExp = this.gainExp.bind(this);
  }

  gainExp() {
    this.setState(state => ({ exp: state.exp + 1 }));
  }

  componentDidMount() {
    const id = setInterval(this.gainExp, 100);

    this.setState({
      interval: id,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { name, weight, src } = this.props;
    const { exp } = this.state;

    function displayName() {
      console.log('Je suis', name);
    }

    return (
      <li className="TrainedPokemon" onClick={displayName}>
        <div className="name">{name}</div>
        <div className="weight">{weight}</div>
        <div className="experience">{exp}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
