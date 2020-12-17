import React from 'react';
import ReactDOM from 'react-dom';

import Pokemon from './classes/Pokemon';

import './index.scss';

const pokemon1 = <Pokemon name="Pikachu" weight={4} key="Pikachu" />;
const pokemon2 = <Pokemon name="Bulbizarre" weight={8} key="Bulbizarre" />;

const pokemons = [pokemon1, pokemon2];

const pokemonsListe = <ul className="pokemons">{pokemons}</ul>;

const trainer = (
  <div className="Trainer">
    <div className="name">Sacha</div>
    <div className="address">1 rue de Bourg palette</div>
  </div>
);

ReactDOM.render(
  <>
    {trainer}
    {pokemonsListe}
  </>,
  document.getElementById('root'),
);
