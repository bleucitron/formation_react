import React, { Component } from 'react';
import Trainer from './Trainer';
import PokemonList from './PokemonList';

class App extends Component {
  render() {
    const { data } = this.props;

    const bag = [data[0]];

    return (
      <div className="App">
        <Trainer name="Roin" address="1 rue des pokemons" bag={bag} />
        <PokemonList pokemons={data} />
      </div>
    );
  }
}

export default App;
