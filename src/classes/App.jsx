import React, { Component } from 'react';

import Filters from './Filters';
import Trainer from './Trainer';
import PokemonList from './PokemonList';

import getData from '../utils/fetchPokemon';
import localData from '../_data/pokemon.json';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      isLoading: true,
      selectedType: undefined,
    };

    this.selectType = this.selectType.bind(this);
  }

  selectType(type) {
    this.setState(prevState => {
      const { selectedType } = prevState;

      const newSelection = type === selectedType ? undefined : type;

      return {
        selectedType: newSelection,
      };
    });
  }

  componentDidMount() {
    getData()
      .then(data => {
        this.setState({ data: data, isLoading: false });
      })
      .catch(err => {
        console.error('E', err);
        this.setState({ data: [localData[0]] });
      });
  }

  renderList() {
    const { isLoading, selectedType, data } = this.state;

    const pokemonsToDisplay = selectedType
      ? data.filter(pokemon =>
          pokemon.types.find(t => t.type.name === selectedType),
        )
      : data;

    return isLoading ? 'LOADING' : <PokemonList pokemons={pokemonsToDisplay} />;
  }

  renderFilter() {
    const { isLoading, selectedType, data } = this.state;

    let types = data.map(pokemon => pokemon.types.map(t => t.type.name)).flat();
    types = [...new Set(types)];

    return isLoading ? (
      'LOADING'
    ) : (
      <Filters selected={selectedType} select={this.selectType} types={types} />
    );
  }

  render() {
    const { data } = this.state;

    const caught = data.length === 0 ? [] : [data[0]];

    return (
      <div className='App'>
        <Trainer
          name='Romain'
          address='1 rue de Pouet'
          trainedPokemons={caught}
        />
        {this.renderFilter()}
        {this.renderList()}
      </div>
    );
  }
}

export default App;
