//envair dados da passagem
let acento = 0;
const resposta = document.querySelector(".resposta");
const inputNome = document.querySelector(".input-nome");
const enviar = document.querySelector(".enviar");
enviar.addEventListener("click", enviarDados);

function enviarDados() {
    const nome = inputNome.value;
    resposta.innerHTML = `${nome}, poutrona: ${acento}`;
}

//trocar cor do elemento
const td01 = document.querySelector(".td01");
const td02 = document.querySelector(".td02");
const td03 = document.querySelector(".td03");
const td04 = document.querySelector(".td04");
const td05 = document.querySelector(".td05");
const td06 = document.querySelector(".td06");
const td07 = document.querySelector(".td07");
const td08 = document.querySelector(".td08");

td01.addEventListener("click", mudarCor(td01));
td02.addEventListener("click", mudarCor(td02));
td03.addEventListener("click", mudarCor(td03));
td04.addEventListener("click", mudarCor(td04));
td05.addEventListener("click", mudarCor(td05));
td06.addEventListener("click", mudarCor(td06));
td07.addEventListener("click", mudarCor(td07));
td08.addEventListener("click", mudarCor(td08));


function mudarCor(elemento) {
    // console.log("esta funcionando");
    // td01.style.backgroundColor = "#0000ff";
    // td02.style.backgroundColor = "#0000ff";
    // td03.style.backgroundColor = "#0000ff";
    // td04.style.backgroundColor = "#0000ff";
    // td05.style.backgroundColor = "#0000ff";
    // td06.style.backgroundColor = "#0000ff";
    // td07.style.backgroundColor = "#0000ff";
    // td08.style.backgroundColor = "#0000ff";

    return function mudarcor02() {
        elemento.style.backgroundColor = "#ff0000";
        acento = elemento.innerHTML;
        // console.log(acento);
    }
}
