import React, { Component } from 'react';

import Trainer from './Trainer';
import PokemonList from './PokemonList';

class App extends Component {
  render() {
    const { data } = this.props;

    const caught = [data[0], data[3]];

    return (
      <div className="App">
        <Trainer
          name="Sacha"
          caught={caught}
          address="1 rue de Bourg palette"
        />
        <PokemonList items={data} />
      </div>
    );
  }
}

export default App;
