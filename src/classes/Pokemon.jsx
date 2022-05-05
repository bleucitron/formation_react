import React, { PureComponent } from 'react';

class Pokemon extends PureComponent {
  render() {
    const {
      name,
      weight,
      sprites: { front_default: src },
    } = this.props;

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
