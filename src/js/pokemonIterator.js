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
  try {
    if (!requestList.length) {
      return;
    }

    const pokemonUrl = requestList[0];

    const pokemonToRender = await getPokemon(pokemonUrl);
    showPokemon(pokemonToRender);

    const nextReqList = requestList.slice(1);

    getNextPokemon(nextReqList);
  } catch (error) {
    console.log(error.message);
  }
};

console.log(
  getNextPokemon(requestList)
    .then(res => console.log(res))
    .catch(console.error)
);
