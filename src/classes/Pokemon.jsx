import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, weight, sprites } = pokemon;

    function displayName() {
      console.log('Je suis', name);
    }

    return (
      <li className="Pokemon" onClick={displayName}>
        <div className="name">{name}</div>
        <div className="weight">{weight}</div>
        {sprites.front_default && (
          <img src={sprites.front_default} alt={name} />
        )}
      </li>
    );
  }
}

export default Pokemon;
