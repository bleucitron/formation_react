import React, { Component } from 'react';

import PokemonList from '../functions/PokemonList';
import Trainer from '../functions/Trainer';
import Filter from '../functions/Filter';
import { fetchPokemons } from '../utils/api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isElec: false,
      data: null,
    };

    this.filter = this.filter.bind(this);
  }

  async componentDidMount() {
    const data = await fetchPokemons();

    this.setState({
      data,
    });
  }

  filter() {
    this.setState(state => ({
      isElec: !state.isElec,
    }));
  }

  render() {
    const { isElec, data } = this.state;

    let content;
    if (!data) content = <div className="loader">Chargement</div>;
    else {
      const displayed = isElec
        ? data.filter(pokemon =>
            pokemon.types.find(t => t.type.name === 'electric'),
          )
        : data;

      content = (
        <>
          <Trainer
            name="Romain"
            address="1 rue des pokemons"
            pokemons={[data[0], data[1]]}
          />
          <Filter filter={this.filter} active={isElec} />
          <PokemonList pokemons={displayed} />
        </>
      );
    }

    return <div className="App">{content}</div>;
  }
}
export default App;
