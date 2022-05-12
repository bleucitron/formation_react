import React, { PureComponent } from 'react';
import Trainer from './Trainer';
import PokemonList from './PokemonList';
import Filters from './Filters';
import Counter from './Counter';
import fetchPokemons from '../utils/fetchPokemon';

// function App() {}

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      selected: null,
      bag: [],
      data: [],
      loading: true,
    };
    this.selectType = this.selectType.bind(this);
    this.catchPokemon = this.catchPokemon.bind(this);
    this.releasePokemon = this.releasePokemon.bind(this);
  }

  selectType(t) {
    this.setState(prevState => ({
      selected: prevState.selected === t ? null : t,
    }));
  }

  catchPokemon(pokemon) {
    this.setState(prevState => {
      const p = { ...pokemon, catchId: Date.now() };

      return {
        bag: [...prevState.bag, p],
      };
    });
  }
  releasePokemon(pokemon) {
    this.setState(prevState => {
      return {
        bag: prevState.bag.filter(p => p.catchId !== pokemon.catchId),
      };
    });
  }

  componentDidMount() {
    fetchPokemons().then(data => {
      this.setState({
        data,
        loading: false,
      });
    });
  }

  render() {
    const { selected, data, bag, loading } = this.state;

    const deepTypes = data.map(p => p.types.map(t => t.type.name));
    const flatTypes = deepTypes.flat();
    const uniqueTypes = [...new Set(flatTypes)];

    const pokemonsToDisplay = selected
      ? data.filter(pokemon =>
          pokemon.types.find(t => t.type.name === selected),
        )
      : data;

    const content = (
      <>
        <Filters
          types={uniqueTypes}
          active={selected}
          filter={this.selectType}
        />
        <PokemonList
          pokemons={pokemonsToDisplay}
          catchPokemon={this.catchPokemon}
        />
      </>
    );

    const loader = <div className="Loading">Loading</div>;

    return (
      <div className="App">
        <Trainer
          name="Romain"
          address="1 rue des pokemons"
          bag={bag}
          releasePokemon={this.releasePokemon}
        />
        {/* <Counter /> */}
        {loading ? loader : content}
      </div>
    );
  }
}

export default App;
