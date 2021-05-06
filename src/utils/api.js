import Pokedex from 'pokedex-promise-v2';

const pokedex = new Pokedex();

export function fetchPokemons() {
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

export function fetchEvolutionChain(name) {}

export function fetchSpecies(name) {
  return pokedex
    .getPokemonSpeciesByName(name)
    .then(function (response) {
      console.log('SPECIES', response);
    })
    .catch(function (error) {
      console.log('There was an ERROR: ', error);
    });
}
