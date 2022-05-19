import React, { useState, useEffect, useMemo } from 'react';
import Trainer from './Trainer';
import PokemonList from './PokemonList';
import Filters from './Filters';
import Counter from './Counter';

import fetchPokemons from '../utils/fetchPokemon';

function extractTypes(inputData) {
  console.log('Extracting types');
  const deepTypes = inputData.map(p => p.types.map(t => t.type.name));
  const flatTypes = deepTypes.flat();
  return [...new Set(flatTypes)];
}

function App() {
  const [selected, setSelected] = useState();
  const [data, setData] = useState([]);
  const [bag, setBag] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons().then(data => {
      setData(data);
      setLoading(false);
    });
  }, []);

  const uniqueTypes = useMemo(() => extractTypes(data), [data]);

  const pokemonsToDisplay = selected
    ? data.filter(pokemon => pokemon.types.find(t => t.type.name === selected))
    : data;

  function selectType(t) {
    setSelected(prevSelected => (prevSelected === t ? null : t));
  }

  function catchPokemon(pokemon) {
    const p = { ...pokemon, catchId: Date.now() };

    setBag(prevBag => [...prevBag, p]);
  }

  function releasePokemon(pokemon) {
    setBag(prevBag => prevBag.filter(p => p.catchId !== pokemon.catchId));
  }

  const content = (
    <>
      <Filters types={uniqueTypes} active={selected} filter={selectType} />
      <PokemonList pokemons={pokemonsToDisplay} catchPokemon={catchPokemon} />
    </>
  );

  const loader = <div className="Loading">Loading</div>;

  return (
    <div className="App">
      <Trainer
        name="Romain"
        address="1 rue des pokemons"
        bag={bag}
        releasePokemon={releasePokemon}
      />
      <Counter />
      {loading ? loader : content}
    </div>
  );
}
export default App;
