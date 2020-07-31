import React, { useState, useEffect } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

import PokemonList from './PokemonList';
import Trainer from './Trainer';
import Filters from './Filters';

import getData from '../utils/fetchPokemon';

function App() {
  const [selectedType, setSelectedType] = useState();
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [myPokemons, setMyPokemons] = useState([]);

  async function getPokemons() {
    const data = await getData();

    setData(data);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  function addPokemon(id) {
    const pokemon = { ...data.find(p => p.id === id) };
    const randId = Math.random() * 10;
    pokemon.trainedId = randId;

    setMyPokemons(t => [...t, pokemon]);
  }

  function removePokemon(id) {
    setMyPokemons(prevMyPokemons => {
      const filteredList = prevMyPokemons.filter(p => p.trainedId !== id);
      return filteredList;
    });
  }

  function toggle(type) {
    if (type === selectedType) {
      setSelectedType();
    } else {
      setSelectedType(type);
    }
  }

  function updateValue(e) {
    setValue(e.target.value);
  }

  const isLoading = data.length === 0;

  let types = data.map(pokemon => pokemon.types.map(t => t.type.name)).flat();
  types = [...new Set(types)].sort();

  let pokemonsToDisplay = data;

  if (selectedType !== undefined) {
    pokemonsToDisplay = pokemonsToDisplay.filter(pokemon => {
      const types = pokemon.types.map(t => t.type.name);

      return types.includes(selectedType);
    });
  }

  if (value !== '') {
    pokemonsToDisplay = pokemonsToDisplay.filter(pokemon =>
      pokemon.name.includes(value),
    );
  }

  const list = <PokemonList pokemons={pokemonsToDisplay} add={addPokemon} />;

  return (
    <div className='App'>
      <Trainer
        name='Romain'
        address='99 rue de la team rocket'
        remove={removePokemon}
        pokemons={myPokemons}
      />
      <input value={value} onChange={updateValue} />
      <Filters types={types} selected={selectedType} toggle={toggle} />
      {isLoading ? <PropagateLoader /> : list}
    </div>
  );
}

export default App;
