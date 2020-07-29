import React from 'react';
import ReactDOM from 'react-dom';

import App from './classes/App';

import pokemonData from './_data/pokemon.json';

import './index.scss';

ReactDOM.render(<App data={pokemonData} />, document.getElementById('root'));
