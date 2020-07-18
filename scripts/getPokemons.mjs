import { writeFileSync } from 'fs';

import fetchPokemon from '../src/utils/fetchPokemon';

fetchPokemon().then(results => {
  writeFileSync('pokemon.json', JSON.stringify(results));
});
