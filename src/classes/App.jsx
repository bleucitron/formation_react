import React, { Component } from 'react';
import Trainer from './Trainer';
import PokemonList from './PokemonList';
import Filters from './Filters';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selected: null,
      bag: [],
    };
    this.selectType = this.selectType.bind(this);
  }

  selectType(t) {
    const { selected } = this.state;

    this.setState({
      selected: selected === t ? null : t,
    });
  }

  render() {
    const { data } = this.props;
    const { selected } = this.state;

    const bag = [data[150]];

    console.log('DATA', data);

    const deepTypes = data.map(p => p.types.map(t => t.type.name));
    const flatTypes = deepTypes.flat();
    const uniqueTypes = [...new Set(flatTypes)];

    const pokemonsToDisplay = selected
      ? data.filter(pokemon =>
          pokemon.types.find(t => t.type.name === selected),
        )
      : data;

    return (
      <div className="App">
        <Trainer name="Roin" address="1 rue des pokemons" bag={bag} />
        <Filters
          types={uniqueTypes}
          active={selected}
          filter={this.selectType}
        />
        <PokemonList pokemons={pokemonsToDisplay} />
      </div>
    );
  }
}

export default App;
