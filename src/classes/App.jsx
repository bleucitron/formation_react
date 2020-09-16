import React, { Component } from 'react';

import Trainer from './Trainer';
import PokemonList from './PokemonList';

class App extends Component {
  render() {
    const { data } = this.props;

    const caught = [data[0]];

    return (
      <div className='App'>
        <Trainer
          name='Romain'
          address='1 rue de Pouet'
          trainedPokemons={caught}
        />
        <PokemonList pokemons={data} />
      </div>
    );
  }
}

export default App;
