const urlServer = "http://localhost:3000";

const botaoOi = document.querySelector(".botao");
botaoOi.addEventListener("click", mandarOi);

const botaoTudo = document.querySelector(".tudo");
botaoTudo.addEventListener("click", tudo);

const buttonAni = document.querySelector(".aniversario");
buttonAni.addEventListener("click", aniversario);

const buttonTest = document.querySelector(".teste");
buttonTest.addEventListener("click", teste);



function mandarOi() {
    fetch(urlServer)
        .then(promisse => promisse.text())
        .then(resText => console.log(resText));
}

function tudo() {
    fetch(urlServer + "/tudo")
        .then(promisse => promisse.text())
        .then(resText => console.log(JSON.parse(resText)));
}

function aniversario() {
    const mes = document.querySelector(".input-mes").value;
    fetch(urlServer + `/aniversariantes?mes=${mes}`)
        .then(res => res.json())
        .then(resJson => console.log(resJson));
}

function teste() {
    const entrada = document.querySelector(".input-mes").value;
    fetch(urlServer + `/teste?entrada=${entrada}`)
        .then(promisse => promisse.text())
        .then(resText => console.log(resText));
}
