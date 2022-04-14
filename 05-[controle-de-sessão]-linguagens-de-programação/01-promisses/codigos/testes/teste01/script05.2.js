import fetch from 'cross-fetch';

// esse array vai receber as respostar da API
const pokemonResponse = [];

// esse configura a ordem
// mas acredito que poderia ser substituido por um número qualquer estabelecendo o número re requisições a API
const pokemonList = [1, 2, 3];

for (let i = 0; i < pokemonList.length; i++) {
    pokemonResponse.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonList[i]}/`)
            .then(res => res.json())
    );
}

await Promise.all(pokemonResponse);

console.log(pokemonResponse);
