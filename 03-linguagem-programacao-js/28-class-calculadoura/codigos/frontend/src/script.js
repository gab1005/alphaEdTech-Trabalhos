// const calc = require("../../backend/modules/cal.js");
const urlServer = "http://localhost:3000";

const inputArr = document.getElementsByTagName("input");
const tabela = document.querySelector(".tabela");
const visor = document.querySelector(".visor");

tabela.addEventlistener("click", () => { console.log("funcionou") });



function botoes() {
    console.log(inputArr);


    for (let i = 0; i <= 8; i++) {
        const text = inputArr[i].value;
        console.log(text);
    }
}

//##################
// const requisicao = document.querySelector(".requisicao");
// requisicao.addEventListener("click", fazerPedido);
// function fazerPedido() {
//     fetch(urlServer)
//         .then(res => res.text())
//         .then(restext => {
//             console.log(restext);
//             escrever(restext);
//         });

//     function escrever(texto) {
//         comunicao.innerHTML = "";
//         comunicao.innerHTML = texto;
//     }
// }

