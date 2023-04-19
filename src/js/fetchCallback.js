// const insertToDom = pokemon => {
//   const body = document.querySelector('.poke__list');
//   const image = document.createElement('img');
//   image.src = pokemon;

//   body.appendChild(image);
// };

// const imageList = [
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
// ];

// const fetchImg = (imgUrl, cb) => {
//   fetch(imgUrl, { mode: 'no-cors' }).then(data => {
//     console.log('img was got');
//     cb();
//   });
// };

// const loadNextImg = async indexImg => {
//   const currentImg = imageList[indexImg];

//   if (!currentImg) {
//     console.log('done');
//     return;
//   }

//   fetchImg(currentImg, () => loadNextImg(indexImg + 1));
// };

// const pokemon = loadNextImg(0);
// insertToDom(pokemon);
