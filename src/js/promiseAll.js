const showPokemon = pokemon => {
  const body = document.querySelector('.poke__list');
  const image = document.createElement('img');
  image.src = pokemon.sprites.front_default;

  body.appendChild(image);
};

const getPokemon1 = () =>
  fetch('https://pokeapi.co/api/v2/pokemon/1').then(res => res.json());

const getPokemon2 = () =>
  new Promise(resolve =>
    setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/8')
        .then(res => res.json())
        .then(resolve);
    }, 3000)
  );

const getPokemon3 = () =>
  fetch('https://pokeapi.co/api/v2/pokemon/22').then(res => res.json());

// const pokemonList = Promise.all([getPokemon1(), getPokemon2(), getPokemon3()])
//   .then(res => {
//     console.log(res);

//     res.forEach(showPokemon);
//   })
//   .catch(err => console.log(err.message));

(async () => {
  const pokemonList = await Promise.all([
    getPokemon1(),
    getPokemon2(),
    getPokemon3(),
  ]);
  pokemonList.forEach(showPokemon);
})();
