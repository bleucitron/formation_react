import React from 'react';

import PokemonList from '../classes/PokemonList';
import Trainer from '../functions/Trainer';
import Filters from '../functions/Filters';

import fetchPokemons from '../utils/fetchPokemon';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isElectric: false,
      data: null,
    };

    this.filter = this.filter.bind(this);
  }

  filter() {
    this.setState(state => ({ isElectric: !state.isElectric }));
  }

  componentDidMount() {
    fetchPokemons().then(data => {
      this.setState({
        data,
      });
    });
  }

  render() {
    const { isElectric, data } = this.state;

    const isLoading = data === null;

    if (isLoading)
      return (
        <div className="App">
          <div className="loader">Loading...</div>
        </div>
      );

    const myPokemons = [data[0]];

    const pokemonsToDisplay = isElectric
      ? data.filter(pokemon =>
          pokemon.types.find(t => t.type.name === 'electric'),
        )
      : data;

    return (
      <div className="App">
        <Trainer
          name="Romain"
          address="1 rue des Pokemons"
          myPokemons={myPokemons}
        />
        <Filters active={isElectric} filter={this.filter} />
        <PokemonList pokemons={pokemonsToDisplay} />
      </div>
    );
  }
}

export default App;
