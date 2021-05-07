import React, { useState, useEffect, useMemo } from 'react';

import PokemonList from '../functions/PokemonList';
import Trainer from '../functions/Trainer';
import Filters from '../functions/Filters';
import { fetchPokemons } from '../utils/api';

function App() {
  const [selectedType, setSelectedType] = useState();
  const [data, setData] = useState();
  const [pokemonsInBag, setPokemonsInBag] = useState([]);

  useEffect(() => {
    fetchPokemons().then(setData);
  }, []);

  function select(type) {
    setSelectedType(selectedType === type ? undefined : type);
  }

  function addPokemon(pokemon) {
    const p = { ...pokemon, idInBag: Date.now() };

    setPokemonsInBag([...pokemonsInBag, p]);
  }
  function removePokemon(idInBag) {
    setPokemonsInBag(pokemonsInBag.filter(p => p.idInBag !== idInBag));
  }

  const types = useMemo(() => {
    const set = new Set(
      data?.map(pokemon => pokemon.types.map(t => t.type.name)).flat(),
    );

    return [...set];
  }, [data]);

  let content;
  if (!data) content = <div className="loader">Chargement</div>;
  else {
    const displayed = selectedType
      ? data.filter(pokemon =>
          pokemon.types.find(t => t.type.name === selectedType),
        )
      : data;

    content = (
      <>
        <Trainer
          name="Romain"
          address="1 rue des pokemons"
          pokemons={pokemonsInBag}
          release={removePokemon}
        />
        <Filters filter={select} activeLabel={selectedType} labels={types} />
        <PokemonList pokemons={displayed} addPokemon={addPokemon} />
      </>
    );
  }

  return <div className="App">{content}</div>;
}

export default App;
