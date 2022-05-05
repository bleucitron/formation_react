import React, { PureComponent } from 'react';
import Trainer from './Trainer';
import PokemonList from './PokemonList';
import Filters from './Filters';
import fetchPokemons from '../utils/fetchPokemon';

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
  }

  selectType(t) {
    this.setState(prevState => ({
      selected: prevState.selected === t ? null : t,
    }));
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
    const { selected, data, loading } = this.state;

    const bag = data.length === 0 ? [] : [data[0]];

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
        <PokemonList pokemons={pokemonsToDisplay} />
      </>
    );

    const loader = <div className="Loading">Loading</div>;

    return (
      <div className="App">
        <Trainer name="Romain" address="1 rue des pokemons" bag={bag} />
        {loading ? loader : content}
      </div>
    );
  }
}

export default App;
