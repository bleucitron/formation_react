import React, { Component } from 'react';

class Pokemon extends Component {
  constructor() {
    super();
    this.displayName = this.displayName.bind(this);
  }

  displayName() {
    console.log('Je suis', this.props.name);
  }

  render() {
    const { name, weight, src, exp } = this.props;

    return (
      <li className="Pokemon" onClick={this.displayName}>
        <div className="name">{name}</div>
        <div className="weight">{weight}</div>
        {exp != null && <div className="exp">{exp}</div>}
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default Pokemon;
