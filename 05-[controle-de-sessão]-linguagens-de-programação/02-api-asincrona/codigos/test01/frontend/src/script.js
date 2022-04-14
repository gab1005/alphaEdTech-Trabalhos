const express = requier('express');
const app = express();

const personagem = await fetch('https://rickandmortyapi.com/api/character/1').json();
console.log(`nome = ${personagem}`);

const nome = personagem.name;
console.log(`nome = ${nome}`);

const nomeUnico = nome.split(' ');
const nomeUnico1 = nomeUnico[0];


const pesquisaPorNome = fetch(`https://rickandmortyapi.com/api/character/?name=${nomeUnico1}`);
console.log(pesquisaPorNome);