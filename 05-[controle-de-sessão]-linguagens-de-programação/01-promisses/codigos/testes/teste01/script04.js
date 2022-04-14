import fetch from 'cross-fetch';
/**
 * Criamos uma constante que seu valor
 * está ligado a uma função fetch que
 * nesse exemplo é uma busca na pokeapi
 */
const buscarPokemon = fetch('https://pokeapi.co/api/v2/pokemon/1/');

// fetch('https://pokeapi.co/api/v2/pomemon/1/')
//     .then(res => { res.json() })
//     .then(res => { console.log(res) });



buscarPokemon
    .then(res => {
        /**
         * Sabendo que o retorno dessa função
         * é um JSON, eu digo, após terminar a
         * execução da promise, transforme o
         * seu resultado em um JSON 
         */
        return res.json();
    })
    .then(res => {
        /**
         * Apenas logando a resposta em formato
         * JSON vindo da promise
         */
        console.log(res);
    });
