const url = "http://localhost:8080/";

let trElement = document.createElement("tr");
let thElement = document.createElement("th");
let tdElement = document.createElement("td");
let trElement02 = document.createElement("tr");

let tabelaResposta = document.querySelector("#tabela-resposta");

function enviar() {
    const valueInput = document.querySelector("#input-front").value;
    const valueSelect = document.querySelector("#select-front").value;
    console.log(`input=${valueInput}, select=${valueSelect}`);

    fetch(`http://localhost:8080/pesquisar?${valueSelect}=${valueInput}`) //o igual já "linka" o select com o valor
        .then(res => res.text())
        .then(res => {
            const vetorObj = JSON.parse(res);
            console.log(`vetorObj =${vetorObj}, e res = ${res}`);

            tabelaResposta.innerHTML = "";

            vetorObj.forEach(element => {
                tabelaResposta.innerHTML += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.email}</td></tr>`
            });
        })
        .catch(err => console.log(err))
}
