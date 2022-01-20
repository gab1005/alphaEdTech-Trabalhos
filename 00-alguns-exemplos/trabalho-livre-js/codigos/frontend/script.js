const url = "http://localhost:8080";

const buttonRequest = document.querySelector(".button-request");
buttonRequest.addEventListener("click", enviar);

function enviar() {
    fetch(url + "/pegar/clientes01")
        .then(res => res.text())
        .then(resTexto => {
            let resFinal = JSON.parse(resTexto);
            console.log(...resFinal);
            escrever(resFinal);
        });
}

//escrer resposta do ervidor no html.
function escrever(dataCliente) {


    //dataCliente é nada mais que um array.
    dataCliente.map(elem => {
        criarElementos(elem)
    });

    // let testeResposta = JSON.stringify(dataCliente[0])
    // tableResult.innerHTML = testeResposta;

}

//criar elementos html que receberão a resposta do  servidor.
function criarElementos(elem) {
    const tableResult = document.querySelector(".tbody-result");
    const createRow = document.createElement("tr");

    const createName = document.createElement("td");
    const createDateBuy = document.createElement("td");
    const createDateDue = document.createElement("td");
    const createValue = document.createElement("td");

    createName.innerHTML = elem.name;
    createDateBuy.innerHTML = elem["date-buy"];
    createDateDue.innerHTML = elem["date-due"];
    createValue.innerHTML = elem.value;

    createRow.appendChild(createName);
    createRow.appendChild(createDateBuy);
    createRow.appendChild(createDateDue);
    createRow.appendChild(createValue);

    tableResult.appendChild(createRow);
}
