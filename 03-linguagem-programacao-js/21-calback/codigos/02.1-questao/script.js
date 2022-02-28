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

        // setTimeout(escreverHTML, 1000, i, arr[indiceSorteado]);

        // escreverHTML(i, arr[indiceSorteado]);

        arr.splice(indiceSorteado, 1);
    }

    timerInterval = setInterval(escreverHTML, 1000, 0, arrEscreverHTML[0])
    timerInterval = setInterval(escreverHTML, 2000, 1, arrEscreverHTML[1])
    timerInterval = setInterval(escreverHTML, 3000, 2, arrEscreverHTML[2])
    timerInterval = setInterval(escreverHTML, 4000, 3, arrEscreverHTML[3])
    timerInterval = setInterval(escreverHTML, 5000, 4, arrEscreverHTML[4])
    timerInterval = setInterval(escreverHTML, 6000, 5, arrEscreverHTML[5])

    if (timerInterval > 6000) {
        clearInterval(timerInterval);
        timerInterval = 0;
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
