import React from 'react';

import PokemonList from './PokemonList';
import Trainer from './Trainer';

class App extends React.Component {
  render() {
    const { data } = this.props;

    const myPokemons = [data[0]];

    return (
      <div className="App">
        <Trainer
          name="Romain"
          address="1 rue des Pokemons"
          myPokemons={myPokemons}
        />
        <PokemonList pokemons={data} />
      </div>
    );
  }
}

export default App;
