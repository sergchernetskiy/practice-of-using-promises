// const showPokemon = pokemon => {
//   const body = document.querySelector('.poke__list');
//   const image = document.createElement('img');
//   image.src = pokemon;

//   body.appendChild(image);
// };

// const pokemonList = [
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/676.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/293.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/345.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png',
// ];

// const getPokemon = async pokemonUrl =>
//   fetch(pokemonUrl, { mode: 'no-cors' }).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json();
//   });

// (async () => {
//   for (let i = 0; i < pokemonList.length; i++) {
//     const currentPokemonURL = pokemonList[i];

//     try {
//       showPokemon(currentPokemonURL);
//       const currentPokemon = await getPokemon(currentPokemonURL);
//       // showPokemon(currentPokemon);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// })();

// const getPokemon = async pokemonUrl => {
//   const res = await fetch(pokemonUrl, { mode: 'no-cors' });
//   const pokemon = await res.json();

//   return pokemon;
// };

// (async () => {
//   for (let i = 0; i < pokemonList.length; i++) {
//     const currentPokemonURL = pokemonList[i];

//     try {
//       showPokemon(currentPokemonURL);
//       const currentPokemon = await getPokemon(currentPokemonURL);
//       // showPokemon(currentPokemon);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// })();
