const url = "http://localhost:8080";
const request = document.querySelector(".request");

request.addEventListener("click", requestFunction);
// addEventListener("click",

function requestFunction() {
    fetch(url)
        .then(res => res.json())
        .then(resJson => {
            // console.log(...resJson.lenght);
            writeHTML(resJson)
        });
}

function writeHTML(resServer) {
    const resHTML = document.querySelector(".response");
    resServer.map(elem => {
        const elemTr = document.createElement("tr");

        const elemTdMatricula = document.createElement("td");
        const elemTdNome = document.createElement("td");
        const elemTdRamal = document.createElement("td");
        const elemTdEmail = document.createElement("td");
        const elemTdSetor = document.createElement("td");
        const elemTdNascimento = document.createElement("td");

        elemTdMatricula.innerHTML = `matricula: ${elem.matricula}`;
        elemTdNome.innerHTML = `nome: ${elem.nome}`;
        elemTdRamal.innerHTML = `ramal: ${elem.ramal}`;
        elemTdEmail.innerHTML = `email: ${elem.email}`;
        elemTdSetor.innerHTML = `setor: ${elem.setor}`;
        elemTdNascimento.innerHTML = `nascimento: ${elem.nascimento}`;

        elemTr.appendChild(elemTdMatricula);
        elemTr.appendChild(elemTdNome);
        elemTr.appendChild(elemTdRamal);
        elemTr.appendChild(elemTdEmail);
        elemTr.appendChild(elemTdSetor);
        elemTr.appendChild(elemTdNascimento);

        resHTML.appendChild(elemTr);
    });

    // for (let i = 0; i < resServer.length; i++) {
    //     respHTML.innerHTML += resServer[i].nome;
    // }
}