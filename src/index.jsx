import React from 'react';
import ReactDOM from 'react-dom';

import data from './_data/pokemon.json';

import App from './classes/App';

import './reset.css';
import './index.css';

console.log('DATA', data);

ReactDOM.render(<App data={data} />, document.getElementById('root'));
