const url = "http://localhost:8080/";

function enviar() {
    const id = document.querySelector("#id-input").value;
    const escreverResposta = document.querySelector("#resposta-servidor");
    const tabelaResposta = document.querySelector("#tabela-resposta");



    fetch(url + id)
        .then(res => res.json())
        .then(resJson => {
            // console.log(resJson);
            // tabelaResposta.innerHTML = `<tr><td>${resJson}</td></tr>`;

            if (id == "") {
                console.log(typeof (id));
                console.log("erro, numero não digitado");
                console.log(resJson);
            } else {
                const trElement = document.createElement("tr");
                const thElement = document.createElement("th");
                const tdElement = document.createElement("td");
                const trElement02 = document.createElement("tr");

                trElement.innerHTML = "";
                trElement.innerHTML = "<th>Id</id><th>Nome</th><th>Email</th>";
                tabelaResposta.appendChild(trElement);

                trElement02 = "";
                trElement02.innerHTML = `<td>${resJson.id}</td> <td>${resJson.name}</td> <td>${resJson.email}</td>`;

            }
        })
}

//#################
function designs() {
    fetch(url + "/designs")
        .then(res => res.json())
        .then(resposta => console.log(resposta))
        .catch(erro => console.log("erro em Designs: " + erro));
}

function devFrontEnd() {
    fetch(url + "/devfrontend")
        .then(res => res.json())
        .then(resposta => console.log(resposta))
        .catch(erro => console.log("erro em devFrontEnd: " + erro));
}

function devBackEnd() {
    fetch(url + "/devbackend")
        .then(res => res.json())
        .then(resposta => console.log(resposta))
        .catch(erro => console.log(`erro em devBackEnd: ${erro}`));
}