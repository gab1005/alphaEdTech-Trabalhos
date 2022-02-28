const urlServer = "http://localhost:3001";
const escreverHTML = document.querySelector(".game-portfolio");
const button = document.querySelector(".button-forms");
const buttonPortifolio = document.querySelector(".button-portifolio");


buttonPortifolio.addEventListener("click", portifolio);
button.addEventListener("click", enviar);

function enviar() {
    // pegando valores do html
    const inputNome = document.querySelector("#nome").value;
    const inputAno = document.querySelector("#ano").value;
    const inputGenero = document.querySelector("#genero").value;
    const inputMultiplay = document.querySelector("input[name='multiplay']:checked").value;
    const inputOffline = document.querySelector("#offline").value;
    const inputCrossPlataform = document.querySelector("input[name='cross-plataform']:checked").value

    let objectJson = {
        "nome": inputNome,
        "ano": inputAno,
        "genero": inputGenero,
        "multiplay": inputMultiplay,
        "offline": inputOffline,
        "crossplataform": inputCrossPlataform
    }

    fetch(urlServer + `/?obj=${JSON.stringify(objectJson)}`)
        .then(res => res.text())
        .then(data => {
            dataJson = JSON.parse(data);
            console.log(dataJson);
        })
        .catch((err) => {
            console.log("erro em receber resposta:", err)
        })
}

function portifolio() {
    fetch(urlServer + `/portifolio`)
        .then(res => res.text())
        .then(resText => {
            const responseObj = JSON.parse(resText);
            console.log(responseObj);
        })
        .catch(err => {
            console.log(`erro no portifolio: ${err}`);
        });
}
