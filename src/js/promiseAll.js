const showPokemon = pokemon => {
  const body = document.querySelector('.poke__list');
  const image = document.createElement('img');
  image.src = pokemon;

  body.appendChild(image);
};

const pokemonList = [
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/676.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/293.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/345.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png',
];

const getPokemon = async pokemonUrl => {
  const res = await fetch(pokemonUrl, { mode: 'no-cors' });
  return await res.json();
};

const requestList = [...pokemonList];

const getNextPokemon = async requestList => {
  if (!requestList.length) {
    return;
  }

  const currentPokemonList = requestList.slice(0, 3);

  const pokemonToRender = await Promise.all(
    currentPokemonList.map(url => getPokemon(url))
  );

  pokemonToRender.forEach(url => {
    showPokemon(url);
  });

  const nextReqList = requestList.slice(3);
  getNextPokemon(nextReqList);
};

getNextPokemon(requestList);
