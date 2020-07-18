import Pokedex from 'pokedex-promise-v2';

const pokedex = new Pokedex();

export default function () {
  return Promise.all(
    [...Array(151).keys()]
      .map(x => x + 1)
      .map(async id => {
        const data = await pokedex.getPokemonByName(id);
        delete data.moves;
        delete data.abilities;
        delete data.game_indices;
        return data;
      }),
  );
}
