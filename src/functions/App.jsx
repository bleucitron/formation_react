import React, { useState, useEffect, useMemo } from 'react';

import PokemonList from '../functions/PokemonList';
import Trainer from '../functions/Trainer';
import Filters from '../functions/Filters';

import fetchPokemons from '../utils/fetchPokemon';

function App() {
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState();
  const [bag, setBag] = useState([]);

  useEffect(() => {
    fetchPokemons().then(data => setData(data));
  }, []);

  const labels = useMemo(() => {
    const types = data?.map(pokemon => pokemon.types);
    const l = [...new Set(types?.flat().map(t => t.type.name))];

    console.log('Types calculation', l);
    return l;
  }, [data]);

  function addPokemon(id) {
    const caught = {
      ...data.find(pokemon => pokemon.id === id),
      uniqueId: Date.now(),
    };

    setBag(prevBag => [...prevBag, caught]);
  }

  function removePokemon(id) {
    setBag(prevBag => prevBag.filter(pokemon => pokemon.uniqueId !== id));
  }

  function filter(label) {
    setSelected(prevSelected => (prevSelected === label ? null : label));
  }

  const isLoading = data === null;

  if (isLoading)
    return (
      <div className="App">
        <div className="loader">Loading...</div>
      </div>
    );

  const pokemonsToDisplay = selected
    ? data.filter(pokemon => pokemon.types.find(t => t.type.name === selected))
    : data;

  return (
    <div className="App">
      <Trainer
        name="Romain"
        address="1 rue des Pokemons"
        bag={bag}
        removePokemon={removePokemon}
      />
      <Filters labels={labels} active={selected} filter={filter} />
      <PokemonList pokemons={pokemonsToDisplay} addPokemon={addPokemon} />
    </div>
  );
}

export default App;
