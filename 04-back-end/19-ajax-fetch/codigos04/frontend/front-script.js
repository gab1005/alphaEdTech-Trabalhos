const urlContatoServidor = "http://localhost:8080";
const respostaEscrita = document.querySelector(".resposta");
function solicitacao() {
    fetch(urlContatoServidor)
        .then(res => res.text()
            .then(respostaTexto => {
                respostaEscrita.innerHTML = respostaTexto;
                console.log("não  esta escrevendo a resposta da tag p");
            })
        )
        .catch(erro => console.log("erro: " + erro));
}