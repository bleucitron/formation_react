import React, { useState, useEffect } from 'react';

import Trainer from '../functions/Trainer';
import PokemonList from '../functions/PokemonList';
import Filters from '../functions/Filters';

import fetchPokemons from '../utils/fetchPokemon';

function App() {
  const [data, setData] = useState();
  const [selected, setSelected] = useState();

  useEffect(async () => {
    const data = await fetchPokemons();

    setData(data);
    console.log('DATA', data);
  }, []);

  function select(type) {
    setSelected(selected => (selected === type ? '' : type));
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const caught = [data[0], data[3]];

  let types = data.map(pokemon => pokemon.types.map(t => t.type.name)).flat();

  types = [...new Set(types)];

  const displayedPokemons = selected
    ? data.filter(pokemon =>
        pokemon.types.map(t => t.type.name).includes(selected),
      )
    : data;

  return (
    <div className="App">
      <Trainer name="Sacha" caught={caught} address="1 rue de Bourg palette" />
      <Filters types={types} selected={selected} select={select} />
      <PokemonList items={displayedPokemons} />
    </div>
  );
}
export default App;
