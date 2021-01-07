import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, weight, src } = this.props;
    return (
      <li className="Pokemon" onClick={this.displayName}>
        <div className="name">{name}</div>
        <div className="weight">{weight} kg</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default Pokemon;
