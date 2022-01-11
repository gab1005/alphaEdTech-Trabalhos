const url = "'http:/localhost:8080'";
// const tabela = document.getElementById("tabela-resposta");
// const criarLinhas = document.createElement("tr");
// const criarColuna = document.createElement("td");

// criarColuna.innerHTML = data;
// criarLinhas.appendChild(criarColuna);
// tabela.appendChild(criarLinhas);
// console.log("data = ", data);
function home() {
    fetch(url)
        .then(res => res.text())
        .then(resposta => console.log(resposta))
        .catch(erro => console.log("deu erro em /" + erro));
}

function designs() {
    fetch(url + "/designs")
        .then(res => res.text())
        .then(resposta => console.log(resposta))
        .catch(erro => console.log("erro em Designs: " + erro));
}

function devFrontEnd() {
    fetch(url + "/devFrontEnd")
        .then(res => res.text())
        .then(resposta => console.log(resposta))
        .catch(erro => console.log("erro em devFrontEnd: " + erro));
}

function devBackEnd() {
    fetch(url + "/devBackEnd")
        .then(res => res.text())
        .then(resposta => console.log(resposta))
        .catch(erro => console.log(`erro em devBackEnd: ${erro}`));
}