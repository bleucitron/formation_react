import React from 'react';
import ReactDOM from 'react-dom';

import App from './classes/App';

import './index.scss';

import data from './_data/pokemon.json';

ReactDOM.render(<App data={data} />, document.getElementById('root'));
