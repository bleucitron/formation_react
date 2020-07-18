import { writeFileSync } from 'fs';
import Pokedex from 'pokedex-promise-v2';

const pokedex = new Pokedex();

Promise.all(
  [...Array(151).keys()]
    .map(x => x + 1)
    .map(async id => {
      const data = await pokedex.getPokemonByName(id);
      delete data.moves;
      delete data.abilities;
      delete data.game_indices;
      return data;
    }),
).then(results => {
  writeFileSync('pokemon.json', JSON.stringify(results));
});
