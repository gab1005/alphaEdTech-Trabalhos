const urlServidor = "http://localhost:8080";

//const botao = document.getElementById("button");
const requisicao = document.querySelector(".retorno");

function pedidoDoCliente() {
    fetch(urlServidor)
        .then(res => res.text()
            .then(textoResposta => requisicao.innerHTML = textoResposta)
        )
        .catch(erro => console.log("erro: " + erro));
}
