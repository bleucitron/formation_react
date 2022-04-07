const url = 'https://pokeapi.co/api/v2/pokemon';

export default function fetchPokemons() {
  return Promise.all(
    [...Array(151).keys()]
      .map(x => x + 1)
      .map(async id => {
        const data = await fetch(`${url}/${id}`).then(r => r.json());
        delete data.moves;
        delete data.abilities;
        delete data.game_indices;
        return data;
      }),
  );
}
