import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

import PokemonList from './PokemonList';
import Trainer from './Trainer';
import Filters from './Filters';

import getData from '../utils/fetchPokemon';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isElectric: false,
      data: [],
      value: '',
    };

    this.toggle = this.toggle.bind(this);
    this.getPokemons = this.getPokemons.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  async getPokemons() {
    const data = await getData();

    this.setState({
      data: data,
    });
  }

  componentDidMount() {
    this.getPokemons();
  }

  toggle() {
    this.setState(state => ({
      isElectric: !state.isElectric,
    }));
  }

  updateValue(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { isElectric, data, value } = this.state;

    const isLoading = data.length === 0;

    const myPokemons = isLoading ? [] : [data[0]];

    let pokemonsToDisplay = data;

    if (isElectric) {
      pokemonsToDisplay = pokemonsToDisplay.filter(pokemon => {
        const types = pokemon.types.map(t => t.type.name);

        return types.includes('electric');
      });
    }

    if (value !== '') {
      pokemonsToDisplay = pokemonsToDisplay.filter(pokemon =>
        pokemon.name.includes(value),
      );
    }

    const list = <PokemonList pokemons={pokemonsToDisplay} />;

    return (
      <div className='App'>
        <Trainer
          name='Romain'
          address='99 rue de la team rocket'
          pokemons={myPokemons}
        />
        <input value={value} onChange={this.updateValue} />
        <Filters isActive={isElectric} toggle={this.toggle} />
        {isLoading ? <PropagateLoader /> : list}
      </div>
    );
  }
}

export default App;
