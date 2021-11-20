import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import data from './_data/pokemon.json';
import App from './classes/App';

ReactDOM.render(<App data={data} />, document.getElementById('root'));
