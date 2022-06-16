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
      text: '',
    };

    this.filter = this.filter.bind(this);
    this.clearBag = this.clearBag.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  filter() {
    this.setState(prevState => {
      return {
        isElectric: !prevState.isElectric,
      };
    });
  }
  updateText(e) {
    this.setState({
      text: e.target.value,
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
    const { isElectric, data, isLoading, bag, text } = this.state;

    const filteredByType = isElectric
      ? data.filter(pokemon => {
          const types = pokemon.types.map(t => t.type.name);
          return types.includes('electric');
        })
      : data;

    const filteredByText = text
      ? filteredByType.filter(pokemon => {
          return pokemon.name.includes(text);
        })
      : filteredByType;

    return (
      <div className="App">
        <Trainer
          name="John"
          address="1 rue des Digimons"
          bag={bag}
          clearBag={this.clearBag}
        />
        <Filters
          text={text}
          active={isElectric}
          toggle={this.filter}
          search={this.updateText}
        />
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <PokemonList pokemons={filteredByText} />
        )}
      </div>
    );
  }
}

export default App;
