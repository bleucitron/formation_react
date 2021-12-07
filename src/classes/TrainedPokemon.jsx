import React from 'react';

class TrainedPokemon extends React.Component {
  render() {
    let { name, weight, src } = this.props;

    function displayName() {
      console.log('Je suis', name);
    }

    return (
      <li className="TrainedPokemon" onClick={displayName}>
        <div className="name">{name}</div>
        <div className="weight">{weight}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;
