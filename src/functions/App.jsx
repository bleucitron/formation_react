import React, { useState, useEffect, useMemo } from 'react';

import Trainer from './Trainer';
import Clock from './Clock';
import PokemonList from './PokemonList';
import Filters from './Filters';

import { fetchAll } from '../utils/pokemons';
import LangContext from '../utils/context';

function extractTypes(data) {
  const allTypes = data.map(item => item.types.map(t => t.type.name)).flat();
  const set = new Set(allTypes);
  const uniqueTypes = [...set];
  return uniqueTypes;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('');
  const [data, setData] = useState([]);
  const [bag, setBag] = useState([]);
  const [text, setText] = useState('');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    fetchAll().then(value => {
      setData(value);
      setIsLoading(false);
    });
  }, []);

  function filter(t) {
    setSelectedType(prevType => (prevType === t ? '' : t));
  }

  function updateText(e) {
    setText(e.target.value);
  }

  function clearBag() {
    setBag([]);
  }

  const types = useMemo(() => extractTypes(data), [data]);

  function catchPokemon(pokemon) {
    const trainedId = Date.now();
    const trainedPokemon = { ...pokemon, trainedId: trainedId };

    setBag(prevBag => [...prevBag, trainedPokemon]);
  }

  function releasePokemon(pokemon) {
    setBag(prevBag => prevBag.filter(p => p.trainedId !== pokemon.trainedId));
  }

  const filteredByType = selectedType
    ? data.filter(pokemon => {
        const types = pokemon.types.map(t => t.type.name);
        return types.includes(selectedType);
      })
    : data;

  const filteredByText = text
    ? filteredByType.filter(pokemon => {
        return pokemon.name.includes(text);
      })
    : filteredByType;

  return (
    <LangContext.Provider value={lang}>
      <div className="App">
        <button
          className={lang === 'fr' ? 'active' : ''}
          onClick={() => setLang('fr')}
        >
          Fr
        </button>
        <button
          className={lang === 'en' ? 'active' : ''}
          onClick={() => setLang('en')}
        >
          En
        </button>
        <Trainer
          name="John"
          address="1 rue des Digimons"
          bag={bag}
          clearBag={clearBag}
          releasePokemon={releasePokemon}
        />
        <Filters
          text={text}
          types={types}
          selectedType={selectedType}
          toggle={filter}
          search={updateText}
        />
        <Clock />
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <PokemonList pokemons={filteredByText} catchPokemon={catchPokemon} />
        )}
      </div>
    </LangContext.Provider>
  );
}
export default App;
