import React from 'react';

import PokemonList from './PokemonList';
import Trainer from './Trainer';

class App extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className='App'>
        <Trainer
          name='Romain'
          address='99 rue de la team rocket'
          pokemons={[data[0]]}
        />
        <PokemonList pokemons={data} />
      </div>
    );
  }
}

export default App;
