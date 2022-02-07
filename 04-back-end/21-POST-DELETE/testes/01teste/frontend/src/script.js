const urlServidor = "http://localhost:3000";

const id = document.querySelector(".entrada-id");
const nome = document.querySelector(".entrada-nome");
const email = document.querySelector(".entrada-email");
const escrever = document.querySelector(".escrever");
const botao = document.querySelector(".botao-enviar");

botao.addEventListener("click", requisicao);

function requisicao() {
    const fullUrl = urlServidor + "/enviar";
    fetch(fullUrl)
        .then(res => res.json())
        .then(resJson => {
            escreverHTML(resJson);
        });
}

function escreverHTML(arr) {
    arr.forEach(elem => {
        escrever.innerHTML = "";
        escrever.innerHTML += `
        <td>${elem.id}</td>
        <td>${elem.nome}</td>
        <td>${elem.email}</td>
        `;
    });
}