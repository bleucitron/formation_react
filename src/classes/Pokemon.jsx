import React from 'react';

class Pokemon extends React.PureComponent {
  render() {
    const { pokemon } = this.props;
    const { name, weight, sprites } = pokemon;

    return (
      <li className="Pokemon">
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
