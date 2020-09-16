import React from 'react';
import ReactDOM from 'react-dom';

import App from './classes/App';
import Count from './classes/Count';

import data from './_data/pokemon.json';

import './index.scss';

ReactDOM.render(<Count />, document.getElementById('root'));
// ReactDOM.render(<App data={data} />, document.getElementById('root'));
