import React from 'react';

class Pokemon extends React.Component {
  render() {
    let { name, weight, sprites } = this.props;

    const src = sprites.front_default;

    return (
      <li className="Pokemon">
        <div className="name">{name}</div>
        <div className="weight">{weight}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default Pokemon;
