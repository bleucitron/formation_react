import React from 'react';
import ReactDOM from 'react-dom';

import Pokemon from './classes/Pokemon';

import './reset.css';
import './index.css';

const app = (
  <>
    <ul>
      <Pokemon name="Pikachu" weight={6} />
      <Pokemon name="Bulbizarre" weight={12} />
    </ul>
    <div className="Trainer">
      <div className="name">Romain</div>
      <div className="address">1 rue des pokemons</div>
    </div>
  </>
);

ReactDOM.render(app, document.getElementById('root'));
