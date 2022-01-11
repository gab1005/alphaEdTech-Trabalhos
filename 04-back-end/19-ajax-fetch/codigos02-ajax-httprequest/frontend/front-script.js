const urlServidor = "http://localhost:8080";

const respostaEscrita = document.getElementById("resposta");

function pedidoCliente() {
    const id = document.getElementById("solicitacao-id").value;
    const xhr = new XMLHttpRequest();
    console.log("dentro da função");

    xhr.onreadystatechange = function () {
        console.log("dentro do onreadystatechange");
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            respostaEscrita.innerHTML = JSON.stringify(response);
        }
    };

    xhr.open("GET", `${urlServidor}/${id}`, true);
    xhr.send();
}