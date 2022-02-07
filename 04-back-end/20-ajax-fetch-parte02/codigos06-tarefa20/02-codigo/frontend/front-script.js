const url = "http://localhost:8080/";
let tabelaResposta = document.querySelector("#tabela-resposta");

const selectFront = document.querySelector("#select-front");

const inputFront = document.querySelector("#input-front");
inputFront.addEventListener("input", pesquisar);

function pesquisar() {
    const valueSelect = selectFront.value;
    const valueInput = inputFront.value;

    if (valueSelect == "id" && valueInput.length >= 1) {
        requisicao(valueSelect, valueInput);
    }
    else if (valueInput.length >= 3) {
        requisicao(valueSelect, valueInput);
    }
}

function requisicao(atributo, valor) {
    const fullUrl = `${url}/pesquisar?${atributo}=${valor}`;

    fetch(fullUrl)
        .then(res => res.text())
        .then(resText => {
            let resJson = JSON.parse(resText);
            escreverArr(resJson);
        })
}

function escreverArr(arr) {
    tabelaResposta.innerHTML = "";
    arr.forEach(elem => {
        tabelaResposta.innerHTML += `<tr><td>${elem.id}</td><td>${elem.name}</td><td>${elem.email}</td></tr>`
    });
}
