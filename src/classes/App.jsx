import React, { Component } from 'react';

import PokemonList from './PokemonList';
import Trainer from './Trainer';
import Filters from './Filters';

class App extends Component {
  constructor() {
    super();

    this.state = {
      electric: false,
    };

    this.filter = this.filter.bind(this);
  }

  filter() {
    this.setState({
      electric: !this.state.electric,
    });
  }

  render() {
    const { data } = this.props;
    const { electric } = this.state;

    const trainedPokemons = [data[0]];

    const pokemonsToDisplay = electric
      ? data.filter(pokemon =>
          pokemon.types.map(t => t.type.name).includes('electric'),
        )
      : data;

    return (
      <div className='App'>
        <Filters filter={this.filter} />
        <Trainer
          name='Romain'
          address='99 rue du caca'
          pokemons={trainedPokemons}
        />
        <PokemonList pokemons={pokemonsToDisplay} />
      </div>
    );
  }
}

export default App;
