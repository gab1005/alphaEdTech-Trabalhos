const url = "http://localhost:8080/";

function enviar() {
    const inputId = document.querySelector("#id-input").value;
    fetch(url + `:${inputId}`)
        .then(res => res.text())
        .then(respostaTexto => console.log(respostaTexto));
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