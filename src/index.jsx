import React from 'react';
import ReactDOM from 'react-dom';

import App from './classes/App';

import './reset.css';
import './index.css';

import data from './_data/pokemon.json';

console.log('Data', data);

ReactDOM.render(<App data={data} />, document.getElementById('root'));
