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
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/676.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/293.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/345.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
//   'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png',
// ];

// const fetchImg = async imgUrl => {
//   return new Promise((resolve, reject) => {
//     fetch(imgUrl, { mode: 'no-cors' }).then(data => {
//       console.log('image was got');
//       resolve(); //таким чином ми вказуємо коли закінчиться (картинка завантажиться)
//     });
//   }).catch(e => {
//     reject(e);
//   });
// };

// //нижче представлений самий простий спосіб як можна асинхронно рухатись в циклі.

// (async () => {
//   for (let i = 0; i < imageList.length; i++) {
//     const currentImg = imageList[i];

//     insertToDom(currentImg);
//     await fetchImg(currentImg);
//   }
// })();
