import React, { Component } from 'react';
import './App.scss';

class Pokemon extends Component {
  render() {
    const { name, src } = this.props;

    return (
      <li className='Pokemon'>
        <div className='name'>{name}</div>
        <img src={src} alt={name} />
      </li>
    );
  }
}

class App extends Component {
  render() {
    const { data } = this.props;
    const pokemons = data.map(({ id, name, sprites }) => (
      <Pokemon name={name} src={sprites.front_default} key={id} />
    ));

    return (
      <div className='App'>
        <ul className='list'>{pokemons}</ul>
      </div>
    );
  }
}

export default App;
