import React, { Component } from 'react';

import PokemonList from './PokemonList';
import Trainer from './Trainer';
import Filter from './Filter';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isElec: false,
    };

    this.filter = this.filter.bind(this);
  }

  filter() {
    this.setState({
      isElec: !this.state.isElec,
    });
  }

  render() {
    const { data } = this.props;
    const { isElec } = this.state;

    const displayed = isElec
      ? data.filter(pokemon =>
          pokemon.types.find(t => t.type.name === 'electric'),
        )
      : data;

    return (
      <div className="App">
        <Trainer
          name="Romain"
          address="1 rue des pokemons"
          pokemons={[data[0], data[1]]}
        />
        <Filter filter={this.filter} active={isElec} />
        <PokemonList pokemons={displayed} />
      </div>
    );
  }
}
export default App;
