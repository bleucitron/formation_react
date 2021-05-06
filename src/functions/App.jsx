import React, { useState, useEffect } from 'react';

import PokemonList from '../functions/PokemonList';
import Trainer from '../functions/Trainer';
import Filter from '../functions/Filter';
import { fetchPokemons, fetchSpecies } from '../utils/api';

fetchSpecies('bulbasaur');

function App() {
  const [isElec, setIsElec] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetchPokemons().then(setData);
  }, []);

  function filter() {
    setIsElec(isElec => !isElec);
  }

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
        <Filter filter={filter} active={isElec} />
        <PokemonList pokemons={displayed} />
      </>
    );
  }

  return <div className="App">{content}</div>;
}

export default App;
