import React, { useEffect, useState, useMemo } from 'react';

import Filters from './Filters';
import Trainer from './Trainer';
import PokemonList from './PokemonList';

import getData from '../utils/fetchPokemon';

function App() {
  const [data, setData] = useState([]);
  const [trained, setTrained] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [selectedType, setSelectedType] = useState();
  const [text, setText] = useState('');

  const types = useMemo(() => {
    const types = data
      .map(pokemon => pokemon.types.map(t => t.type.name))
      .flat();
    return [...new Set(types)];
  }, [data]);

  useEffect(() => {
    getData()
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('E', err);
        setError('Could not get pokemons');
        setIsLoading(false);
      });
  }, []);

  function updateText(e) {
    setText(e.target.value);
  }

  function catchPokemon(pokemon) {
    const catchId = new Date().getTime();
    const caught = { ...pokemon, catchId };

    setTrained(prevTrained => [...prevTrained, caught]);
  }

  function releasePokemon(pokemon) {
    const { catchId } = pokemon;

    setTrained(prevTrained => prevTrained.filter(p => p.catchId !== catchId));
  }

  function selectType(type) {
    setSelectedType(prevType => {
      const newSelection = type === prevType ? undefined : type;
      return newSelection;
    });
  }

  function renderList() {
    let pokemonsToDisplay = selectedType
      ? data.filter(pokemon =>
          pokemon.types.find(t => t.type.name === selectedType),
        )
      : data;

    pokemonsToDisplay = text
      ? pokemonsToDisplay.filter(pokemon =>
          pokemon.name.includes(text.toLowerCase()),
        )
      : pokemonsToDisplay;

    const ids = [...new Set(trained.map(t => t.id))];

    return (
      <PokemonList
        pokemons={pokemonsToDisplay}
        ids={ids}
        catchPokemon={catchPokemon}
      />
    );
  }

  function renderFilters() {
    return (
      <Filters selected={selectedType} select={selectType} types={types} />
    );
  }

  function renderContent() {
    return (
      <>
        {renderFilters()}
        {renderList()}
      </>
    );
  }

  const isReady = !isLoading && !error;

  console.log('TRAINED', trained);

  return (
    <div className='App'>
      <Trainer
        name='Romain'
        address='1 rue de Pouet'
        trainedPokemons={trained}
        releasePokemon={releasePokemon}
      />
      <input value={text} onChange={updateText} />
      {error ? error : null}
      {isLoading ? 'Loading' : null}
      {isReady ? renderContent() : null}
    </div>
  );
}

export default App;
