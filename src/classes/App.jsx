import React from 'react';

import Trainer from './Trainer';
import PokemonList from './PokemonList';
import Filters from './Filters';

import { fetchAll } from '../utils/pokemons';

class App extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      isElectric: false,
      isLoading: true,
      data: [],
      bag: [],
    };

    this.filter = this.filter.bind(this);
    this.clearBag = this.clearBag.bind(this);
  }

  filter() {
    this.setState(prevState => {
      return { isElectric: !prevState.isElectric };
    });
  }

  clearBag() {
    this.setState({
      bag: [],
    });
  }

  componentDidMount() {
    fetchAll().then(value => {
      this.setState({
        data: value,
        isLoading: false,
        bag: [value[0]],
      });
    });
  }

  render() {
    const { isElectric, data, isLoading, bag } = this.state;

    const pokemonsToDisplay = isElectric
      ? data.filter(pokemon => {
          const types = pokemon.types.map(t => t.type.name);
          return types.includes('electric');
        })
      : data;

    return (
      <div className="App">
        <Trainer
          name="John"
          address="1 rue des Digimons"
          bag={bag}
          clearBag={this.clearBag}
        />
        <Filters active={isElectric} toggle={this.filter} />
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <PokemonList pokemons={pokemonsToDisplay} />
        )}
      </div>
    );
  }
}

export default App;
