import React from 'react';

import Trainer from './Trainer';
import Personne from './Personne';
import PokemonList from './PokemonList';

class App extends React.Component {
  render() {
    const { data } = this.props;

    const bag = [data[0]];

    return (
      <div className="App">
        <Trainer name="John" address="1 rue des Digimons" bag={bag} />
        <Personne name="Marie" />
        <PokemonList pokemons={data} />
      </div>
    );
  }
}

export default App;
