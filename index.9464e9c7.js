const e=e=>{const t=document.querySelector(".poke__list"),o=document.createElement("img");o.src=e.sprites.front_default,t.appendChild(o)};(async()=>{(await Promise.all([fetch("https://pokeapi.co/api/v2/pokemon/1").then((e=>e.json())),new Promise((e=>setTimeout((()=>{fetch("https://pokeapi.co/api/v2/pokemon/8").then((e=>e.json())).then(e)}),3e3))),fetch("https://pokeapi.co/api/v2/pokemon/22").then((e=>e.json()))])).forEach(e)})();
//# sourceMappingURL=index.9464e9c7.js.map
