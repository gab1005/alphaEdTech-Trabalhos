const urlServer = "http://localhost:3000";

const buttonOi = document.querySelector(".button-oi");
buttonOi.addEventListener("click", getOi);

const buttonAniversario = document.querySelector(".button-aniversario");
buttonAniversario.addEventListener("click", getAniversario);

const buttonSetor = document.querySelector(".button-setor");
buttonSetor.addEventListener("click", getSetor);

const buttonRamo = document.querySelector(".button-ramo");
buttonRamo.addEventListener("click", getRamo);


function getOi() {
    fetch(urlServer)
        .then(data => data.text())
        .then(post => console.log(post));
}

function getAniversario() {
    console.log("funcao aniversario");

    const inputAniversarioBruto = document.querySelector(".input-aniversario").value;
    const inputAniversario = String(inputAniversarioBruto);

    fetch(urlServer + `/aniversarioGrupo?mes=${inputAniversario}`)
        .then(res => res.text())
        .then(resJson => {
            console.log("resposta do servidor");
            console.log(JSON.parse(resJson));
        });
}

function getSetor() {
    const setor = String(document.querySelector(".input-setor").value);

    fetch(urlServer + `/setorGrupo?setor=${setor}`)
        .then(res => res.text())
        .then(resJson => console.log(JSON.parse(resJson)));
}

function getRamo() {
    const ramo = String(document.querySelector(".input-ramo").value);

    fetch(urlServer + `/ramoGrupo?ramo=${ramo}`)
        .then(res => res.text())
        .then(resJson => console.log(JSON.parse(resJson)));
}
