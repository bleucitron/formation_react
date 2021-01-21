import React, { Component } from 'react';

import Trainer from './Trainer';
import PokemonList from './PokemonList';
import Filters from './Filters';

import fetchPokemons from '../utils/fetchPokemon';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selected: '',
      data: undefined,
    };

    this.select = this.select.bind(this);
  }

  select(type) {
    this.setState(state => ({
      selected: state.selected === type ? '' : type,
    }));
  }

  async componentDidMount() {
    const data = await fetchPokemons();

    this.setState({ data: data });
    console.log('DATA', data);
  }

  render() {
    const { selected, data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }

    const caught = [data[0], data[3]];

    let types = data.map(pokemon => pokemon.types.map(t => t.type.name)).flat();

    types = [...new Set(types)];

    const displayedPokemons = selected
      ? data.filter(pokemon =>
          pokemon.types.map(t => t.type.name).includes(selected),
        )
      : data;

    return (
      <div className="App">
        <Trainer
          name="Sacha"
          caught={caught}
          address="1 rue de Bourg palette"
        />
        <Filters types={types} selected={selected} select={this.select} />
        <PokemonList items={displayedPokemons} />
      </div>
    );
  }
}

export default App;
