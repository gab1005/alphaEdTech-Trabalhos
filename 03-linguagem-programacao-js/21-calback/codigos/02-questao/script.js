const buttonStart = document.querySelector('.button-start');
buttonStart.addEventListener('click', sorteio);

const numeros = document.querySelectorAll('.number')

let timeInterval = 0;

function sorteio() {
    let arr = criarArr();
    let arrEscreverHTML = [];

    for (let i = 0; i < 6; i++) {
        let indiceSorteado = Math.random() * arr.length;
        indiceSorteado = parseInt(indiceSorteado);

        console.log(`indiceSorteado = ${indiceSorteado}, arr[indiceSorteado] = ${arr[indiceSorteado]}`);

        arrEscreverHTML.push(arr[indiceSorteado])

        escreverHTML(i, arr[indiceSorteado]);

        arr.splice(indiceSorteado, 1);
    }


    console.log(arrEscreverHTML);
}

function escreverHTML(indice, elem) {
    numeros[indice].innerHTML = elem
}

function criarArr() {
    const arrCompleto = [];
    for (let i = 0; i < 60; i++) {
        arrCompleto[i] = i + 1;
    }
    return arrCompleto;
}
