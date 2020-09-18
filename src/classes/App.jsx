import React, { Component } from 'react';

import Filters from './Filters';
import Trainer from './Trainer';
import PokemonList from './PokemonList';

import getData from '../utils/fetchPokemon';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      isLoading: true,
      error: undefined,
      selectedType: undefined,
      text: '',
    };

    this.selectType = this.selectType.bind(this);
    this.updateText = this.updateText.bind(this);
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
        // this.setState({ data: localData, isLoading: false });
        this.setState({ isLoading: false, error: 'Could not get pokemons' });
      });
  }

  updateText(e) {
    this.setState({
      text: e.target.value,
    });
  }

  renderList() {
    const { selectedType, data, text } = this.state;

    let pokemonsToDisplay = selectedType
      ? data.filter(pokemon =>
          pokemon.types.find(t => t.type.name === selectedType),
        )
      : data;

    pokemonsToDisplay = text
      ? pokemonsToDisplay.filter(pokemon =>
          pokemon.name.includes(text.toLowerCase()),
        )
      : pokemonsToDisplay;

    return <PokemonList pokemons={pokemonsToDisplay} />;
  }

  renderFilters() {
    const { selectedType, data } = this.state;

    let types = data.map(pokemon => pokemon.types.map(t => t.type.name)).flat();
    types = [...new Set(types)];

    return (
      <Filters selected={selectedType} select={this.selectType} types={types} />
    );
  }

  renderContent() {
    return (
      <>
        {this.renderFilters()}
        {this.renderList()}
      </>
    );
  }

  render() {
    const { data, isLoading, error, text } = this.state;

    const isReady = !isLoading && !error;
    const caught = !isReady || data.length === 0 ? undefined : [data[0]];

    return (
      <div className='App'>
        <Trainer
          name='Romain'
          address='1 rue de Pouet'
          trainedPokemons={caught}
        />
        <input value={text} onChange={this.updateText} />
        {error ? error : null}
        {isLoading ? 'Loading' : null}
        {isReady ? this.renderContent() : null}
      </div>
    );
  }
}

export default App;
